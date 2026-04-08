# Motion / Animation / Interaction Design Terminology

A comprehensive glossary of terms designers and developers use when describing motion effects, animations, and visual interactions in UI/UX and web design.

---

## 1. Easing & Timing

| Term | Description | Korean |
|------|-------------|--------|
| **Ease-in** | Animation starts slow and accelerates toward the end | 이즈인 |
| **Ease-out** | Animation starts fast and decelerates toward the end | 이즈아웃 |
| **Ease-in-out** | Animation starts slow, speeds up in the middle, and slows again at the end | 이즈인아웃 |
| **Linear** | Constant speed throughout the animation with no acceleration or deceleration | 리니어 / 선형 |
| **Spring** | Physics-based easing that overshoots the target and oscillates before settling | 스프링 |
| **Bounce** | Easing that simulates a bouncing ball at the end of an animation | 바운스 |
| **Elastic** | Easing that overshoots and oscillates like a stretched rubber band snapping back | 엘라스틱 / 탄성 |
| **Overshoot** | Animation goes past the target value before settling back | 오버슈트 |
| **Undershoot** | Animation falls short of the target before reaching it | 언더슈트 |
| **Damping** | Force that opposes motion, causing oscillation to gradually decrease and stop | 댐핑 / 감쇠 |
| **Stiffness** | How rigid a spring is; higher values produce snappier, faster motion | 강성 / 스티프니스 |
| **Mass** | Simulated weight of an animated object; heavier objects move more lethargically | 질량 |
| **Tension** | The force pulling a spring toward its resting position (synonym for stiffness) | 텐션 / 장력 |
| **Friction** | Resistance that slows down motion over time | 마찰 |
| **Velocity** | Speed and direction of an animated element at a given moment | 속도 |
| **Acceleration** | Rate of change of velocity over time | 가속도 |
| **Deceleration** | Rate at which velocity decreases over time | 감속 |
| **Duration** | Total time an animation takes from start to finish | 지속 시간 |
| **Delay** | Wait time before an animation begins after being triggered | 딜레이 / 지연 |
| **Stagger** | Sequential delay applied to a group of elements so they animate one after another | 스태거 / 순차 지연 |
| **Cubic-bezier** | Custom easing curve defined by four control points (P1x, P1y, P2x, P2y) | 큐빅 베지어 |
| **Steps** | Easing that divides animation into discrete, equal-length intervals (no smooth interpolation) | 스텝 / 단계 |
| **linear()** | CSS function that defines piecewise linear easing to approximate complex curves like bounce/spring | linear() 함수 |
| **Iteration count** | Number of times an animation repeats (can be infinite) | 반복 횟수 |
| **Fill mode** | Determines how an element looks before/after animation (forwards, backwards, both, none) | 필 모드 |
| **Animation direction** | Whether animation plays forwards, backwards, or alternates | 재생 방향 |
| **Playback rate** | Speed multiplier for an animation (1 = normal, 0.5 = half speed, 2 = double) | 재생 속도 |
| **Damping ratio** | Ratio that determines whether a spring is underdamped (bouncy), critically damped, or overdamped | 감쇠비 |

---

## 2. Transition Types

| Term | Description | Korean |
|------|-------------|--------|
| **Fade** | Transition from transparent to opaque or vice versa via opacity | 페이드 |
| **Slide** | Element moves in or out from a direction (left, right, up, down) | 슬라이드 |
| **Scale** | Element grows or shrinks from/to a size | 스케일 / 크기 변환 |
| **Rotate** | Element spins around an axis | 회전 |
| **Flip** | Element rotates 180 degrees around X or Y axis, often revealing a back face | 플립 |
| **Morph** | Smooth transformation of one shape/element into another | 모핑 / 변형 |
| **Dissolve** | Gradual pixel-level blending from one state to another | 디졸브 |
| **Wipe** | New content is revealed by a moving edge or boundary sweeping across the screen | 와이프 |
| **Reveal** | Hidden content becomes visible, often via clip-path or mask | 리빌 / 노출 |
| **Collapse** | Element shrinks vertically or horizontally to zero height/width | 접기 / 축소 |
| **Expand** | Element grows from zero to full height/width | 펼치기 / 확장 |
| **Crossfade** | Simultaneous fade-out of one element and fade-in of another | 크로스페이드 |
| **Zoom** | Camera-like effect moving closer to or further from content | 줌 |
| **Blur transition** | Element transitions via a blur/unblur effect | 블러 전환 |
| **Clip-path transition** | Content revealed or hidden by animating a CSS clip-path shape | 클립패스 전환 |
| **Mask transition** | Content revealed or hidden by animating a CSS/SVG mask | 마스크 전환 |
| **Ken Burns** | Slow zoom and pan effect, commonly used on static images | 켄 번즈 |
| **Split** | Content divides into sections that move apart | 분할 |
| **Iris** | Circular reveal expanding from or contracting to a point | 아이리스 |
| **Push** | New content pushes old content out of view | 밀어내기 |
| **Cover** | New content slides over old content which stays in place | 커버 |
| **Uncover** | Old content slides away to reveal new content underneath | 언커버 |

---

## 3. Scroll-based Effects

