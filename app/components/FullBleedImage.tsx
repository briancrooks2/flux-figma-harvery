// Replace src with your own asset — Figma URLs expire after 7 days
const img = "https://www.figma.com/api/mcp/asset/cce1b4b7-ab2a-4a41-a253-b8bdb148e219";

export default function FullBleedImage() {
  return (
    <div className="w-full h-[500px] md:h-[900px] overflow-hidden">
      <img
        src={img}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-[60%_center]"
      />
    </div>
  );
}
