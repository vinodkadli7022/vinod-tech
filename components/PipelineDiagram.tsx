"use client";

import { useReducedMotion } from "framer-motion";

export default function PipelineDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full flex flex-col gap-3 mt-16 pt-8 hairline-t">
      {/* Caption above it */}
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
        The pattern behind everything below — GeniusAI's 4-agent pipeline
      </span>

      {/* SVG Container, scrollable on very small screens, responsive on larger ones */}
      <div className="w-full overflow-x-auto sm:overflow-visible py-2 select-none scrollbar-none">
        <svg
          viewBox="0 0 800 150"
          className="w-full min-w-[720px] sm:min-w-0 h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connection Lines (Static Background) */}
          <path
            d="M 175,75 L 225,75 M 375,75 L 425,75 M 575,75 L 625,75"
            stroke="var(--line)"
            strokeWidth="1.5"
          />

          {/* Connection Lines (Animated Dashed Overlay) */}
          <path
            d="M 175,75 L 225,75 M 375,75 L 425,75 M 575,75 L 625,75"
            stroke="var(--indigo)"
            strokeWidth="1.5"
            strokeDasharray="6, 6"
            className={shouldReduceMotion ? "" : "animate-dashflow"}
          />

          {/* Arrowheads pointing right */}
          <polygon points="225,75 218,70 218,80" fill="var(--line)" />
          <polygon points="425,75 418,70 418,80" fill="var(--line)" />
          <polygon points="625,75 618,70 618,80" fill="var(--line)" />

          {/* Node 1: ORCHESTRATOR */}
          <g>
            <rect
              x="25"
              y="40"
              width="150"
              height="70"
              fill="var(--white)"
              stroke="var(--line)"
              strokeWidth="1.5"
            />
            {/* Blueprint corner details */}
            <line x1="25" y1="40" x2="33" y2="40" stroke="var(--indigo)" strokeWidth="2.5" />
            <line x1="25" y1="40" x2="25" y2="48" stroke="var(--indigo)" strokeWidth="2.5" />

            <text
              x="100"
              y="68"
              fill="var(--ink)"
              className="font-mono text-xs font-bold tracking-widest"
              textAnchor="middle"
            >
              ORCHESTRATOR
            </text>
            <text
              x="100"
              y="90"
              fill="var(--ink-soft)"
              className="font-sans text-[10px] font-semibold"
              textAnchor="middle"
            >
              routes & delegates
            </text>
          </g>

          {/* Node 2: RESEARCH */}
          <g>
            <rect
              x="225"
              y="40"
              width="150"
              height="70"
              fill="var(--white)"
              stroke="var(--line)"
              strokeWidth="1.5"
            />
            {/* Blueprint corner details */}
            <line x1="225" y1="40" x2="233" y2="40" stroke="var(--indigo)" strokeWidth="2.5" />
            <line x1="225" y1="40" x2="225" y2="48" stroke="var(--indigo)" strokeWidth="2.5" />

            <text
              x="300"
              y="68"
              fill="var(--ink)"
              className="font-mono text-xs font-bold tracking-widest"
              textAnchor="middle"
            >
              RESEARCH
            </text>
            <text
              x="300"
              y="90"
              fill="var(--ink-soft)"
              className="font-sans text-[10px] font-semibold"
              textAnchor="middle"
            >
              github, web, docs
            </text>
          </g>

          {/* Node 3: REASONING */}
          <g>
            <rect
              x="425"
              y="40"
              width="150"
              height="70"
              fill="var(--white)"
              stroke="var(--line)"
              strokeWidth="1.5"
            />
            {/* Blueprint corner details */}
            <line x1="425" y1="40" x2="433" y2="40" stroke="var(--indigo)" strokeWidth="2.5" />
            <line x1="425" y1="40" x2="425" y2="48" stroke="var(--indigo)" strokeWidth="2.5" />

            <text
              x="500"
              y="68"
              fill="var(--ink)"
              className="font-mono text-xs font-bold tracking-widest"
              textAnchor="middle"
            >
              REASONING
            </text>
            <text
              x="500"
              y="90"
              fill="var(--ink-soft)"
              className="font-sans text-[10px] font-semibold"
              textAnchor="middle"
            >
              pgvector + LLM
            </text>
          </g>

          {/* Node 4: ACTION */}
          <g>
            <rect
              x="625"
              y="40"
              width="150"
              height="70"
              fill="var(--white)"
              stroke="var(--line)"
              strokeWidth="1.5"
            />
            {/* Blueprint corner details */}
            <line x1="625" y1="40" x2="633" y2="40" stroke="var(--indigo)" strokeWidth="2.5" />
            <line x1="625" y1="40" x2="625" y2="48" stroke="var(--indigo)" strokeWidth="2.5" />

            <text
              x="700"
              y="68"
              fill="var(--ink)"
              className="font-mono text-xs font-bold tracking-widest"
              textAnchor="middle"
            >
              ACTION
            </text>
            <text
              x="700"
              y="90"
              fill="var(--ink-soft)"
              className="font-sans text-[10px] font-semibold"
              textAnchor="middle"
            >
              slack, vapi.ai call
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
