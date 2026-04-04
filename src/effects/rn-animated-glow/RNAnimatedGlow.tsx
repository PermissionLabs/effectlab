"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * WebGL port of react-native-animated-glow's SkSL shader.
 * Original: https://reactnativeglow.com/
 * Uses SDF rounded rect + gaussian glow + animated perimeter gradients.
 */

const FRAG_SHADER = `
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_rectSize;
uniform float u_cornerRadius;
uniform vec4 u_backgroundColor;
uniform float u_borderWidth;
uniform float u_borderProgress;
uniform int u_layerCount;
uniform float u_coverage[10];
uniform vec4 u_glowSizes[10];
uniform float u_opacity[10];
uniform float u_relativeOffset[10];
uniform float u_layerProgress[10];
uniform float u_placements[10];
uniform vec4 u_colors_0[8];
uniform vec4 u_colors_1[8];
uniform vec4 u_colors_2[8];
uniform vec4 u_colors_3[8];
uniform float u_masterOpacity;
uniform float u_isBorderAnimated;

const float PI = 3.14159265359;

float smooth2(float t) { return t * t * (3.0 - 2.0 * t); }

vec4 getGradientColor(float progress, vec4 colors[8]) {
  float t = progress * 7.0;
  vec4 c = colors[7];
  for (int i = 6; i >= 0; i--) {
    if (t < float(i + 1)) { c = mix(colors[i], colors[i + 1], t - float(i)); }
  }
  return c;
}

float sdfRoundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

float calculatePerimeterProgress(vec2 p, vec2 b, float r) {
  float w = b.x - r; float h = b.y - r;
  float c = PI * r / 2.0;
  float H = 2.0 * w; float V = 2.0 * h;
  float s0 = c; float s1 = s0 + H; float s2 = s1 + c;
  float s3 = s2 + V; float s4 = s3 + c; float s5 = s4 + H;
  float s6 = s5 + c; float perimeter = s6 + V;
  if (perimeter == 0.0) return 0.0;
  float dist = 0.0;
  if (p.x < -w) {
    if (p.y < -h) { vec2 cp = p - vec2(-w,-h); dist = c*((atan(cp.y,cp.x)+PI)/(PI/2.0)); }
    else if (p.y > h) { vec2 cp = p - vec2(-w,h); dist = s5+c*((atan(cp.y,cp.x)-PI/2.0)/(PI/2.0)); }
    else { dist = s6 + (h - p.y); }
  } else if (p.x > w) {
    if (p.y < -h) { vec2 cp = p - vec2(w,-h); dist = s1+c*((atan(cp.y,cp.x)+PI/2.0)/(PI/2.0)); }
    else if (p.y > h) { vec2 cp = p - vec2(w,h); dist = s3+c*(atan(cp.y,cp.x)/(PI/2.0)); }
    else { dist = s2 + (h + p.y); }
  } else {
    if (p.y < 0.0) { dist = s0 + (w + p.x); }
    else { dist = s4 + (w - p.x); }
  }
  return dist / perimeter;
}

float getInterpolatedSize(float progress, vec4 sizes) {
  float seg = 1.0/3.0;
  if (progress < seg) return mix(sizes.x, sizes.y, smooth2(progress/seg));
  else if (progress < 2.0*seg) return mix(sizes.y, sizes.z, smooth2((progress-seg)/seg));
  else return mix(sizes.z, sizes.w, smooth2((progress-2.0*seg)/seg));
}

float gaussian(float x, float mu, float sigma) {
  if (sigma <= 0.0) return 0.0;
  return exp(-(pow(x - mu, 2.0)) / (2.0 * pow(sigma, 2.0)));
}

void main() {
  vec2 center = u_resolution * 0.5;
  vec2 p = gl_FragCoord.xy - center;
  p.y = -p.y; // flip Y
  vec2 b = u_rectSize * 0.5;
  float d = sdfRoundedBox(p, b, u_cornerRadius);
  float perim = calculatePerimeterProgress(p, b, u_cornerRadius);

  vec4 behind = vec4(0.0);
  vec4 front = vec4(0.0);

  for (int i = 0; i < 10; i++) {
    if (i >= u_layerCount) break;
    float ap = fract(perim - u_layerProgress[i] + u_relativeOffset[i]);
    if (ap > u_coverage[i] || u_coverage[i] == 0.0) continue;
    float sp = ap / u_coverage[i];
    float gs = getInterpolatedSize(sp, u_glowSizes[i]);
    float calc = gaussian(abs(d), 0.0, gs);
    if (d > 0.0 && u_placements[i] == 1.0) calc = 0.0;
    if (calc > 0.0) {
      vec4 color;
      if (i == 0) color = getGradientColor(sp, u_colors_1);
      else if (i == 1) color = getGradientColor(sp, u_colors_2);
      else color = getGradientColor(sp, u_colors_3);
      vec4 gc = color * calc * u_opacity[i];
      if (u_placements[i] == 0.0) behind += gc;
      else front += gc;
    }
  }

  vec4 fc = behind;
  if (d <= 0.0) fc = mix(fc, u_backgroundColor, u_backgroundColor.a);
  fc += front;

  if (u_isBorderAnimated > 0.5 && u_borderWidth > 0.0) {
    float bd = abs(d);
    float hw = u_borderWidth / 2.0;
    float bs = 1.0 - smoothstep(hw - 1.0, hw + 1.0, bd);
    if (bs > 0.0) {
      float bap = fract(perim - u_borderProgress);
      vec4 bc = getGradientColor(bap, u_colors_0);
      fc = mix(fc, bc, bs);
    }
  }

  gl_FragColor = fc * u_masterOpacity;
}
`;

