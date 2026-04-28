// Replace image URLs with your own assets — Figma URLs expire after 7 days
const imgMarko = "https://www.figma.com/api/mcp/asset/962703e4-814e-453b-9da7-9454606f9056";
const imgLukas = "https://www.figma.com/api/mcp/asset/6d2da312-f0ab-4b4a-a4ca-7c9317643dcf";
const imgSarah = "https://www.figma.com/api/mcp/asset/c7486142-8fbf-49e0-baab-7aae9375a6fa";
const imgSofia = "https://www.figma.com/api/mcp/asset/0b1f9eeb-d831-439c-a8fb-be507c2bcbef";

type Testimonial = {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  name: string;
  rotation: number;
  desktopLeft: string;
  desktopTop: number;
  behindHeading: boolean;
};

const testimonials: Testimonial[] = [
  {
    logo: imgMarko,
    logoW: 143, logoH: 19,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
    rotation: -6.85,
    desktopLeft: "7.08%",
    desktopTop: 142,
    behindHeading: true,
  },
  {
    logo: imgLukas,
    logoW: 138, logoH: 19,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
    rotation: 2.9,
    desktopLeft: "46.94%",
    desktopTop: 272,
    behindHeading: false,
  },
  {
    logo: imgSarah,
    logoW: 109, logoH: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
    rotation: 2.23,
    desktopLeft: "21.18%",
    desktopTop: 553,
    behindHeading: false,
  },
  {
    logo: imgSofia,
    logoW: 81, logoH: 36,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
    rotation: -4.15,
    desktopLeft: "68.54%",
    desktopTop: 546,
    behindHeading: false,
  },
];

function Card({ t, className }: { t: Testimonial; className?: string }) {
  return (
    <div
      className={`bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-[353px] ${className ?? ""}`}
    >
      <img
        src={t.logo}
        alt=""
        style={{ width: t.logoW, height: t.logoH }}
        className="object-contain object-left"
      />
      <p className="text-[18px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">
        {t.quote}
      </p>
      <p className="font-black text-[16px] text-black tracking-[-0.04em] leading-[1.1] uppercase">
        {t.name}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials">

      {/* ── Desktop: cards scattered around big heading ── */}
      <div className="hidden md:block relative min-h-[960px] overflow-hidden">

        {/* Heading — centered, z-10 (middle layer) */}
        <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 text-[13.75vw] font-medium capitalize text-black text-center tracking-[-0.07em] leading-[1.1] pointer-events-none select-none">
          Testimonials
        </h2>

        {/* Cards — Marko behind (z-0), rest in front (z-20) */}
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="absolute"
            style={{
              left: t.desktopLeft,
              top: t.desktopTop,
              rotate: `${t.rotation}deg`,
              zIndex: t.behindHeading ? 0 : 20,
            }}
          >
            <Card t={t} />
          </div>
        ))}
      </div>

      {/* ── Mobile: heading + horizontal snap-scroll deck ── */}
      <div className="md:hidden flex flex-col gap-8 py-16 overflow-hidden">
        <h2 className="px-4 text-[64px] font-medium capitalize text-black text-center tracking-[-0.07em] leading-[0.8]">
          Testimonials
        </h2>

        {/* Swipeable card strip — bleeds to edges, hides scrollbar */}
        <div
          className="-mx-4 px-4 pt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none" } as React.CSSProperties}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="snap-center shrink-0 w-[75vw]"
              style={{ rotate: `${t.rotation}deg` }}
            >
              {/* Card without fixed w-[353px] override — let width come from parent */}
              <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-full">
                <img
                  src={t.logo}
                  alt=""
                  style={{ width: t.logoW, height: t.logoH }}
                  className="object-contain object-left"
                />
                <p className="text-[18px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">
                  {t.quote}
                </p>
                <p className="font-black text-[16px] text-black tracking-[-0.04em] leading-[1.1] uppercase">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
          {/* trailing spacer so last card can fully snap-center */}
          <div className="shrink-0 w-[12.5vw]" aria-hidden="true" />
        </div>
      </div>

    </section>
  );
}
