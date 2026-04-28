"use client";

import { useState } from "react";

const links = ["About", "Services", "Projects", "News", "Contact"];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative flex items-center justify-between py-6 px-4 md:px-8 shrink-0">
        <span className="font-semibold text-base tracking-[-0.04em] capitalize text-black">
          H.Studio
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-14 font-semibold text-base tracking-[-0.04em] capitalize text-black">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-60 transition-opacity">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center bg-black text-white text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full"
        >
          Let&apos;s talk
        </a>
      </nav>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col px-6 py-6">
          <div className="flex items-center justify-between shrink-0">
            <span className="font-semibold text-base tracking-[-0.04em] capitalize text-white">
              H.Studio
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col flex-1 justify-center gap-10">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-5xl font-semibold tracking-[-0.04em] capitalize"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="flex items-center justify-center border border-white text-white text-sm font-medium tracking-[-0.035em] px-4 py-4 rounded-full"
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </>
  );
}
