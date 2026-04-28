/*
  Stagger indents are expressed as % of the content area (viewport - 64px padding).
  At the 1440px Figma design width (content = 1376px):
    Line 2 "Photographer"   → pl: 214/1376 = 15.55%
    Line 3 "Born & raised"  → pl: 610/1376 = 44.33%
    Line 5 "Of chicago."    → pl: 606/1376 = 44.04%
    [ creative freelancer ] → left: 1079/1376 = 78.42% (absolute within line 5 container)

  Font: 6.67vw = exactly 96px at 1440px. Tracking: -0.08em = -7.68px at 96px.
  These both scale proportionally so the layout stays correct at all desktop sizes.
*/

export default function IntroSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-[120px]" id="about">
      <div className="flex flex-col gap-6 items-start w-full">

        {/* ── Header: label + rule ── */}
        <div className="flex flex-col gap-3 items-end w-full">
          <p className="font-mono text-sm text-[#1f1f1f] uppercase text-right">
            [ 8+ years in industry ]
          </p>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </div>

        {/* ── Staggered typography block ── */}
        <div className="flex flex-col gap-2 w-full items-center md:items-start">

          {/* LINE 1 ─ "A creative director   /" + 001 label */}
          {/* Mobile: label above, text centered */}
          <div className="flex flex-col items-center gap-3 md:hidden">
            <p className="font-mono text-sm text-[#1f1f1f]">001</p>
            <p className="font-light text-[32px] tracking-[-0.08em] leading-[0.84] uppercase text-center whitespace-pre">
              {`A creative director   /`}
            </p>
          </div>
          {/* Desktop: text + label inline */}
          <div className="hidden md:flex items-start gap-3 whitespace-nowrap">
            <p className="font-light text-[6.67vw] tracking-[-0.08em] leading-[0.84] uppercase whitespace-pre text-black">
              {`A creative director   /`}
            </p>
            <p className="font-mono text-sm text-[#1f1f1f] mt-[0.6em]">001</p>
          </div>

          {/* LINE 2 ─ "Photographer" */}
          {/* Mobile: centered */}
          <p className="md:hidden font-light text-[32px] tracking-[-0.08em] leading-[0.84] uppercase text-center text-black whitespace-nowrap">
            Photographer
          </p>
          {/* Desktop: indented 15.55% from left */}
          <div className="hidden md:block w-full pl-[15.55%]">
            <p className="font-light text-[6.67vw] tracking-[-0.08em] leading-[0.84] uppercase text-black whitespace-nowrap">
              Photographer
            </p>
          </div>

          {/* LINE 3 ─ "Born & raised" (& in Playfair italic) */}
          {/* Mobile: centered */}
          <p className="md:hidden font-light text-[32px] tracking-[-0.08em] leading-[0.84] uppercase text-center text-black whitespace-nowrap">
            Born{" "}
            <span className="font-[family-name:var(--font-playfair)] italic not-uppercase normal-case">&</span>
            {" "}raised
          </p>
          {/* Desktop: indented 44.33% from left */}
          <div className="hidden md:block w-full pl-[44.33%]">
            <p className="font-light text-[6.67vw] tracking-[-0.08em] leading-[0.84] uppercase text-black whitespace-nowrap">
              Born{" "}
              <span className="font-[family-name:var(--font-playfair)] italic normal-case">&</span>
              {" "}raised
            </p>
          </div>

          {/* LINE 4 ─ "On the south side" — no indent on either breakpoint */}
          <p className="font-light text-[32px] md:text-[6.67vw] tracking-[-0.08em] leading-[0.84] uppercase text-center md:text-left text-black whitespace-nowrap">
            On the south side
          </p>

          {/* LINE 5 ─ "Of chicago." + [ creative freelancer ] */}
          {/* Mobile: text centered, label below */}
          <div className="md:hidden flex flex-col items-center gap-3">
            <p className="font-light text-[32px] tracking-[-0.08em] leading-[0.84] uppercase text-center text-black">
              Of chicago.
            </p>
            <p className="font-mono text-sm text-[#1f1f1f]">[ creative freelancer ]</p>
          </div>
          {/* Desktop: indented 44.04%, label stacked below */}
          <div className="hidden md:block w-full pl-[44.04%]">
            <p className="font-light text-[6.67vw] tracking-[-0.08em] leading-[0.84] uppercase text-black whitespace-nowrap">
              Of chicago.
            </p>
            <p className="font-mono text-sm text-[#1f1f1f] whitespace-nowrap mt-2">
              [ creative freelancer ]
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
