import { sanityFetch } from '@/sanity/lib/live'
import { urlFor } from '@/sanity/lib/image'

type PortfolioItem = {
  _id: string
  title: string
  categories: string[]
  coverImage?: { asset?: { _ref: string }; alt?: string }
  externalImageUrl?: string
}

const QUERY = `*[_type == "portfolioItem"] | order(order asc) {
  _id,
  title,
  categories,
  coverImage { asset, alt },
  externalImageUrl,
}`

function getImageSrc(item: PortfolioItem): string {
  if (item.coverImage?.asset?._ref) return urlFor(item.coverImage).url()
  return item.externalImageUrl ?? ''
}

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
    <div className="-rotate-90 shrink-0 size-8 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
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

function CardImage({ src, alt, height }: { src: string; alt: string; height: string }) {
  return (
    <div className={`relative ${height} w-full overflow-hidden flex flex-col items-start justify-end pb-4 pl-4`}>
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}

function CtaBox({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <div className={`relative ${fullWidth ? "w-full" : "w-[465px]"} px-6 py-3`}>
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

export default async function SelectedWorkSection() {
  const { data } = await sanityFetch({ query: QUERY })
  const items = (data ?? []) as PortfolioItem[]
  const leftCards = items.slice(0, 2)
  const rightCards = items.slice(2, 4)

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
          <p className="font-mono text-sm text-[#1f1f1f]">00{items.length}</p>
        </div>
      </div>

      {/* ── Desktop header ── */}
      <div className="hidden md:flex items-start justify-between uppercase">
        <div className="flex items-start gap-[10px]">
          <div className="font-light text-[6.67vw] text-black tracking-[-0.08em] leading-[0.86]">
            <p>Selected</p>
            <p>Work</p>
          </div>
          <p className="font-mono text-sm text-[#1f1f1f] mt-[0.6em]">00{items.length}</p>
        </div>
        <div className="flex items-center justify-center h-[110px] w-[15px] shrink-0">
          <p className="-rotate-90 font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap">[ portfolio ]</p>
        </div>
      </div>

      {/* ── Mobile cards (all 4 stacked) ── */}
      <div className="md:hidden flex flex-col gap-6 mt-8">
        {items.map((item) => (
          <div key={item._id} className="flex flex-col gap-[10px]">
            <CardImage src={getImageSrc(item)} alt={item.coverImage?.alt ?? item.title} height="h-[390px]" />
            <Tags items={item.categories ?? []} />
            <CardTitle title={item.title} size="sm" />
          </div>
        ))}
        <CtaBox fullWidth />
      </div>

      {/* ── Desktop cards (staggered two-column) ── */}
      <div className="hidden md:flex gap-6 items-end mt-[61px]">

        {/* Left column */}
        <div className="flex-1 self-stretch flex flex-col justify-between">
          {leftCards.map((item) => (
            <div key={item._id} className="flex flex-col gap-[10px]">
              <CardImage
                src={getImageSrc(item)}
                alt={item.coverImage?.alt ?? item.title}
                height={leftCards.indexOf(item) === 0 ? "h-[744px]" : "h-[699px]"}
              />
              <Tags items={item.categories ?? []} />
              <CardTitle title={item.title} size="lg" />
            </div>
          ))}
          <CtaBox />
        </div>

        {/* Right column: offset by pt-[240px] */}
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          {rightCards.map((item, i) => (
            <div key={item._id} className="flex flex-col gap-[10px]">
              <CardImage
                src={getImageSrc(item)}
                alt={item.coverImage?.alt ?? item.title}
                height={i === 0 ? "h-[699px]" : "h-[744px]"}
              />
              <Tags items={item.categories ?? []} />
              <CardTitle title={item.title} size="lg" />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