| Term | Description | Korean |
|------|-------------|--------|
| **Parallax** | Background and foreground elements move at different speeds during scroll, creating depth illusion | 패럴랙스 / 시차 효과 |
| **Scroll-linked** | Animation progress is bound directly to scroll position (e.g., 50% scrolled = 50% animated) | 스크롤 연동 |
| **Scroll-triggered** | Animation fires when element enters or leaves the viewport during scroll | 스크롤 트리거 |
| **Scroll-snap** | Scroll position automatically snaps to predefined points | 스크롤 스냅 |
| **Sticky / Pin** | Element stays fixed in the viewport while surrounding content scrolls past | 스티키 / 고정 |
| **Scrub** | Animation playhead is tied to the scrollbar position; user controls speed and direction | 스크럽 |
| **Progress-based** | Animation driven by scroll progress percentage (0% to 100%) | 진행률 기반 |
| **Scroll velocity** | Speed at which the user is scrolling, used to modulate animation intensity | 스크롤 속도 |
| **Scrollytelling** | Narrative storytelling driven by scroll position, combining text/media with scroll-linked animations | 스크롤리텔링 |
| **Scroll-driven animation** | Native CSS API (scroll-timeline, view-timeline) for animations linked to scroll | 스크롤 기반 애니메이션 |
| **Scroll timeline** | CSS timeline that maps scroll position to animation progress | 스크롤 타임라인 |
| **View timeline** | CSS timeline based on an element's visibility within its scroll container | 뷰 타임라인 |
| **Horizontal scroll** | Content scrolls horizontally (often while user scrolls vertically) | 수평 스크롤 |
| **Infinite scroll** | Content loads continuously as user scrolls down | 무한 스크롤 |
| **Raster parallax** | Elements move horizontally as user scrolls vertically, creating cinematic side-scrolling | 래스터 패럴랙스 |
| **Depth parallax** | Multiple layers at different z-depths creating 3D scroll effect | 깊이 패럴랭스 |
| **Scroll reveal** | Elements animate into view as they enter the viewport on scroll | 스크롤 리빌 |
| **Smooth scroll** | Scroll movement is eased rather than jumping instantly to a target | 부드러운 스크롤 |
| **Snap point** | A predefined position the scroll will snap to when released | 스냅 포인트 |
| **Pin spacer** | Invisible placeholder that maintains document flow while an element is pinned | 핀 스페이서 |

---

## 4. Micro-interactions

| Term | Description | Korean |
|------|-------------|--------|
| **Hover effect** | Visual change triggered when cursor enters an element | 호버 효과 |
| **Press / Tap feedback** | Visual response when an element is clicked or tapped (scale down, color change) | 탭 피드백 / 클릭 피드백 |
| **Ripple** | Circular wave expanding from the point of click/tap (Material Design signature) | 리플 |
| **Pulse** | Rhythmic scale or opacity change that draws attention, like a heartbeat | 펄스 |
| **Shake** | Rapid horizontal oscillation indicating error or rejection | 흔들기 |
| **Jiggle** | Playful multi-axis shake, often indicating an item is editable/deletable (iOS icon rearrange) | 지글 |
| **Wobble** | Gentle rocking or rotational oscillation | 워블 |
| **Bounce** | Element springs up and down when arriving at or interacting with a position | 바운스 |
| **Swing** | Pendulum-like oscillation around a pivot point | 스윙 |
| **Toggle** | Animated switch between two states (on/off, open/closed) | 토글 |
| **Breathing** | Slow pulse effect with opacity or scale cycling gently (used for loading or idle states) | 호흡 효과 |
| **Heartbeat** | Double-pulse animation mimicking a heartbeat rhythm | 하트비트 |
| **Magnetic snap** | Element smoothly attracts/snaps to the cursor or a nearby point | 자석 스냅 |
| **Tooltip appear** | Animated tooltip entrance on hover with fade, scale, or slide | 툴팁 애니메이션 |
| **Active state** | Visual feedback when a button or control is being pressed | 활성 상태 |
| **Focus state** | Visual indicator (often a ring or glow) when an element receives keyboard focus | 포커스 상태 |
| **Switch animation** | Animated toggle with a sliding knob between on and off positions | 스위치 애니메이션 |
| **Checkbox animation** | Checkmark drawing or bouncing into place when checked | 체크박스 애니메이션 |
| **Drag handle** | Visual affordance indicating an element can be dragged, often with subtle animation | 드래그 핸들 |
| **Long press** | Interaction triggered by sustained press, often with a radial progress indicator | 롱프레스 |

---

## 5. Page / View Transitions

| Term | Description | Korean |
|------|-------------|--------|
| **Shared element transition** | Same element animates seamlessly between two views/pages (size, position morph) | 공유 요소 전환 |
| **Hero transition** | A prominent element (image, card) morphs from one page/view to the next | 히어로 전환 |
| **Container transform** | Material Design pattern where a container morphs into a new view (card to detail page) | 컨테이너 트랜스폼 |
| **Shared axis** | Material Design pattern using x/y/z axis movement for navigational transitions | 공유 축 전환 |
| **Fade through** | Sequential fade-out then fade-in with a subtle scale, for unrelated UI transitions | 페이드 스루 |
| **Page morph** | Entire page structure morphs into the next page layout | 페이지 모핑 |
| **Route animation** | Animation triggered by URL/route changes in a single-page application | 라우트 애니메이션 |
| **View Transition API** | Native browser API (view-transition-name) for animating between DOM states or pages | 뷰 트랜지션 API |
| **view-transition-name** | CSS property that identifies elements for cross-state morphing in the View Transition API | 뷰 트랜지션 네임 |
| **Cross-document transition** | View transition that works across separate page loads (MPA) | 문서 간 전환 |
| **Same-document transition** | View transition within a single page (SPA) | 문서 내 전환 |
| **Spatial continuity** | Motion that preserves the user's sense of where they are within the app's hierarchy | 공간적 연속성 |
| **Navigation transition** | Animation between screens/routes that conveys directional relationship | 네비게이션 전환 |
| **Modal transition** | Animation for opening/closing overlays (scale up, slide up, fade) | 모달 전환 |
| **Drawer transition** | Side panel sliding in from edge of screen | 드로어 전환 |
| **Sheet transition** | Bottom sheet rising from the bottom of the screen | 시트 전환 |
| **Expand-to-detail** | Thumbnail or card expanding into a full detail view | 확장 상세 전환 |

---

## 6. Loading & Skeleton

