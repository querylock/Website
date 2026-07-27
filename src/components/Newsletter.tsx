import { useState, type FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.includes('@')) setDone(true);
  };

  return (
    <section className="py-16 md:py-24" id="newsletter">
      <div className="container">
        <div
          className="rounded-[32px] p-10 px-8 relative overflow-hidden text-white [@media(min-width:880px)]:py-14 [@media(min-width:880px)]:px-16"
          style={{ background: 'linear-gradient(135deg, var(--ql-deep-purple) 0%, var(--ql-purple-600) 50%, var(--ql-violet) 100%)' }}
        >
          {/* Decorative orbs replacing ::before / ::after */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 w-[320px] h-[320px] pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, color-mix(in srgb, var(--ql-magenta) 55%, transparent), transparent 60%)' }}
          />
          <div
            aria-hidden="true"
            className="absolute -left-20 -bottom-[120px] w-[280px] h-[280px] pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, color-mix(in srgb, var(--ql-violet) 50%, transparent), transparent 60%)' }}
          />

          <div className="relative grid grid-cols-1 gap-8 items-center [@media(min-width:880px)]:grid-cols-[1.05fr_1fr] [@media(min-width:880px)]:gap-14">
            <div>
              <span className="eyebrow text-[var(--ql-magenta)] mb-3">QueryLock Insider</span>
              <h2 className="font-extrabold text-[clamp(28px,3.6vw,40px)] tracking-[-0.02em] leading-[1.1] mt-0 mb-3 text-white">
                Join the QueryLock Insider Newsletter
              </h2>
              <p className="text-base leading-[1.55] text-white/[0.82] m-0 max-w-[44ch]">
                Get alerted when new guides or offerings become available.
              </p>
            </div>

            {done
              ? (
                <div className="bg-white/[0.14] border border-white/[0.28] p-[18px] px-[22px] rounded-[14px] [font-family:var(--font-display)] font-bold text-white flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l3 3 5-6" />
                  </svg>
                  You&rsquo;re on the list.
                </div>
              )
              : (
                <form
                  className="flex flex-col gap-[14px] bg-white/[0.08] border border-white/[0.16] rounded-[22px] p-5 [backdrop-filter:blur(8px)]"
                  onSubmit={onSubmit}
                >
                  <label
                    htmlFor="newsletter-email"
                    className="[font-family:var(--font-display)] font-bold text-[11px] tracking-[0.14em] uppercase text-white/[0.7]"
                  >
                    Email
                  </label>
                  <div className="flex gap-[10px] items-stretch">
                    <input
                      id="newsletter-email"
                      type="email"
                      placeholder="Enter your email here"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      className="flex-1 min-w-0 bg-white border-none rounded-[14px] py-[14px] px-[18px] [font-family:var(--font-body)] text-[15px] text-[var(--ql-deep-purple)] focus:outline-none focus:shadow-[0_0_0_3px_var(--ql-magenta)]"
                    />
                    <button type="submit" className="btn btn-on-dark">Join the Newsletter</button>
                  </div>
                </form>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}
