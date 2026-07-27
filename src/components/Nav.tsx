import { useState } from 'react';

interface NavProps {
  active?: 'home' | 'training' | 'learning' | 'about';
}

const linkBase = [
  '[font-family:var(--font-display)] font-semibold text-sm no-underline tracking-[0.01em]',
  '[transition:color_var(--dur-fast)_var(--ease-out)] hover:text-[var(--ql-violet)]',
].join(' ');

const mobileLink = [
  '[font-family:var(--font-display)] font-semibold text-base text-[var(--fg-1)] no-underline',
  'py-3 border-b border-[var(--ql-ink-100)] last:border-b-0',
].join(' ');

export default function Nav({ active = 'home' }: NavProps) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 'training', label: 'Training', href: '/training' },
    { id: 'learning', label: 'Learning', href: '/learning' },
    { id: 'about', label: 'About', href: '/about' },
  ];

  return (
    <div className="sticky top-0 z-50 [background:rgba(255,255,255,0.82)] [backdrop-filter:saturate(160%)_blur(12px)] [-webkit-backdrop-filter:saturate(160%)_blur(12px)] border-b [border-color:color-mix(in_srgb,var(--ql-ink-200)_60%,transparent)]">
      <div className="container">
        <nav className="flex items-center justify-between h-[72px]">
          <a href="/" className="flex items-center gap-[10px] no-underline" aria-label="QueryLock home">
            <img
              src="/assets/querylock-horizontal-light.jpg"
              alt="QueryLock"
              style={{ height: 44, width: 'auto', mixBlendMode: 'multiply' }}
            />
          </a>

          <div className="flex items-center gap-7">
            <div className="hidden nav:flex gap-7 items-center">
              {links.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`${linkBase} ${link.id === active ? 'text-[var(--ql-violet)]' : 'text-[var(--fg-1)]'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a href="/training#contact" className="btn btn-primary py-[10px] px-5 text-[13px]">
                Schedule training
              </a>
              <button
                className="nav:hidden inline-flex items-center justify-center w-10 h-10 border border-[var(--border)] rounded-full bg-white text-[var(--fg-1)]"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                {open
                  ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
                  : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
                }
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={open ? 'flex flex-col px-5 pt-4 pb-6 border-b border-[var(--border)] bg-white' : 'hidden'}
        role="menu"
      >
        {links.map(link => (
          <a key={link.id} href={link.href} onClick={() => setOpen(false)} className={mobileLink}>
            {link.label}
          </a>
        ))}
        <a
          href="/training#contact"
          onClick={() => setOpen(false)}
          className="[font-family:var(--font-display)] font-semibold text-base text-[var(--fg-1)] no-underline py-3"
        >
          Schedule training
        </a>
      </div>
    </div>
  );
}