| Term | Description | Korean |
|------|-------------|--------|
| **Shimmer** | Animated gradient sweeping horizontally across a skeleton placeholder (like DoorDash) | 쉬머 |
| **Skeleton screen** | Placeholder layout mimicking content shapes before real data loads | 스켈레톤 스크린 |
| **Pulse loader** | Placeholder with gently cycling opacity to indicate loading | 펄스 로더 |
| **Spinner** | Rotating circular indicator showing ongoing process | 스피너 |
| **Progress bar** | Horizontal bar filling left-to-right to indicate completion percentage | 프로그레스 바 / 진행 바 |
| **Indeterminate progress** | Progress indicator that moves continuously without a known endpoint | 비확정 프로그레스 |
| **Determinate progress** | Progress indicator that fills based on a known completion percentage | 확정 프로그레스 |
| **Skeleton loader** | Generic term for any skeleton-based loading placeholder | 스켈레톤 로더 |
| **Wave loader** | Shimmer variant where a gradient wave moves across the skeleton | 웨이브 로더 |
| **Dot loader** | Three dots bouncing or pulsing sequentially | 점 로더 |
| **Bar loader** | Multiple bars scaling up/down sequentially (equalizer style) | 바 로더 |
| **Circular progress** | Ring or arc that fills to indicate progress | 원형 프로그레스 |
| **Loading percentage** | Numeric counter showing loading progress (0% to 100%) | 로딩 퍼센트 |
| **Splash screen** | Animated branded screen shown during app startup | 스플래시 스크린 |
| **Content placeholder** | Generic placeholder for content that hasn't loaded yet | 콘텐츠 플레이스홀더 |
| **Lazy loading** | Content loads as needed (on scroll or on demand) with a loading indicator | 레이지 로딩 / 지연 로딩 |
| **Optimistic UI** | UI updates instantly before server confirmation, rolling back if needed | 낙관적 UI |

---

## 7. Text Animations

| Term | Description | Korean |
|------|-------------|--------|
| **Typewriter** | Text appears character by character as if being typed | 타이프라이터 |
| **Text reveal** | Text appears gradually via clip-path, mask, or opacity | 텍스트 리빌 |
| **Character-by-character** | Each character animates independently with individual delay | 글자별 애니메이션 |
| **Word-by-word** | Each word animates independently with sequential delay | 단어별 애니메이션 |
| **Line-by-line** | Each line of text animates sequentially | 줄별 애니메이션 |
| **Scramble / Decode** | Letters randomize before settling on the final text (hacker/techy feel) | 스크램블 / 디코드 |
| **Glitch text** | Digital distortion effect with color channel separation and clip-path slicing | 글리치 텍스트 |
| **Gradient text** | Animated gradient color sweeping through text characters | 그라데이션 텍스트 |
| **Split text** | Text broken into individual characters/words/lines for per-element animation | 스플릿 텍스트 |
| **Text morph** | One word/phrase smoothly transforms into another | 텍스트 모핑 |
| **Counting / Odometer** | Numbers roll or count up/down to a target value | 카운팅 / 오도미터 |
| **Rolling digits** | Individual digit columns scroll vertically like a mechanical counter | 롤링 숫자 |
| **Flip clock** | Digits flip like a mechanical split-flap display | 플립 시계 |
| **Marquee / Ticker** | Text scrolls continuously in one direction (horizontal or vertical) | 마키 / 티커 |
| **Text shimmer** | Glossy highlight sweeps across text surface | 텍스트 쉬머 |
| **Wavy text** | Characters oscillate vertically in a wave pattern | 웨이브 텍스트 |
| **Bouncing text** | Characters bounce individually with stagger | 바운싱 텍스트 |
| **Blur-in text** | Text transitions from blurred to sharp | 블러인 텍스트 |
| **Fade-up text** | Text fades in while sliding upward | 페이드업 텍스트 |
| **Highlight / Underline draw** | Animated highlight or underline draws across text | 하이라이트 드로우 |
| **Text cursor blink** | Blinking cursor caret at the end of typewriter text | 커서 깜박임 |
| **Kinetic typography** | Text that moves, scales, and transforms expressively to convey emotion | 키네틱 타이포그래피 |

---

## 8. Particle & Generative

| Term | Description | Korean |
|------|-------------|--------|
| **Particles** | Many small elements moving independently, often responding to forces or interactions | 파티클 |
| **Confetti** | Colorful paper-like particles bursting and falling (celebration feedback) | 컨페티 / 색종이 |
| **Fireworks** | Explosive burst of particles radiating from a point with trails | 불꽃놀이 |
| **Snow** | Gentle falling particles simulating snowflakes | 눈 효과 |
| **Rain** | Vertical particle streaks simulating rainfall | 비 효과 |
| **Bubbles** | Floating circular particles rising upward | 거품 효과 |
| **Smoke** | Soft, diffuse particles drifting and fading | 연기 효과 |
| **Fire** | Particles simulating flames with color gradients (red/orange/yellow) | 불 효과 |
| **Dust** | Fine particles floating gently in space | 먼지 효과 |
| **Sparkle / Glitter** | Brief flashes of light at random positions | 반짝임 효과 |
| **Perlin noise** | Algorithm for generating smooth, natural-looking randomness | 펄린 노이즈 |
| **Simplex noise** | Improved version of Perlin noise (faster, fewer artifacts) | 심플렉스 노이즈 |
| **Flow field** | Vector field (often from Perlin noise) that guides particle movement | 플로우 필드 |
| **Boids / Flocking** | Particles that simulate schooling/flocking behavior with separation, alignment, cohesion | 보이드 / 군집 |
| **Emitter** | Source point from which particles are spawned | 에미터 / 방출원 |
| **Particle lifetime** | Duration a single particle exists before being removed | 파티클 수명 |
| **Attraction / Repulsion** | Force fields that pull or push particles toward/away from a point | 인력 / 척력 |
| **Trail** | Fading path left behind a moving particle | 궤적 / 트레일 |
| **Constellation** | Particles connected by lines when within proximity of each other | 별자리 효과 |
| **Galaxy / Vortex** | Particles swirling around a central point | 은하 / 소용돌이 |
| **Generative art** | Artwork created by algorithms with controlled randomness | 제너러티브 아트 |

---

## 9. 3D & Perspective

