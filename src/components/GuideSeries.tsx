import { useState } from 'react';
import { series, type Series } from '../data/content';

type Category = 'all' | 'fundamentals' | 'ai' | 'securing';

function SeriesGlyph({ category }: { category: Series['category'] }) {
  if (category === 'fundamentals') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 4v16" />
      </svg>
    );
  }
  if (category === 'ai') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 7l3 4M17 7l-3 4M7 17l3-4M17 17l-3-4" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function SeriesCard({ s }: { s: Series }) {
  const isPaidOnly = s.free === 0;
  return (
    <article
      className={[
        'border rounded-[20px] p-6 flex flex-col gap-[14px] relative overflow-hidden',
        '[transition:transform_var(--dur-base)_var(--ease-out),box-shadow_var(--dur-base)_var(--ease-out),border-color_var(--dur-base)_var(--ease-out)]',
        'hover:-translate-y-[3px] hover:shadow-[0_20px_48px_color-mix(in_srgb,var(--ql-deep-purple)_12%,transparent)] hover:border-[var(--ql-lavender-400)]',
        s.featured
          ? '[background:linear-gradient(180deg,var(--ql-magenta-tint)_0%,var(--ql-white)_70%)] border-[var(--ql-lavender-400)]'
          : 'bg-white border-[var(--border)]',
      ].join(' ')}
    >
      <div className="flex justify-between items-start gap-3">
        <div
          className="w-11 h-11 rounded-[12px] flex items-center justify-center flex-none"
          style={{
            background: s.featured
              ? 'linear-gradient(135deg, var(--ql-violet) 0%, var(--ql-magenta) 100%)'
              : 'linear-gradient(135deg, color-mix(in srgb, var(--ql-violet) 10%, transparent) 0%, color-mix(in srgb, var(--ql-magenta) 10%, transparent) 100%)',
            color: s.featured ? 'var(--ql-white)' : 'var(--ql-violet)',
          }}
        >
          <SeriesGlyph category={s.category} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end' }}>
          {s.featured && <span className="pill pill-magenta-soft">★ {s.tag}</span>}
          {!s.featured && <span className="pill pill-soft">{s.tag}</span>}
          {!isPaidOnly && <span className="pill pill-free">Free starter</span>}
        </div>
      </div>

      <h3 className="font-extrabold text-[20px] tracking-[-0.01em] leading-[1.15] m-0">{s.title}</h3>
      <p className="text-[14px] leading-[1.5] text-[var(--fg-2)] m-0">{s.blurb}</p>

      <div className="flex items-end justify-between gap-3 mt-auto pt-[14px] border-t border-[var(--ql-ink-100)]">
        <div>
          <span className="block text-[11px] uppercase tracking-[0.1em] text-[var(--fg-3)]">Bundle</span>
          <span className="[font-family:var(--font-display)] font-extrabold text-[24px] tracking-[-0.02em] text-[var(--ql-deep-purple)]">
            ${s.bundle}
          </span>
        </div>
        <div className="text-[13px] text-[var(--fg-3)] text-right">
          {s.count} guides<br />
          <span className="text-[12px]">${s.pricePer} each</span>
        </div>
      </div>
    </article>
  );
}

export default function GuideSeries() {
  const [filter, setFilter] = useState<Category>('all');

  const filters: { id: Category; label: string; count: number }[] = [
    { id: 'all', label: 'All series', count: series.length },
    { id: 'fundamentals', label: 'Fundamentals', count: series.filter(s => s.category === 'fundamentals').length },
    { id: 'ai', label: 'AI', count: series.filter(s => s.category === 'ai').length },
    { id: 'securing', label: 'Securing', count: series.filter(s => s.category === 'securing').length },
  ];

  const visible = filter === 'all' ? series : series.filter(s => s.category === filter);

  return (
    <section className="section section-lg" id="guides">
      <div className="container">
        <div className="section-head-c">
          <span className="eyebrow">The guide catalog</span>
          <h2>Eight series. <span className="gradient-text">Fifty-eight</span> guides.</h2>
          <p>None of them &ldquo;leveraging cutting-edge.&rdquo; Bundles save 20&ndash;30% over per-guide pricing. Five starters are free.</p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {filters.map(f => {
              const isActive = filter === f.id;
              return (
                <button
                  key={f.id}
                  className={[
                    'rounded-full py-2 pl-4 pr-[14px] [font-family:var(--font-display)] font-semibold text-[13px]',
                    'inline-flex items-center gap-2 cursor-pointer border',
                    '[transition:background_var(--dur-fast)_var(--ease-out),color_var(--dur-fast)_var(--ease-out),border-color_var(--dur-fast)_var(--ease-out)]',
                    isActive
                      ? 'bg-gradient-to-br from-[var(--ql-deep-purple)] to-[var(--ql-violet)] text-white border-transparent'
                      : 'bg-white text-[var(--fg-1)] border-[var(--border)] hover:border-[var(--ql-violet)] hover:text-[var(--ql-violet)]',
                  ].join(' ')}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                  <span
                    className={[
                      'font-medium text-[11px] px-[7px] py-[2px] rounded-full leading-[1.4]',
                      isActive ? 'bg-white/[0.18] text-white' : 'bg-[var(--ql-ink-100)] text-[var(--fg-2)]',
                    ].join(' ')}
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Series grid */}
        <div className="grid grid-cols-1 gap-4 [@media(min-width:720px)]:grid-cols-2 [@media(min-width:720px)]:gap-5 [@media(min-width:1100px)]:grid-cols-4">
          {visible.map(s => <SeriesCard key={s.id} s={s} />)}
        </div>

        {/* Bundle callout */}
        <div className="mt-10 text-white rounded-[28px] p-9 px-8 grid grid-cols-1 gap-7 items-center relative overflow-hidden [@media(min-width:880px)]:grid-cols-[1.6fr_1fr] [@media(min-width:880px)]:py-12 [@media(min-width:880px)]:px-14"
          style={{ background: 'linear-gradient(135deg, var(--ql-deep-purple) 0%, var(--ql-purple-700) 50%, var(--ql-violet) 100%)' }}
        >
          {/* decorative orb */}
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 w-[260px] h-[260px] pointer-events-none rounded-full"
            style={{ background: 'radial-gradient(circle at center, color-mix(in srgb, var(--ql-magenta) 45%, transparent), transparent 65%)' }}
          />

          <div className="relative">
            <span className="eyebrow text-[var(--ql-lavender-200)]">Cross-series bundle</span>
            <h3 className="font-extrabold text-[30px] tracking-[-0.015em] mt-3 mb-2 text-white">Complete AI Bundle</h3>
            <p className="text-[15px] leading-[1.55] text-white/[0.78] max-w-[52ch]">
              AI Models Explained + AI in Practice + Securing AI. The full 23-guide AI track for builders who want depth in one purchase.
            </p>
          </div>

          <div className="flex flex-col items-start gap-1 relative [@media(min-width:880px)]:items-end [@media(min-width:880px)]:text-right">
            <span className="text-[14px] text-white/[0.55] line-through">$180 individual</span>
            <span
              className="[font-family:var(--font-display)] font-extrabold text-[64px] tracking-[-0.03em] leading-none"
              style={{
                background: 'linear-gradient(135deg, var(--ql-white) 0%, var(--ql-lavender-200) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              $145
            </span>
            <span className="[font-family:var(--font-display)] font-bold text-[13px] tracking-[0.06em] uppercase text-[var(--ql-magenta)] mb-4">
              Save $35
            </span>
            <a href="#" className="btn btn-accent">Get the bundle</a>
          </div>
        </div>
      </div>
    </section>
  );
}
