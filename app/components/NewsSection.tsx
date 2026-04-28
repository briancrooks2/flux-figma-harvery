// Replace image URLs with your own assets — Figma URLs expire after 7 days
const imgCard1 = "https://www.figma.com/api/mcp/asset/f84785a8-2008-4c2e-a3db-f5b0cbcef3f2";
const imgCard2 = "https://www.figma.com/api/mcp/asset/eff0ddb6-eb30-445c-9a03-bb0765d83c56";
const imgCard3 = "https://www.figma.com/api/mcp/asset/e7bfc5ca-5777-4c10-81af-a175b799e577";
const imgArrow = "https://www.figma.com/api/mcp/asset/9ca72c35-b0d4-42a8-8aa0-5e0c18a0624a";

const articles = [
  { img: imgCard1, body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { img: imgCard2, body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { img: imgCard3, body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

function ReadMore() {
  return (
    <a
      href="#"
      className="self-start border-b border-black flex gap-[10px] items-center py-1"
    >
      <span className="font-medium text-sm text-black tracking-[-0.04em] leading-[normal]">
        Read more
      </span>
      <div className="-rotate-90 size-[18px] shrink-0">
        <img src={imgArrow} alt="" className="w-full h-full" />
      </div>
    </a>
  );
}

function DesktopCard({
  img,
  body,
  stagger,
}: {
  img: string;
  body: string;
  stagger?: boolean;
}) {
  return (
    <div className={`flex-1 flex flex-col gap-4 min-w-0 ${stagger ? "pt-[120px]" : ""}`}>
      <div className="h-[469px] w-full overflow-hidden shrink-0">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="text-sm text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">{body}</p>
      <ReadMore />
    </div>
  );
}

export default function NewsSection() {
  return (
    <section id="news" className="bg-[#f3f3f3]">

      {/* ── Desktop ── */}
      {/*
        justify-between pushes the 110px rotated heading to the far left
        and the cards group to the far right.
        At 1440px design width the natural gap between them is ~246px.
      */}
      <div className="hidden md:flex items-end justify-between px-8 py-[120px]">

        {/* Rotated heading */}
        {/*
          Container is 110 × 706px — matches the visual footprint of
          the 64px two-line text after -90° rotation.
          flex-none prevents the inner text from flex-shrinking.
        */}
        <div className="flex items-center justify-center shrink-0 h-[706px] w-[110px]">
          <div className="-rotate-90 flex-none">
            <p className="font-light text-[64px] text-black tracking-[-0.08em] leading-[0.86] uppercase whitespace-nowrap">
              Keep up with my latest
            </p>
            <p className="font-light text-[64px] text-black tracking-[-0.08em] leading-[0.86] uppercase whitespace-nowrap">
              news &amp; achievements
            </p>
          </div>
        </div>

        {/* Three staggered cards with vertical dividers */}
        <div className="flex items-start w-[1020px] shrink-0">
          <DesktopCard img={imgCard1} body={articles[0].body} />
          <div className="self-stretch w-px bg-black/20 shrink-0 mx-8" />
          <DesktopCard img={imgCard2} body={articles[1].body} stagger />
          <div className="self-stretch w-px bg-black/20 shrink-0 mx-8" />
          <DesktopCard img={imgCard3} body={articles[2].body} />
        </div>

      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-8 px-4 py-16">

        <p className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.86] uppercase">
          Keep up with my latest news &amp; achievements
        </p>

        {/* Snap-scroll card strip */}
        <div
          className="-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none" } as React.CSSProperties}
        >
          {articles.map((article, i) => (
            <div key={i} className="snap-center shrink-0 w-[75vw] flex flex-col gap-4">
              <div className="h-[398px] overflow-hidden">
                <img
                  src={article.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">
                {article.body}
              </p>
              <ReadMore />
            </div>
          ))}
          {/* trailing spacer so last card can snap-center */}
          <div className="shrink-0 w-[12.5vw]" aria-hidden="true" />
        </div>

      </div>

    </section>
  );
}