| Term | Description | Korean |
|------|-------------|--------|
| **Tilt** | Element rotates slightly on X/Y axes in response to cursor or device orientation | 틸트 |
| **Perspective** | CSS property defining the depth of 3D space (lower values = more dramatic effect) | 퍼스펙티브 / 원근 |
| **Depth** | Perceived distance along the z-axis | 깊이 |
| **Z-axis** | The axis pointing toward/away from the viewer in 3D space | Z축 |
| **Camera** | Simulated viewpoint in a 3D scene | 카메라 |
| **Orbit** | Camera or element rotating around a central point in 3D | 오빗 / 궤도 |
| **rotate3d** | CSS function rotating an element around an arbitrary 3D axis | rotate3d |
| **rotateX / rotateY / rotateZ** | Rotation around a specific axis | X축/Y축/Z축 회전 |
| **translateZ** | Movement along the z-axis (toward or away from viewer) | Z축 이동 |
| **preserve-3d** | CSS value that lets child elements maintain their own 3D positioning | preserve-3d |
| **Card flip** | 3D rotation revealing a back face (180 degree Y-axis rotation) | 카드 플립 |
| **Parallax depth** | Multiple 3D layers at different z-depths creating scroll-driven depth | 패럴랙스 깊이 |
| **Backface visibility** | Whether the reverse side of a 3D-rotated element is visible | 뒷면 가시성 |
| **Vanishing point** | Point where parallel lines converge in perspective | 소실점 |
| **Isometric** | 3D projection where all axes are equally foreshortened (no vanishing point) | 등각 투영 |
| **3D carousel** | Items arranged in a circular 3D formation that rotates | 3D 캐러셀 |
| **Cube rotation** | Six-faced cube rotating to show different content on each face | 큐브 회전 |
| **Scene** | Container for 3D elements with shared perspective | 씬 / 장면 |
| **Dolly** | Camera moving forward/backward along the z-axis (zoom by movement, not focal length) | 달리 |
| **Pan** | Camera moving horizontally or vertically while orientation stays fixed | 팬 |
| **Field of view (FOV)** | Angular extent of the observable 3D scene | 시야각 |

---

## 10. Glow & Light Effects

| Term | Description | Korean |
|------|-------------|--------|
| **Glow** | Soft light emanating from an element, typically via box-shadow or filter | 글로우 / 발광 |
| **Bloom** | Blurred bright areas bleeding into surrounding space (post-processing effect) | 블룸 |
| **Beam** | Directional line of light sweeping across a surface | 빔 / 광선 |
| **Spotlight** | Circular light area following cursor or highlighting an element | 스포트라이트 |
| **Aurora** | Flowing, colorful gradient mimicking the northern lights | 오로라 |
| **Neon** | Vibrant glow with color bleeding, mimicking neon tube signage | 네온 |
| **Light leak** | Warm, overexposed light bleeding into the frame (vintage film effect) | 라이트 릭 |
| **Lens flare** | Bright spots and streaks caused by simulated light hitting a camera lens | 렌즈 플레어 |
| **Gradient animation** | Continuously shifting gradient colors or positions | 그라데이션 애니메이션 |
| **Conic gradient** | Gradient sweeping around a center point (useful for rotating glow effects) | 코닉 그라데이션 |
| **Radial glow** | Light radiating outward from a center point | 방사형 글로우 |
| **Shadow layering** | Multiple stacked box-shadows creating realistic light falloff depth | 그림자 레이어링 |
| **Drop shadow** | Filter-based shadow that respects alpha channel of images/SVGs | 드롭 섀도우 |
| **Text glow** | text-shadow with bright, diffuse color creating neon text | 텍스트 글로우 |
| **Border glow** | Animated glowing border (often via pseudo-elements or box-shadow) | 테두리 글로우 |
| **Halo** | Ring of light around an element | 할로 / 후광 |
| **Pulse glow** | Glow that rhythmically brightens and dims | 펄스 글로우 |
| **Light sweep** | Highlight moving across a surface like a reflection on glass | 라이트 스윕 |
| **Ambient light** | Soft, directionless illumination affecting the overall scene mood | 앰비언트 라이트 |
| **God rays** | Volumetric light beams radiating from a bright source through gaps | 갓 레이 |
| **Chromatic aberration** | Color fringing effect where red/green/blue channels are slightly offset | 색수차 |

---

## 11. Layout Animation

| Term | Description | Korean |
|------|-------------|--------|
| **FLIP** | First-Last-Invert-Play technique for performant layout animations (coined by Paul Lewis) | FLIP |
| **Layout shift** | Animated change in an element's size or position within the document flow | 레이아웃 이동 |
| **Reorder** | Elements smoothly rearranging to new positions (e.g., list sorting) | 재정렬 |
| **Shuffle** | Elements randomly rearranging positions with animation | 셔플 |
| **Masonry animation** | Items in a masonry grid animating to fill gaps as items are added/removed | 메이슨리 애니메이션 |
| **Grid animation** | Items in a CSS grid animating when columns/rows change | 그리드 애니메이션 |
| **Auto-animate** | Tool feature (Figma, Keynote) that automatically interpolates between two states | 오토 애니메이트 |
| **Smart animate** | Figma's automatic animation between matching layers across frames | 스마트 애니메이트 |
| **Accordion** | Collapsible section that expands/collapses with animated height change | 아코디언 |
| **List animation** | Items in a list animating as they are added, removed, or reordered | 리스트 애니메이션 |
| **Tab transition** | Animated switch between tab content panels | 탭 전환 |
| **Resize animation** | Element smoothly transitioning to a new size | 리사이즈 애니메이션 |
| **Gap animation** | Animating the gap between grid or flex items | 갭 애니메이션 |
| **Column transition** | Content reflowing as column count changes | 컬럼 전환 |
| **Presence animation** | Animation for elements entering or leaving the DOM (mount/unmount) | 존재 애니메이션 |
| **AnimatePresence** | Framer Motion component for animating elements as they mount/unmount | AnimatePresence |
| **Layout group** | Set of elements that animate together when any one changes | 레이아웃 그룹 |
| **Flow animation** | Elements smoothly flowing to new positions when layout changes | 플로우 애니메이션 |

---

## 12. Gesture-driven

