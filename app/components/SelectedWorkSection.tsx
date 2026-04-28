// Replace image URLs with your own assets — Figma URLs expire after 7 days
const imgSurfers   = "https://www.figma.com/api/mcp/asset/e3609545-4013-401c-ba9e-e396ad4b305d";
const imgCyberpunk = "https://www.figma.com/api/mcp/asset/8d9910ec-6b17-407f-8e6d-15af3716b0c4";
const imgAgency    = "https://www.figma.com/api/mcp/asset/ac3ec10d-121e-4d11-8373-0bdfece5943a";
const imgMinimal   = "https://www.figma.com/api/mcp/asset/c40bc798-eaf5-4ec8-b453-acdf4cbe126f";
const imgArrow     = "https://www.figma.com/api/mcp/asset/e10ecd7e-a41b-4998-a769-6f96adfe5566";

type WorkCard = { title: string; tags: string[]; img: string };

const leftCards: WorkCard[] = [
  { title: "Surfers paradise",    tags: ["Social Media", "Photography"], img: imgSurfers },
  { title: "Cyberpunk caffe",     tags: ["Social Media", "Photography"], img: imgCyberpunk },
];

const rightCards: WorkCard[] = [
  { title: "Agency 976",          tags: ["Social Media", "Photography"], img: imgAgency },
  { title: "Minimal Playground",  tags: ["Social Media", "Photography"], img: imgMinimal },
];

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex gap-3 items-center">
      {items.map((tag) => (
        <span
          key={tag}
          className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-full text-sm font-medium text-[#111] tracking-[-0.04em] whitespace-nowrap"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function Arrow() {
  return (
    <div className="-rotate-90 shrink-0 size-8">
      <img src={imgArrow} alt="" className="w-full h-full" />
    </div>
  );
}

function CardTitle({ title, size }: { title: string; size: "sm" | "lg" }) {
  return (
    <div className="flex items-center justify-between w-full">
      <p
        className={`font-black text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap ${
          size === "lg" ? "text-[36px]" : "text-[24px]"
        }`}
      >
        {title}
      </p>
      <Arrow />
    </div>
  );
}

function CardImage({ img, height }: { img: string; height: string }) {
  return (
    <div className={`relative ${height} w-full overflow-hidden flex flex-col items-start justify-end pb-4 pl-4`}>
      <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}

function CtaBox({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <div className={`relative ${fullWidth ? "w-full" : "w-[465px]"} px-6 py-3`}>
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />
      <div className="flex flex-col gap-[10px] items-start py-3">
        <p className="italic text-sm text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <a
          href="#contact"
          className="bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full"
        >
          Let&apos;s talk
        </a>
      </div>
    </div>
  );
}

export default function SelectedWorkSection() {
  return (
    <section id="work" className="px-4 md:px-8 py-12 md:py-[80px]">

      {/* ── Mobile header ── */}
      <div className="md:hidden flex flex-col gap-4 uppercase">
        <p className="font-mono text-sm text-[#1f1f1f]">[ portfolio ]</p>
        <div className="flex items-start justify-between">
          <div className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.86]">
            <p>Selected</p>
            <p>Work</p>
          </div>
          <p className="font-mono text-sm text-[#1f1f1f]">004</p>
        </div>
      </div>

      {/* ── Desktop header ── */}
      <div className="hidden md:flex items-start justify-between uppercase">
        <div className="flex items-start gap-[10px]">
          <div className="font-light text-[6.67vw] text-black tracking-[-0.08em] leading-[0.86]">
            <p>Selected</p>
            <p>Work</p>
          </div>
          <p className="font-mono text-sm text-[#1f1f1f] mt-[0.6em]">004</p>
        </div>
        <div className="flex items-center justify-center h-[110px] w-[15px] shrink-0">
          <p className="-rotate-90 font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap">[ portfolio ]</p>
        </div>
      </div>

      {/* ── Mobile cards (all 4 stacked) ── */}
      <div className="md:hidden flex flex-col gap-6 mt-8">
        {[...leftCards, ...rightCards].map((card) => (
          <div key={card.title} className="flex flex-col gap-[10px]">
            <CardImage img={card.img} height="h-[390px]" />
            <Tags items={card.tags} />
            <CardTitle title={card.title} size="sm" />
          </div>
        ))}
        <CtaBox fullWidth />
      </div>

      {/* ── Desktop cards (staggered two-column) ── */}
      <div className="hidden md:flex gap-6 items-end mt-[61px]">

        {/* Left column: Card1 + Card2 + CTA spaced across full height */}
        <div className="flex-1 self-stretch flex flex-col justify-between">
          <div className="flex flex-col gap-[10px]">
            <CardImage img={leftCards[0].img} height="h-[744px]" />
            <Tags items={leftCards[0].tags} />
            <CardTitle title={leftCards[0].title} size="lg" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <CardImage img={leftCards[1].img} height="h-[699px]" />
            <Tags items={leftCards[1].tags} />
            <CardTitle title={leftCards[1].title} size="lg" />
          </div>
          <CtaBox />
        </div>

        {/* Right column: offset by pt-[240px], Card3 + Card4 */}
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          <div className="flex flex-col gap-[10px]">
            <CardImage img={rightCards[0].img} height="h-[699px]" />
            <Tags items={rightCards[0].tags} />
            <CardTitle title={rightCards[0].title} size="lg" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <CardImage img={rightCards[1].img} height="h-[744px]" />
            <Tags items={rightCards[1].tags} />
            <CardTitle title={rightCards[1].title} size="lg" />
          </div>
        </div>

      </div>

    </section>
  );
}
