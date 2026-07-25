import { useState } from 'react';

interface NavProps {
  active?: 'home' | 'training' | 'learning' | 'about';
}

export default function Nav({ active = 'home' }: NavProps) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 'training', label: 'Training', href: '/training' },
    { id: 'learning', label: 'Learning', href: '/learning' },
    { id: 'about', label: 'About', href: '/about' },
  ];

  return (
    <div className="nav-wrap">
      <div className="container">
        <nav className="nav">
          <div className="nav-left">
            <a href="/" className="nav-logo" aria-label="QueryLock home">
              <img src="/assets/querylock-horizontal-light.jpg" alt="QueryLock" style={{ height: 44, width: 'auto', mixBlendMode: 'multiply' }} />
            </a>
          </div>
          <div className="nav-right">
            <div className="nav-links">
              {links.map(link => (
                <a key={link.id} href={link.href} className={link.id === active ? 'active' : ''}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="nav-cta">
              <a href="/training#contact" className="btn btn-primary">Schedule training</a>
              <button
                className="menu-btn"
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
      <div className={`mobile-menu ${open ? 'open' : ''}`} role="menu">
        {links.map(link => (
          <a key={link.id} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
        <a href="/training#contact" onClick={() => setOpen(false)}>Schedule training</a>
      </div>
    </div>
  );
}