| Term | Description | Korean |
|------|-------------|--------|
| **Drag** | Moving an element by pressing and holding while moving the pointer | 드래그 |
| **Swipe** | Quick directional finger movement (faster than drag) | 스와이프 |
| **Pinch** | Two-finger gesture to zoom in or out | 핀치 |
| **Fling** | Very fast swipe that preserves velocity for momentum-based animation | 플링 |
| **Inertia** | Continued motion after release based on gesture velocity (deceleration animation) | 관성 |
| **Momentum** | Kinetic energy carried by an element after being released from a gesture | 모멘텀 / 운동량 |
| **Snap-back** | Element springing back to its original position after being released | 스냅백 |
| **Rubber band** | Resistance effect where element moves slower than the finger (overpull) | 러버밴드 / 탄성 저항 |
| **Pull-to-refresh** | Downward pull gesture at the top of a list triggering content refresh | 당겨서 새로고침 |
| **Elastic overscroll** | Bouncy effect when scrolling past the edge of content | 탄성 오버스크롤 |
| **Drag constraints** | Boundaries limiting how far an element can be dragged | 드래그 제한 |
| **Drag snap** | Element snaps to predefined positions when released | 드래그 스냅 |
| **Drag elasticity** | Coefficient controlling how much resistance is felt when dragging past bounds | 드래그 탄성 |
| **Pan** | Slow, controlled drag to move/scroll content | 팬 |
| **Rotate gesture** | Two-finger rotation gesture | 회전 제스처 |
| **Velocity tracker** | System that calculates gesture speed and direction for physics-based follow-up | 속도 추적기 |
| **Decay animation** | Animation that decelerates from an initial velocity to zero (used after fling) | 디케이 애니메이션 |
| **Throw** | Element launched in a direction with initial velocity from a gesture | 던지기 |
| **Dismiss gesture** | Swipe to remove an element (swipe-to-dismiss pattern) | 스와이프 해제 |
| **Drag-to-reorder** | Rearranging list items via drag | 드래그 정렬 |

---

## 13. Attention & Feedback

| Term | Description | Korean |
|------|-------------|--------|
| **Toast** | Brief notification sliding into view and auto-dismissing | 토스트 |
| **Notification slide** | Notification animating in from the top or side of the screen | 알림 슬라이드 |
| **Badge pulse** | Pulsing red dot or counter badge to indicate unread/new items | 배지 펄스 |
| **Highlight** | Temporary visual emphasis on an element (flash of color) | 하이라이트 |
| **Focus ring animation** | Animated outline or ring when element receives focus | 포커스 링 애니메이션 |
| **Success animation** | Celebratory feedback (checkmark draw, confetti burst) on successful action | 성공 애니메이션 |
| **Error animation** | Shake, red flash, or bounce indicating a failed action | 에러 애니메이션 |
| **Warning animation** | Pulsing exclamation or yellow flash for warnings | 경고 애니메이션 |
| **Snackbar** | Material Design bottom notification bar with optional action button | 스낵바 |
| **Banner slide** | Full-width notification sliding down from the top | 배너 슬라이드 |
| **Popover animation** | Animated appearance of a context menu or tooltip | 팝오버 애니메이션 |
| **Alert animation** | Modal alert appearing with scale-up or fade | 알럿 애니메이션 |
| **Reward animation** | Celebratory motion (stars, confetti, particles) after achievement | 보상 애니메이션 |
| **Dot indicator** | Animated dots showing current position in a carousel or pagination | 점 인디케이터 |
| **Notification badge** | Animated count indicator on an icon (app badge) | 알림 배지 |
| **Slide-in notification** | Notification entering from screen edge | 슬라이드인 알림 |
| **Auto-dismiss** | Element that fades out or slides out after a timeout | 자동 해제 |
| **Action feedback** | Immediate visual response confirming user action was received | 액션 피드백 |
| **Skeleton-to-content** | Animated transition from skeleton placeholder to loaded content | 스켈레톤-콘텐츠 전환 |

---

## 14. Cursor & Pointer

| Term | Description | Korean |
|------|-------------|--------|
| **Cursor trail** | Particles, shapes, or fading copies following the cursor path | 커서 트레일 |
| **Magnetic cursor** | Cursor or element that gravitates toward interactive elements when nearby | 마그네틱 커서 |
| **Custom cursor** | Replacement of default cursor with a designed element (circle, dot, image) | 커스텀 커서 |
| **Cursor spotlight** | Circular light area centered on cursor revealing content underneath | 커서 스포트라이트 |
| **Hover magnetic** | Interactive element that subtly shifts toward the cursor on hover | 호버 마그네틱 |
| **Cursor blend mode** | Custom cursor with mix-blend-mode creating inversion or color effects | 커서 블렌드 모드 |
| **Cursor scale** | Custom cursor that grows/shrinks when hovering over different elements | 커서 스케일 |
| **Cursor morph** | Custom cursor changing shape based on context (arrow to hand, circle to text) | 커서 모핑 |
| **Cursor text** | Text label following the cursor (e.g., "View", "Drag") | 커서 텍스트 |
| **Parallax cursor** | Elements shifting position based on cursor location (not scroll) | 패럴랙스 커서 |
| **Mouse-driven tilt** | 3D tilt of an element based on mouse position relative to it | 마우스 틸트 |
| **Swirl cursor** | Particles spiraling around the cursor path | 소용돌이 커서 |
| **Elastic cursor** | Custom cursor with spring-based following (lags behind, overshoots) | 탄성 커서 |
| **Cursor glow** | Glow effect centered on the cursor position | 커서 글로우 |
| **Hover distortion** | Visual distortion (wave, pixelation) of elements under cursor | 호버 왜곡 |

---

## 15. Background & Ambient

| Term | Description | Korean |
|------|-------------|--------|
| **Animated gradient** | Background gradient with shifting colors or moving color stops | 애니메이션 그라데이션 |
| **Mesh gradient** | Multi-point gradient where colors blend organically at intersections | 메쉬 그라데이션 |
| **Wave** | Sinusoidal or organic undulating shape animation | 웨이브 / 파동 |
| **Blob** | Organic, amorphous shape that morphs continuously | 블롭 |
| **Aurora** | Flowing bands of color mimicking northern lights (animated gradient variant) | 오로라 |
| **Grain / Noise texture** | Subtle static-like visual texture overlaid on backgrounds for analog feel | 그레인 / 노이즈 텍스처 |
| **Fluid simulation** | Realistic liquid-like movement driven by physics or noise algorithms | 유체 시뮬레이션 |
| **Liquid distortion** | Wavy, water-like warping of an image or surface | 리퀴드 디스토션 |
| **Gradient orb** | Soft, circular gradient shape floating or drifting in the background | 그라데이션 오브 |
| **Moving particles** | Ambient floating particles in the background | 움직이는 파티클 |
| **Constellation** | Connected dots/lines forming network patterns in the background | 별자리 배경 |
| **Starfield** | Stars or dots moving to simulate forward motion through space | 스타필드 |
| **Nebula** | Cloud-like, colorful ambient effect | 네뷸라 |
| **Matrix rain** | Falling green characters (The Matrix style) | 매트릭스 비 |
| **Noise warp** | Perlin/simplex noise distorting a surface continuously | 노이즈 워프 |
| **Metaball** | Organic blobs that merge smoothly when close to each other | 메타볼 |
| **Heat haze** | Wavy distortion effect simulating rising hot air | 열기 효과 / 아지랑이 |
| **Film grain** | Subtle animated noise mimicking analog film texture | 필름 그레인 |
| **Ambient motion** | Slow, subtle background movement that adds life without demanding attention | 앰비언트 모션 |
| **Frosted glass / Glassmorphism** | Blurred, translucent backdrop with subtle color tinting | 프로스티드 글래스 / 글래스모피즘 |

