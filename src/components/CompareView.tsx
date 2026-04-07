"use client";

import { useMemo } from "react";
import type { EffectDefinition } from "@/effects/types";
import EffectCard from "./EffectCard";

/** Tags that represent meaningful effect types for grouping */
const GROUP_TAGS = [
  "parallax",
  "particle",
  "typewriter",
  "spinner",
  "glow",
  "spring",
  "scroll",
  "gesture",
  "3d",
  "text",
  "counter",
  "confetti",
  "gradient",
  "cursor",
  "skeleton",
  "carousel",
  "lottie",
  "svg",
  "transition",
  "hover",
  "morph",
] as const;

interface EffectGroup {
  tag: string;
  effects: EffectDefinition[];
}

function groupEffects(effects: EffectDefinition[]): EffectGroup[] {
  const groups: EffectGroup[] = [];
  const seen = new Set<string>();

  for (const tag of GROUP_TAGS) {
    const matching = effects.filter((e) => e.tags.includes(tag));
    // Only show groups with 2+ effects (comparison needs at least 2)
    if (matching.length < 2) continue;

    // Deduplicate — don't show the same effect in multiple groups
    const unique = matching.filter((e) => !seen.has(e.slug));
    if (unique.length < 2) continue;

    groups.push({ tag, effects: matching });
    matching.forEach((e) => seen.add(e.slug));
  }

  // Collect ungrouped effects
  const ungrouped = effects.filter((e) => !seen.has(e.slug));
  if (ungrouped.length > 0) {
    groups.push({ tag: "other", effects: ungrouped });
  }

  return groups;
}

const tagMeta: Record<string, { label: string; desc: string }> = {
  parallax: {
    label: "Parallax",
    desc: "레이어마다 다른 속도로 움직여서 깊이감을 만드는 효과. 스크롤, 마우스, 스와이프 등 다양한 방식이 있어요.",
  },
  particle: {
    label: "Particles",
    desc: "작은 입자들이 화면에서 떠다니거나 흩어지는 효과. 배경 장식이나 인터랙션 피드백에 사용해요.",
  },
  typewriter: {
    label: "Typewriter & Text Reveal",
    desc: "글자가 한 자씩 타이핑되거나 서서히 드러나는 효과. 히어로 섹션이나 챗봇 UI에 자주 쓰여요.",
  },
  spinner: {
    label: "Spinners & Loaders",
    desc: "로딩 중임을 보여주는 회전/맥동 애니메이션. 데이터를 불러오는 동안 사용자에게 피드백을 줘요.",
  },
  glow: {
    label: "Glow & Beam",
    desc: "빛이 번지거나 빔이 지나가는 효과. 버튼, 카드, 테두리 등에 시선을 끄는 하이라이트로 사용해요.",
  },
  spring: {
    label: "Spring Physics",
    desc: "용수철처럼 튕기는 자연스러운 물리 기반 애니메이션. 딱딱한 CSS 전환 대신 생동감 있는 움직임을 줘요.",
  },
  scroll: {
    label: "Scroll Effects",
    desc: "스크롤할 때 요소가 나타나거나 움직이는 효과. 랜딩페이지에서 스토리텔링하듯 콘텐츠를 보여줘요.",
  },
  gesture: {
    label: "Gesture & Drag",
    desc: "드래그, 스와이프, 탭 같은 제스처에 반응하는 인터랙션. 모바일 앱 같은 터치 경험을 만들어요.",
  },
  "3d": {
    label: "3D Effects",
    desc: "원근감이나 회전으로 입체적인 느낌을 주는 효과. 카드 뒤집기, 기울이기, 3D 씬 등에 사용해요.",
  },
  text: {
    label: "Text Animation",
    desc: "글자가 움직이거나 변형되는 효과. 페이드인, 글리치, 스크램블, 카운트업 등 다양한 연출이 가능해요.",
  },
  counter: {
    label: "Counters & Numbers",
    desc: "숫자가 굴러가듯 올라가거나 내려가는 효과. 통계, 대시보드, 가격 표시 등에 사용해요.",
  },
  confetti: {
    label: "Confetti & Rewards",
    desc: "축하 시 색종이가 터지거나 이모지가 날아가는 효과. 결제 완료, 목표 달성 같은 순간에 써요.",
  },
  gradient: {
    label: "Gradients",
    desc: "색상이 자연스럽게 흐르거나 움직이는 그라디언트 효과. 배경이나 메시 형태로 분위기를 만들어요.",
  },
  cursor: {
    label: "Cursor Effects",
    desc: "마우스 커서 모양이 바뀌거나 커서를 따라 효과가 생기는 인터랙션. 사이트에 개성을 더해요.",
  },
  skeleton: {
    label: "Skeletons & Loaders",
    desc: "콘텐츠가 로딩될 자리를 미리 보여주는 뼈대 UI. 빈 화면 대신 어떤 내용이 올지 힌트를 줘요.",
  },
  carousel: {
    label: "Carousel",
    desc: "여러 콘텐츠를 좌우로 넘기며 보는 슬라이더. 이미지 갤러리, 카드 목록 등에 사용해요.",
  },
  lottie: {
    label: "Lottie",
    desc: "After Effects에서 만든 애니메이션을 웹에서 재생하는 포맷. 복잡한 모션도 가볍게 구현돼요.",
  },
  svg: {
    label: "SVG Animation",
    desc: "SVG 도형의 선이 그려지거나 변형되는 효과. 로고 애니메이션이나 인포그래픽에 자주 써요.",
  },
  transition: {
    label: "Transitions",
    desc: "요소가 나타나고 사라질 때의 전환 효과. 페이지 이동, 모달, 리스트 변경 시 자연스러운 흐름을 만들어요.",
  },
  hover: {
    label: "Hover Effects",
    desc: "마우스를 올렸을 때 반응하는 효과. 버튼, 카드, 이미지 등에 인터랙티브한 피드백을 줘요.",
  },
  morph: {
    label: "Morph & Shape",
    desc: "도형이 다른 형태로 자연스럽게 변하는 효과. 아이콘 전환이나 데이터 시각화에 사용해요.",
  },
  other: {
    label: "Other Effects",
    desc: "위 카테고리에 속하지 않는 다양한 시각 효과들.",
  },
};

export default function CompareView({
  effects,
}: {
  effects: EffectDefinition[];
}) {
  const groups = useMemo(() => groupEffects(effects), [effects]);

  return (
    <div className="flex flex-col gap-10">
      {groups.map((group) => (
        <section key={group.tag}>
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <h3 className="text-[15px] font-semibold text-fg">
                {tagMeta[group.tag]?.label || group.tag}
              </h3>
              <span className="text-[12px] text-muted/40 font-mono">
                {group.effects.length} libraries
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            {tagMeta[group.tag]?.desc && (
              <p className="text-[13px] text-muted/60 mt-1.5 max-w-2xl">
                {tagMeta[group.tag].desc}
              </p>
            )}
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
            {group.effects.map((effect) => (
              <div
                key={effect.slug}
                className="min-w-[320px] max-w-[360px] flex-shrink-0 snap-start"
              >
                <EffectCard effect={effect} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