const VERT_SHADER = `
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`;

interface PresetData {
  name: string;
  cornerRadius: number;
  outlineWidth: number;
  borderColors: number[][];
  backgroundColor: number[];
  animationSpeed: number;
  borderSpeedMultiplier: number;
  glowLayers: {
    colors: number[][];
    glowSize: number | number[];
    opacity: number;
    speedMultiplier: number;
    coverage: number;
    placement: number;
    relativeOffset: number;
  }[];
}

function parseRgba(s: string): number[] {
  const m = s.match(/rgba?\(([^)]+)\)/);
  if (m) {
    const parts = m[1].split(",").map((v) => parseFloat(v.trim()));
    return [parts[0] / 255, parts[1] / 255, parts[2] / 255, parts[3] ?? 1];
  }
  if (s.startsWith("#")) {
    const hex = s.slice(1);
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
    return [r, g, b, 1];
  }
  return [0, 0, 0, 1];
}

function processColors(colors: number[][]): number[] {
  const seamless = colors.length > 1 ? [...colors, colors[0]] : [...colors, ...colors];
  const result: number[] = [];
  for (let i = 0; i < 8; i++) {
    const p = i / 7;
    const t = p * (seamless.length - 1);
    const idx = Math.floor(t);
    const frac = t - idx;
    const a = seamless[Math.min(idx, seamless.length - 1)];
    const b = seamless[Math.min(idx + 1, seamless.length - 1)];
    result.push(
      a[0] + (b[0] - a[0]) * frac,
      a[1] + (b[1] - a[1]) * frac,
      a[2] + (b[2] - a[2]) * frac,
      1
    );
  }
  return result;
}

function glowSizeToVec4(s: number | number[]): number[] {
  if (typeof s === "number") return [s, s, s, s];
  if (s.length === 1) return [s[0], s[0], s[0], s[0]];
  if (s.length === 2) return [s[0], s[1], s[0], s[1]];
  if (s.length === 3) return [s[0], s[1], s[2], s[1]];
  return [s[0], s[1], s[2], s[3]];
}