---

## 16. Reveal & Entrance

| Term | Description | Korean |
|------|-------------|--------|
| **Fade-in** | Element transitions from transparent to fully visible | 페이드인 |
| **Slide-up** | Element enters by moving upward from below its final position | 슬라이드업 |
| **Slide-down** | Element enters by moving downward from above | 슬라이드다운 |
| **Slide-left / Slide-right** | Element enters from the left or right side | 슬라이드 좌/우 |
| **Zoom-in** | Element scales from small (or zero) to full size | 줌인 |
| **Clip-path reveal** | Content revealed by animating a clip-path shape (circle, polygon, inset) | 클립패스 리빌 |
| **Mask reveal** | Content revealed by animating a gradient mask or image mask | 마스크 리빌 |
| **Stagger children** | Child elements animate in one by one with sequential delay | 자식 스태거 |
| **Cascade** | Waterfall-like sequence where elements appear top-to-bottom with increasing delay | 캐스케이드 |
| **Pop-in** | Element scales from 0 to slightly larger than final size, then settles (overshoot) | 팝인 |
| **Grow** | Element expands from a point or edge to its full size | 그로우 |
| **Unfold** | Element appears to unfold or unwrap into view | 언폴드 |
| **Blur-in** | Element transitions from heavily blurred to sharp | 블러인 |
| **Drop-in** | Element falls from above and bounces at its landing position | 드롭인 |
| **Rotate-in** | Element rotates from a tilted angle to its final orientation | 로테이트인 |
| **Flip-in** | Element flips into view along an axis | 플립인 |
| **Hinge** | Element swings in like a door on a hinge | 힌지 |
| **Roll-in** | Element rolls in from the side with rotation | 롤인 |
| **Jack-in-the-box** | Element springs up with overshoot from below | 잭인더박스 |
| **Typewriter reveal** | Text appears character-by-character as if typed | 타이프라이터 리빌 |
| **Counter-up** | Numbers animate from 0 to target value | 카운터업 |
| **Curtain reveal** | Two halves pull apart to reveal content (like stage curtains) | 커튼 리빌 |

---

## 17. Exit & Dismissal

| Term | Description | Korean |
|------|-------------|--------|
| **Fade-out** | Element transitions from visible to transparent | 페이드아웃 |
| **Slide-out** | Element exits by moving out in a direction | 슬라이드아웃 |
| **Shrink** | Element scales down to zero before being removed | 축소 |
| **Collapse** | Element's height or width animates to zero | 접기 |
| **Dissolve** | Element breaks apart into particles or pixels as it disappears | 디졸브 |
| **Unmount animation** | Animation played when a React component is removed from the DOM | 언마운트 애니메이션 |
| **Zoom-out** | Element scales down and fades as it exits | 줌아웃 |
| **Fly-out** | Element accelerates out of the viewport | 플라이아웃 |
| **Pop-out** | Quick scale-down with opacity fade | 팝아웃 |
| **Blur-out** | Element blurs and fades simultaneously | 블러아웃 |
| **Spin-out** | Element rotates while shrinking/fading | 스핀아웃 |
| **Swipe-to-dismiss** | User swipes element away; it continues in the swipe direction and fades | 스와이프 해제 |
| **Implode** | Element collapses inward toward its center | 임플로드 |
| **Scatter** | Element breaks into pieces that fly outward | 스캐터 |
| **Sink** | Element drops downward and fades as if falling | 싱크 |

---

## 18. Physics-based

| Term | Description | Korean |
|------|-------------|--------|
| **Spring animation** | Animation modeled on spring mechanics (stiffness, damping, mass) | 스프링 애니메이션 |
| **Gravity** | Downward force pulling elements toward the bottom | 중력 |
| **Friction** | Force resisting motion, causing deceleration | 마찰력 |
| **Velocity** | Instantaneous speed and direction of an element | 속도 |
| **Acceleration** | Rate of change in velocity | 가속도 |
| **Mass** | Simulated weight affecting how an element responds to forces | 질량 |
| **Tension** | Spring force pulling toward the resting position | 장력 |
| **Damping ratio** | 0 = no damping (infinite oscillation), 1 = critically damped (no bounce), >1 = overdamped | 감쇠비 |
| **Underdamped** | Spring that oscillates before settling (bouncy, damping ratio < 1) | 감쇠 부족 |
| **Critically damped** | Fastest settling without oscillation (damping ratio = 1) | 임계 감쇠 |
| **Overdamped** | Slow settling without oscillation (damping ratio > 1) | 과감쇠 |
| **Inertia** | Tendency of a moving object to continue moving in the same direction | 관성 |
| **Decay** | Animation that decelerates from initial velocity to rest | 디케이 / 감쇠 |
| **Natural frequency** | Rate at which a spring oscillates, determined by stiffness and mass | 고유 진동수 |
| **Rest delta** | Threshold below which the spring animation is considered "at rest" | 정지 임계값 |
| **Collision** | Elements bouncing off each other or boundaries | 충돌 |
| **Elasticity / Restitution** | How bouncy a collision is (0 = no bounce, 1 = perfectly elastic) | 탄성 / 반발 계수 |
| **Force field** | Area that applies forces (attraction, repulsion) to elements within it | 힘의 장 |
| **Air resistance / Drag** | Force opposing motion proportional to velocity | 공기 저항 |
| **Ragdoll** | Physics simulation where connected segments flop loosely | 래그돌 |

---

## 19. SVG & Path

