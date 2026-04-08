"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import type { EffectDefinition } from "@/effects/types";
import { MOTION_TAGS } from "@/effects/types";
import EffectCard from "./EffectCard";

interface EffectGroup {
  tag: string;
  effects: EffectDefinition[];
}

function groupEffects(effects: EffectDefinition[]): EffectGroup[] {
  const groups: EffectGroup[] = [];
  const seen = new Set<string>();

  for (const tag of MOTION_TAGS) {
    const matching = effects.filter((e) => e.motionTags.includes(tag));
    if (matching.length < 2) continue;

    const unique = matching.filter((e) => !seen.has(e.slug));
    if (unique.length < 2) continue;

    groups.push({ tag, effects: matching });
    matching.forEach((e) => seen.add(e.slug));
  }

  const ungrouped = effects.filter((e) => !seen.has(e.slug));
  if (ungrouped.length > 0) {
    groups.push({ tag: "other", effects: ungrouped });
  }

  return groups;
}

export default function CompareView({
  effects,
}: {
  effects: EffectDefinition[];
}) {
  const tLabels = useTranslations("tagLabels");
  const tDescs = useTranslations("tagDescriptions");
  const groups = useMemo(() => groupEffects(effects), [effects]);

  return (
    <div className="flex flex-col gap-10">
      {groups.map((group) => (
        <section key={group.tag}>
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <h3 className="text-[15px] font-semibold text-fg">
                {tLabels(group.tag)}
              </h3>
              <span className="text-[12px] text-muted/40 font-mono">
                {group.effects.length} libraries
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-[13px] text-muted/60 mt-1.5 max-w-2xl">
              {tDescs(group.tag)}
            </p>
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