const PRESETS: Record<string, PresetData> = {
  defaultRainbow: {
    name: "Default Rainbow",
    cornerRadius: 30, outlineWidth: 4,
    borderColors: ["rgba(238,255,0,1)", "rgba(79,255,0,1)", "rgba(46,90,255,1)", "rgba(254,0,255,1)", "rgba(231,23,23,1)"].map(parseRgba),
    backgroundColor: parseRgba("rgba(10,10,10,1)"),
    animationSpeed: 1.2, borderSpeedMultiplier: 1,
    glowLayers: [
      { colors: ["rgba(205,201,35,1)", "rgba(0,255,79,1)", "rgba(0,119,255,1)", "rgba(239,0,255,1)", "rgba(222,28,28,1)"].map(parseRgba), glowSize: 34, opacity: 0.2, speedMultiplier: 1, coverage: 1, placement: 0, relativeOffset: 0 },
      { colors: ["rgba(185,182,32,1)", "rgba(0,255,79,1)", "rgba(0,119,255,1)", "rgba(239,0,255,1)", "rgba(222,28,28,1)"].map(parseRgba), glowSize: 6, opacity: 0.5, speedMultiplier: 1, coverage: 1, placement: 0, relativeOffset: 0 },
      { colors: ["#FFFFFF"].map(parseRgba), glowSize: [2, 8, 8, 2], opacity: 0.2, speedMultiplier: 2, coverage: 0.5, placement: 0, relativeOffset: 0 },
    ],
  },
  oceanSunset: {
    name: "Ocean Sunset",
    cornerRadius: 70, outlineWidth: 4,
    borderColors: ["rgba(255,124,171,1)", "rgba(63,100,199,1)", "rgba(240,115,46,1)"].map(parseRgba),
    backgroundColor: parseRgba("rgba(21,21,21,1)"),
    animationSpeed: 2, borderSpeedMultiplier: 1,
    glowLayers: [
      { colors: ["#f82fc6", "#5a4ff9", "#ff923e"].map(parseRgba), glowSize: 15, opacity: 0.1, speedMultiplier: 1, coverage: 1, placement: 0, relativeOffset: 0 },
      { colors: ["rgba(255,89,213,1)", "rgba(63,89,255,1)", "rgba(255,164,0,1)"].map(parseRgba), glowSize: 5, opacity: 0.5, speedMultiplier: 1, coverage: 1, placement: 0, relativeOffset: 0 },
    ],
  },
};

