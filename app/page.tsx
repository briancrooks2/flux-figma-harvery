import NavBar from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import FullBleedImage from "./components/FullBleedImage";
import ServicesSection from "./components/ServicesSection";
import SelectedWorkSection from "./components/SelectedWorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

// Replace with your own image before going live — Figma asset URLs expire after 7 days
const heroImg =
  "https://www.figma.com/api/mcp/asset/a5e29ea5-bb69-470d-b686-7cebfda1624d";

export default function Home() {
  return (
    <>
    <section className="relative h-dvh overflow-hidden flex flex-col">

      {/* ── Background photo ── */}
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* ── Gradient blur overlay (fades from bottom up, vanishes before the headline) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[65%] backdrop-blur-[10px] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to top, black 0%, black 25%, transparent 65%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, black 25%, transparent 65%)",
        }}
      />

      {/* ── Navigation ── */}
      <NavBar />

      {/* ── Hero content ── */}
      {/*
        Mobile  (< md): content anchored to bottom  (justify-end)
        Desktop (≥ md): content centered vertically (md:justify-center)
      */}
      <div className="relative flex-1 flex flex-col justify-end md:justify-center pb-6 md:pb-0">

        {/* Name block — intentionally no horizontal padding so text bleeds edge-to-edge */}
        <div className="flex flex-col w-full">
          {/* [ Hello i'm ] label */}
          <div className="px-4 md:px-8">
            <p className="font-mono text-sm text-white uppercase mix-blend-overlay leading-[1.1] text-center md:text-left">
              [ Hello i&apos;m ]
            </p>
          </div>

          {/*
            Desktop: 13.75vw = exactly 198px at 1440px design width.
                     whitespace-nowrap keeps it on one line at all desktop sizes.
            Mobile:  25vw scales down; whitespace-pre-wrap lets it split
                     naturally at the spaces between Harvey and Specter.
          */}
          <p
            className="
              font-medium capitalize text-white mix-blend-overlay text-center w-full
              text-[25vw] tracking-[-0.07em] leading-[0.8] whitespace-pre-wrap
              md:text-[13.75vw] md:leading-[1.1] md:whitespace-nowrap
            "
          >
            {`Harvey   Specter`}
          </p>
        </div>

        {/* Description + CTA — right-aligned desktop, left-aligned mobile */}
        <div className="flex flex-col items-start md:items-end w-full mt-4 md:mt-0 px-4 md:px-8">
          <div className="flex flex-col gap-[17px] items-start w-[293px] md:w-[294px]">
            <p className="font-bold italic text-sm text-[#1f1f1f] tracking-[-0.035em] uppercase leading-[1.1]">
              H.Studio is a{" "}
              <span className="font-normal not-italic">full-service</span>
              {" "}creative studio creating beautiful digital experiences and
              products. We are an{" "}
              <span className="font-normal not-italic">award winning</span>
              {" "}desing and art group specializing in branding, web design and
              engineering.
            </p>
            <a
              href="#contact"
              className="bg-black text-white text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>

      </div>
    </section>
    <IntroSection />
    <FullBleedImage />
    <ServicesSection />
    <SelectedWorkSection />
    <TestimonialsSection />
    <NewsSection />
    <Footer />
    </>
  );
}
