// Replace image URLs with your own assets — Figma URLs expire after 7 days
const services = [
  {
    num: "[ 1 ]",
    title: "Brand Discovery",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/250c1580-f342-4eea-ac96-b2d31e529446",
  },
  {
    num: "[ 2 ]",
    title: "Web design & Dev",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/05cb068d-c95f-4081-8c10-0e332a63cbf3",
  },
  {
    num: "[ 3 ]",
    title: "Marketing",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/245f5d20-8660-409d-9e93-cd0368fc695b",
  },
  {
    num: "[ 4 ]",
    title: "Photography",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/9cdc2a40-af68-4a29-9ce6-3b49e333ace7",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black px-4 md:px-8 py-12 md:py-[80px]">
      <div className="flex flex-col gap-8 md:gap-12 items-start w-full">

        {/* ── [ services ] label ── */}
        <p className="font-mono text-sm text-white uppercase">[ services ]</p>

        {/* ── [4] Deliverables header ── */}
        {/*
          Inter Light, tracking -0.08em (= -7.68px at 96px / -2.56px at 32px).
          32px mobile → 6.67vw desktop (= 96px at 1440px design width).
        */}
        <div className="flex items-center justify-between w-full font-light text-white uppercase tracking-[-0.08em] leading-none whitespace-nowrap text-[32px] md:text-[6.67vw]">
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* ── Service rows ── */}
        <div className="flex flex-col gap-12 w-full">
          {services.map((service) => (
            <div key={service.num} className="flex flex-col gap-[9px] w-full">

              {/* Number + rule */}
              <div className="flex flex-col gap-[9px]">
                <p className="font-mono text-sm text-white uppercase">{service.num}</p>
                <div className="w-full h-px bg-white/30" />
              </div>

              {/* Content
                  Desktop: title on the left, desc + thumbnail on the right (justify-between)
                  Mobile:  title → desc → thumbnail stacked vertically
              */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0">

                {/* Service title — 36px Bold Italic on both breakpoints */}
                <p className="font-bold italic text-[36px] text-white tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">
                  {service.title}
                </p>

                {/* Desc + thumbnail */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  {/* Description — 14px regular, 393px wide on desktop */}
                  <p className="text-sm text-white tracking-[-0.04em] leading-[1.3] md:w-[393px]">
                    {service.desc}
                  </p>
                  {/* Thumbnail — 151×151px fixed */}
                  <div className="shrink-0 size-[151px] overflow-hidden">
                    <img
                      src={service.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
