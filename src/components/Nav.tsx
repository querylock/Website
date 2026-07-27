import { useState } from "react";

interface NavProps {
  active?: "home" | "training" | "learning" | "about";
}

const linkBase = [
  "[font-family:var(--font-display)] font-semibold text-sm no-underline tracking-[0.01em]",
  "[transition:color_var(--dur-fast)_var(--ease-out)] hover:text-[var(--ql-violet)]",
].join(" ");

const mobileLink = [
  "[font-family:var(--font-display)] font-semibold text-base text-[var(--fg-1)] no-underline",
  "py-3 border-b border-[var(--ql-ink-100)] last:border-b-0",
].join(" ");

export default function Nav({ active = "home" }: NavProps) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "training", label: "Training", href: "/training" },
    { id: "learning", label: "Learning", href: "/learning" },
    { id: "about", label: "About", href: "/about" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b [border-color:color-mix(in_srgb,var(--ql-ink-200)_60%,transparent)] [backdrop-filter:saturate(160%)_blur(12px)] [-webkit-backdrop-filter:saturate(160%)_blur(12px)] [background:rgba(255,255,255,0.82)]">
      <div className="container">
        <nav className="flex h-[72px] items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-[10px] no-underline"
            aria-label="QueryLock home"
          >
            <img
              src="/assets/querylock-transparent.png"
              alt="QueryLock"
              style={{ height: 56, width: "auto" }}
            />
          </a>

          <div className="flex items-center gap-7">
            <div className="nav:flex hidden items-center gap-7">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`${linkBase} ${link.id === active ? "text-[var(--ql-violet)]" : "text-[var(--fg-1)]"}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a href="/training#contact" className="nav:inline-flex hidden btn btn-primary px-5 py-[10px] text-[13px]">
                Schedule training
              </a>
              <button
                className="nav:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--fg-1)]"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={
          open ? "flex flex-col border-b border-[var(--border)] bg-white px-5 pt-4 pb-6" : "hidden"
        }
        role="menu"
      >
        {links.map((link) => (
          <a key={link.id} href={link.href} onClick={() => setOpen(false)} className={mobileLink}>
            {link.label}
          </a>
        ))}
        <a
          href="/training#contact"
          onClick={() => setOpen(false)}
          className="py-3 [font-family:var(--font-display)] text-base font-semibold text-[var(--fg-1)] no-underline"
        >
          Schedule training
        </a>
      </div>
    </div>
  );
}