export default function RNAnimatedGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animRef = useRef<number>(0);
  const [active, setActive] = useState<string>("defaultRainbow");
  const borderProgressRef = useRef(0);
  const layerProgressRef = useRef([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const lastTimeRef = useRef(0);

  const initGL = useCallback((canvas: HTMLCanvasElement) => {
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;
    glRef.current = gl;

    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, VERT_SHADER);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, FRAG_SHADER);
    gl.compileShader(fs);

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    programRef.current = prog;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = parent.clientWidth * dpr;
    canvas.height = parent.clientHeight * dpr;
    canvas.style.width = parent.clientWidth + "px";
    canvas.style.height = parent.clientHeight + "px";
    initGL(canvas);

    return () => { cancelAnimationFrame(animRef.current); };
  }, [initGL]);

  useEffect(() => {
    const gl = glRef.current;
    const prog = programRef.current;
    if (!gl || !prog) return;

    borderProgressRef.current = 0;
    layerProgressRef.current = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    lastTimeRef.current = 0;

    function render(time: number) {
      const dt = lastTimeRef.current ? (time - lastTimeRef.current) / 1000 : 0.016;
      lastTimeRef.current = time;

      const preset = PRESETS[active];
      if (!gl || !prog || !preset) return;

      gl.useProgram(prog);
      const W = gl.canvas.width;
      const H = gl.canvas.height;
      gl.viewport(0, 0, W, H);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const margin = 100;
      const rectW = W - margin * 2;
      const rectH = H - margin * 2;
      const speedFactor = 0.166;

      borderProgressRef.current = (borderProgressRef.current + dt * speedFactor * preset.animationSpeed * preset.borderSpeedMultiplier) % 1;
      for (let i = 0; i < 10; i++) {
        const layer = preset.glowLayers[i];
        const sm = layer ? layer.speedMultiplier : 0;
        layerProgressRef.current[i] = (layerProgressRef.current[i] + dt * speedFactor * preset.animationSpeed * sm) % 1;
      }

      const u = (name: string) => gl.getUniformLocation(prog, name);

      gl.uniform2f(u("u_resolution"), W, H);
      gl.uniform2f(u("u_rectSize"), rectW, rectH);
      gl.uniform1f(u("u_cornerRadius"), Math.min(preset.cornerRadius, rectW / 2, rectH / 2));
      gl.uniform4fv(u("u_backgroundColor"), preset.backgroundColor);
      gl.uniform1f(u("u_borderWidth"), preset.outlineWidth);
      gl.uniform1f(u("u_borderProgress"), borderProgressRef.current);
      gl.uniform1i(u("u_layerCount"), preset.glowLayers.length);
      gl.uniform1f(u("u_masterOpacity"), 1.0);
      gl.uniform1f(u("u_isBorderAnimated"), preset.borderColors.length > 1 ? 1 : 0);

      const cov: number[] = [], opa: number[] = [], off: number[] = [], plc: number[] = [];
      const sizes: number[] = [];
      for (let i = 0; i < 10; i++) {
        const layer = preset.glowLayers[i];
        if (layer) {
          cov.push(layer.coverage); opa.push(layer.opacity);
          off.push(layer.relativeOffset); plc.push(layer.placement);
          sizes.push(...glowSizeToVec4(layer.glowSize));
        } else {
          cov.push(0); opa.push(0); off.push(0); plc.push(0);
          sizes.push(0, 0, 0, 0);
        }
      }
      gl.uniform1fv(u("u_coverage"), cov);
      gl.uniform1fv(u("u_opacity"), opa);
      gl.uniform1fv(u("u_relativeOffset"), off);
      gl.uniform1fv(u("u_placements"), plc);
      gl.uniform1fv(u("u_layerProgress"), layerProgressRef.current);

      // Pack glowSizes as vec4 array
      for (let i = 0; i < 10; i++) {
        gl.uniform4f(u(`u_glowSizes[${i}]`), sizes[i*4], sizes[i*4+1], sizes[i*4+2], sizes[i*4+3]);
      }

      // Border colors
      const bc = processColors(preset.borderColors);
      for (let i = 0; i < 8; i++) gl.uniform4f(u(`u_colors_0[${i}]`), bc[i*4], bc[i*4+1], bc[i*4+2], bc[i*4+3]);

      // Layer colors
      const colorUniforms = ["u_colors_1", "u_colors_2", "u_colors_3"];
      for (let li = 0; li < 3; li++) {
        const layer = preset.glowLayers[li];
        const colors = layer ? processColors(layer.colors) : new Array(32).fill(0);
        for (let i = 0; i < 8; i++) gl.uniform4f(u(`${colorUniforms[li]}[${i}]`), colors[i*4], colors[i*4+1], colors[i*4+2], colors[i*4+3]);
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animRef.current = requestAnimationFrame(render);
    }

    animRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animRef.current);
  }, [active]);

  return (
    <div className="relative flex flex-col items-center justify-center gap-3 w-full h-full bg-[#050505]">
      <div className="relative w-full flex-1 min-h-0">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-sm font-medium text-white/70">
            {PRESETS[active].name}
          </span>
        </div>
      </div>
      <div className="flex gap-2 z-10 pb-3">
        {Object.entries(PRESETS).map(([key, p]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
              active === key
                ? "bg-white/15 text-white border border-white/20"
                : "bg-white/5 text-white/40 border border-white/5 hover:text-white/60"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}