| Term | Description | Korean |
|------|-------------|--------|
| **Path drawing** | SVG path that animates as if being drawn by a pen | 패스 드로잉 |
| **Stroke animation** | Animating stroke-dasharray and stroke-dashoffset to reveal/hide strokes | 스트로크 애니메이션 |
| **Morph path** | Smooth interpolation between two SVG path shapes | 패스 모핑 |
| **Line drawing** | Self-drawing effect where lines appear to draw themselves | 라인 드로잉 |
| **SVG trace** | Path tracing an outline of an illustration or logo | SVG 트레이스 |
| **Dash offset** | stroke-dashoffset property controlling where the dash pattern starts | 대시 오프셋 |
| **Dash array** | stroke-dasharray property defining dash and gap lengths | 대시 어레이 |
| **Path length** | Total length of an SVG path used to set dash-array for full-path animation | 패스 길이 |
| **Marching ants** | Animated dashed border that appears to move along the path | 마칭 앤츠 |
| **Fill animation** | SVG fill color animating (color change, gradient shift) | 필 애니메이션 |
| **Clip-path animation** | Animating SVG or CSS clip-path to reveal/hide content | 클립패스 애니메이션 |
| **Shape morphing** | One geometric shape smoothly transforming into another | 도형 모핑 |
| **Path interpolation** | Mathematical blending between two path definitions | 패스 보간 |
| **Animate along path** | Element moving along the trajectory of an SVG path (offset-path) | 패스 따라 움직임 |
| **SVG filter animation** | Animating SVG filters (feTurbulence, feDisplacementMap) for effects | SVG 필터 애니메이션 |
| **Handwriting effect** | Text path drawn as if being written by hand | 필기 효과 |
| **Logo reveal** | Logo appearing via animated path drawing | 로고 리빌 |

---

## 20. Canvas / WebGL

| Term | Description | Korean |
|------|-------------|--------|
| **Shader** | Small program running on the GPU that determines how pixels/vertices are rendered | 셰이더 |
| **Fragment shader** | Shader controlling the color of each pixel | 프래그먼트 셰이더 |
| **Vertex shader** | Shader controlling the position of each vertex in 3D space | 버텍스 셰이더 |
| **GLSL** | OpenGL Shading Language used to write shaders | GLSL |
| **Post-processing** | Effects applied after the scene is rendered (bloom, blur, color grading) | 포스트 프로세싱 |
| **Bloom** | Bright areas bleed light into surrounding pixels | 블룸 |
| **Distortion** | Warping of the rendered image (wave, ripple, barrel) | 디스토션 / 왜곡 |
| **Displacement** | Vertex or pixel positions shifted by a texture map | 디스플레이스먼트 |
| **Noise texture** | Procedurally generated randomness used for organic effects | 노이즈 텍스처 |
| **Render target / FBO** | Off-screen buffer for rendering intermediate results | 렌더 타깃 |
| **Uniform** | Variable passed from JavaScript to shader (e.g., time, mouse position) | 유니폼 |
| **Varying** | Variable passed from vertex shader to fragment shader | 배리잉 |
| **UV coordinates** | 2D texture mapping coordinates (0,0 to 1,1) | UV 좌표 |
| **Texture** | Image data passed to a shader for sampling | 텍스처 |
| **Framebuffer** | Memory buffer holding the rendered frame | 프레임버퍼 |
| **Ray marching** | Rendering technique stepping along rays to find surfaces (used for volumetric effects) | 레이마칭 |
| **SDF (Signed Distance Function)** | Mathematical function defining distance to a surface, used for smooth shapes | SDF / 부호 거리 함수 |
| **Instanced rendering** | Drawing many copies of geometry with GPU-efficient single draw call | 인스턴스 렌더링 |
| **Particle system (GPU)** | Particles computed and rendered entirely on the GPU | GPU 파티클 시스템 |
| **Three.js** | Popular JavaScript 3D library built on WebGL | Three.js |
| **React Three Fiber (R3F)** | React renderer for Three.js | React Three Fiber |
| **Shader material** | Material using custom vertex/fragment shaders instead of prebuilt ones | 셰이더 머티리얼 |
| **Vignette** | Darkening at the edges of the screen | 비네트 |
| **Color grading** | Adjusting the overall color palette of a rendered scene | 컬러 그레이딩 |
| **Film grain (shader)** | GPU-rendered noise overlay simulating film stock | 필름 그레인 (셰이더) |
| **Gaussian blur** | Mathematically smooth blur via normal distribution weighting | 가우시안 블러 |
| **Motion blur** | Blurring in the direction of movement to simulate camera exposure | 모션 블러 |
| **Depth of field** | Simulated camera focus where near/far objects are blurred | 피사계 심도 |

---

## 21. Animation Principles (Disney's 12 + UI Adaptations)

| Term | Description | Korean |
|------|-------------|--------|
| **Squash and stretch** | Object deforms to show weight and flexibility during motion | 스쿼시 앤 스트레치 / 찌그러짐과 늘어남 |
| **Anticipation** | Small preparatory motion before the main action (button press-down before launching) | 예비 동작 |
| **Staging** | Presenting motion clearly so the user's attention is directed to the right place | 스테이징 / 연출 |
| **Straight ahead / Pose to pose** | Two approaches: animate frame-by-frame vs define key poses and interpolate | 순차 / 포즈 투 포즈 |
| **Follow-through** | Parts of an element continue moving after the main body stops | 후속 동작 |
| **Overlapping action** | Different parts of an element move at different rates | 중첩 동작 |
| **Slow-in / Slow-out** | Acceleration at start and deceleration at end (easing) | 슬로우인 / 슬로우아웃 |
| **Arcs** | Natural motion follows curved paths rather than straight lines | 아크 / 곡선 운동 |
| **Secondary action** | Smaller supporting motion that reinforces the primary action | 부수 동작 |
| **Timing** | Speed of action conveying weight, mood, and personality | 타이밍 |
| **Exaggeration** | Amplifying motion for emphasis or clarity | 과장 |
| **Appeal** | Motion should be pleasant, purposeful, and feel "right" | 매력 / 어필 |
| **Choreography** | Coordinating multiple animations to work together harmoniously | 안무 / 코레오그래피 |
| **Orchestration** | Sequencing and layering animations across a complete experience | 오케스트레이션 |
| **Hierarchy of motion** | Most important animation plays most prominently; secondary elements support | 모션 위계 |

