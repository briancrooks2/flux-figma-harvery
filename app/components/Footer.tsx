export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-[48px] px-4 md:px-8 flex flex-col gap-[48px] md:gap-[120px] overflow-hidden">

      {/* ── Top: CTA + socials + rule ── */}
      <div className="flex flex-col gap-6 md:gap-[48px]">

        {/* Desktop: three equal columns. Mobile: stacked. */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

          {/* CTA block */}
          <div className="flex flex-col gap-3 md:w-[298px]">
            <p className="font-light italic text-[24px] text-white tracking-[-0.04em] leading-[1.1] uppercase">
              Have a{" "}
              <span className="font-black not-italic">project</span>
              {" "}in mind?
            </p>
            <a
              href="#contact"
              className="self-start border border-white text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full"
            >
              Let&apos;s talk
            </a>
          </div>

          {/* Social links — mobile: stacked list. Desktop: two centered/right columns. */}
          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-4 mt-2">
            {["Facebook", "Instagram", "x.com", "Linkedin"].map((s) => (
              <a key={s} href="#" className="text-[18px] text-white tracking-[-0.04em] leading-[1.1] uppercase">
                {s}
              </a>
            ))}
          </div>

          {/* Desktop center column */}
          <div className="hidden md:block text-[18px] text-white tracking-[-0.04em] leading-[1.1] uppercase text-center w-[298px]">
            <p>Facebook</p>
            <p>Instagram</p>
          </div>

          {/* Desktop right column */}
          <div className="hidden md:block text-[18px] text-white tracking-[-0.04em] leading-[1.1] uppercase text-right w-[298px]">
            <p>x.com</p>
            <p>Linkedin</p>
          </div>
        </div>

        {/* Horizontal rule */}
        <div className="w-full h-px bg-white/20" />
      </div>

      {/* ── Bottom: H.Studio bleed + legal ── */}

      {/* Desktop */}
      <div className="hidden md:flex items-end justify-between">

        {/* H.Studio with rotated label — overflows right intentionally */}
        <div className="relative flex-1 h-[219px] overflow-hidden">
          {/* [ Coded By Claude ] — rotated -90° on far left */}
          <div className="absolute left-0 inset-y-0 flex items-center justify-center w-[15px]">
            <span className="-rotate-90 font-mono text-[10px] text-white uppercase whitespace-nowrap">
              [ Coded By Claude ]
            </span>
          </div>
          {/* H.Studio */}
          <p className="absolute top-1/2 -translate-y-1/2 left-5 font-semibold capitalize text-[20.14vw] text-white tracking-[-0.06em] leading-[0.8] whitespace-nowrap">
            H.Studio
          </p>
        </div>

        {/* Legal links */}
        <div className="flex gap-[34px] items-center pb-8 shrink-0">
          <a href="#" className="text-[12px] text-white tracking-[-0.04em] uppercase underline">licences</a>
          <a href="#" className="text-[12px] text-white tracking-[-0.04em] uppercase underline">Privacy policy</a>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-4 items-center">
        {/* Legal links */}
        <div className="flex gap-[34px] items-center">
          <a href="#" className="text-[12px] text-white tracking-[-0.04em] uppercase underline">licences</a>
          <a href="#" className="text-[12px] text-white tracking-[-0.04em] uppercase underline">Privacy policy</a>
        </div>

        {/* H.Studio bleed */}
        <div className="w-full overflow-hidden">
          <p className="font-mono text-[10px] text-white uppercase mb-3">[ Coded By Claude ]</p>
          <p className="font-semibold capitalize text-[24.38vw] text-white tracking-[-0.06em] leading-[0.8] whitespace-nowrap">
            H.Studio
          </p>
        </div>
      </div>

    </footer>
  );
}
