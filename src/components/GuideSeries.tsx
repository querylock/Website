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
    <article className={`series-card ${s.featured ? 'featured' : ''}`}>
      <div className="head">
        <div className="glyph"><SeriesGlyph category={s.category} /></div>
        <div className="pills" style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end' }}>
          {s.featured && <span className="pill pill-magenta-soft">★ {s.tag}</span>}
          {!s.featured && <span className="pill pill-soft">{s.tag}</span>}
          {!isPaidOnly && <span className="pill pill-free">Free starter</span>}
        </div>
      </div>
      <h3>{s.title}</h3>
      <p className="blurb">{s.blurb}</p>
      <div className="meta-row">
        <div>
          <span className="bundle-label">Bundle</span>
          <span className="bundle-price">${s.bundle}</span>
        </div>
        <div className="count" style={{ textAlign: 'right' }}>
          {s.count} guides<br />
          <span style={{ color: 'var(--fg-3)', fontSize: 12 }}>${s.pricePer} each</span>
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
          <div className="series-filters">
            {filters.map(f => (
              <button
                key={f.id}
                className={`series-filter ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label} <span className="count">{f.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="series-grid">
          {visible.map(s => <SeriesCard key={s.id} s={s} />)}
        </div>

        <div className="bundle-callout">
          <div className="bundle-callout-text">
            <span className="eyebrow no-dot">Cross-series bundle</span>
            <h3>Complete AI Bundle</h3>
            <p>AI Models Explained + AI in Practice + Securing AI. The full 23-guide AI track for builders who want depth in one purchase.</p>
          </div>
          <div className="bundle-callout-price">
            <div className="bundle-price-strike">$180 individual</div>
            <div className="bundle-price-final">$145</div>
            <div className="bundle-price-saves">Save $35</div>
            <a href="#" className="btn btn-accent">Get the bundle</a>
          </div>
        </div>
      </div>
    </section>
  );
}