---

## 22. Motion Tokens & Design System Terms

| Term | Description | Korean |
|------|-------------|--------|
| **Motion token** | Reusable design token defining animation behavior (duration, easing) | 모션 토큰 |
| **Duration token** | Standardized duration value (e.g., duration-quick: 150ms, duration-moderate: 300ms) | 지속 시간 토큰 |
| **Easing token** | Standardized easing curve (e.g., easing-standard, easing-emphasized) | 이징 토큰 |
| **Primitive token** | Low-level raw value (e.g., 200ms, cubic-bezier(0.4, 0, 0.2, 1)) | 프리미티브 토큰 |
| **Semantic token** | Named token mapped to a use case (e.g., motion-enter, motion-exit) | 시맨틱 토큰 |
| **Component token** | Token scoped to a specific component (e.g., button-press-duration) | 컴포넌트 토큰 |
| **Reduce motion** | Accessibility preference to minimize or eliminate animations | 모션 줄이기 |
| **prefers-reduced-motion** | CSS media query detecting user's motion preference | prefers-reduced-motion |
| **Motion scale** | System for scaling animation durations proportionally across a design system | 모션 스케일 |
| **Transition property** | Which CSS property is animated during a transition | 트랜지션 속성 |
| **Animation curve** | The shape of the easing function (how speed changes over time) | 애니메이션 곡선 |
| **Keyframe** | A defined state at a specific point in an animation timeline | 키프레임 |

---

## 23. Tools & Framework-Specific Terms

| Term | Description | Korean |
|------|-------------|--------|
| **Tween** | Animation interpolating from one value to another over a set duration (GSAP term) | 트윈 |
| **Timeline** | Sequenced container for multiple tweens with relative timing (GSAP term) | 타임라인 |
| **ScrollTrigger** | GSAP plugin linking animations to scroll position | ScrollTrigger |
| **Variants** | Framer Motion named animation states (initial, animate, exit, hover, tap) | 배리언츠 |
| **Gesture recognizer** | System detecting and interpreting user gestures | 제스처 인식기 |
| **useSpring** | React Spring hook for spring-based animation | useSpring |
| **useAnimation** | Framer Motion hook for imperative animation control | useAnimation |
| **motion component** | Framer Motion enhanced HTML/SVG element with animation props | 모션 컴포넌트 |
| **Lottie** | JSON-based animation format exported from After Effects | 로티 |
| **Rive** | Real-time interactive animation tool and runtime | 라이브 |
| **GSAP** | GreenSock Animation Platform, industry-standard JS animation library | GSAP |
| **Anime.js** | Lightweight JavaScript animation library | Anime.js |
| **Web Animations API (WAAPI)** | Native browser API for controlling animations via JavaScript | Web Animations API |
| **requestAnimationFrame** | Browser API for running code synced to the display refresh rate (60fps) | requestAnimationFrame |
| **CSS transitions** | Simple A-to-B property animations triggered by state changes | CSS 트랜지션 |
| **CSS animations** | Keyframe-based animations defined in CSS @keyframes rules | CSS 애니메이션 |
| **Intersection Observer** | Browser API for detecting when elements enter/leave the viewport | Intersection Observer |

---

## 24. Carousel & Continuous Motion

| Term | Description | Korean |
|------|-------------|--------|
| **Carousel** | Rotating display of items that cycles through content | 캐러셀 |
| **Infinite scroll carousel** | Carousel that loops endlessly without visible beginning or end | 무한 캐러셀 |
| **Marquee** | Content scrolling continuously in one direction | 마키 |
| **Ticker** | Continuously scrolling single line of text or items (news ticker) | 티커 |
| **Auto-play** | Carousel or animation that plays automatically without user interaction | 자동 재생 |
| **Crossfade carousel** | Carousel items transition via opacity crossfade rather than sliding | 크로스페이드 캐러셀 |
| **Coverflow** | 3D carousel where items are tilted and overlapping (Apple style) | 커버플로우 |
| **Snap scroll** | Content snaps to item boundaries after scroll gesture ends | 스냅 스크롤 |
| **Looping** | Animation or sequence that repeats seamlessly | 루핑 / 반복 |
| **Pendulum** | Back-and-forth swinging motion | 진자 운동 |
| **Oscillation** | Regular back-and-forth movement around a center point | 진동 |

---

## Quick Reference: Common Korean Motion Terms

| Korean | English | Context |
|--------|---------|---------|
| 애니메이션 | Animation | General |
| 트랜지션 | Transition | State change |
| 이징 | Easing | Timing curve |
| 스크롤 | Scroll | Scroll-based |
| 호버 | Hover | Mouse interaction |
| 패럴랙스 | Parallax | Depth effect |
| 스프링 | Spring | Physics |
| 바운스 | Bounce | Physics |
| 페이드 | Fade | Opacity |
| 슬라이드 | Slide | Translation |
| 스케일 | Scale | Size change |
| 회전 | Rotation | Rotation |
| 플립 | Flip | 3D rotation |
| 모핑 | Morphing | Shape change |
| 파티클 | Particle | Generative |
| 글로우 | Glow | Light effect |
| 셰이더 | Shader | WebGL |
| 마이크로 인터랙션 | Micro-interaction | Small feedback |
| 키프레임 | Keyframe | Animation timing |
| 타이프라이터 | Typewriter | Text animation |
| 스켈레톤 | Skeleton | Loading state |
| 쉬머 | Shimmer | Loading effect |
| 스태거 | Stagger | Sequential delay |
| 관성 | Inertia | Physics |
| 글리치 | Glitch | Distortion |
| 블러 | Blur | Filter |
| 노이즈 | Noise | Texture/generative |
| 오로라 | Aurora | Background effect |
| 네온 | Neon | Glow style |
| 리빌 | Reveal | Entrance |
| 드래그 | Drag | Gesture |
| 스와이프 | Swipe | Gesture |
| 컨페티 | Confetti | Celebration |
| 토스트 | Toast | Notification |
| 로티 | Lottie | Animation format |
| 모션 토큰 | Motion token | Design system |
