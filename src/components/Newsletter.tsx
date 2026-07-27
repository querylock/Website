import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.includes("@")) setDone(true);
  };

  return (
    <section className="py-16 md:py-24" id="newsletter">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-[32px] p-10 px-8 text-white [@media(min-width:880px)]:px-16 [@media(min-width:880px)]:py-14"
          style={{
            background:
              "linear-gradient(135deg, var(--ql-deep-purple) 0%, var(--ql-purple-600) 50%, var(--ql-violet) 100%)",
          }}
        >
          {/* Decorative orbs replacing ::before / ::after */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 h-[320px] w-[320px]"
            style={{
              background:
                "radial-gradient(circle at center, color-mix(in srgb, var(--ql-magenta) 55%, transparent), transparent 60%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[120px] -left-20 h-[280px] w-[280px]"
            style={{
              background:
                "radial-gradient(circle at center, color-mix(in srgb, var(--ql-violet) 50%, transparent), transparent 60%)",
            }}
          />

          <div className="relative grid grid-cols-1 items-center gap-8 [@media(min-width:880px)]:grid-cols-[1.05fr_1fr] [@media(min-width:880px)]:gap-14">
            <div>
              <span className="eyebrow mb-3 text-[var(--ql-magenta)]">QueryLock Insider</span>
              <h2 className="mt-0 mb-3 text-[clamp(28px,3.6vw,40px)] leading-[1.1] font-extrabold tracking-[-0.02em] text-white">
                Join the QueryLock Insider Newsletter
              </h2>
              <p className="m-0 max-w-[44ch] text-base leading-[1.55] text-white/[0.82]">
                Get alerted when new guides or offerings become available.
              </p>
            </div>

            {done ? (
              <div className="flex items-center gap-3 rounded-[14px] border border-white/[0.28] bg-white/[0.14] p-[18px] px-[22px] [font-family:var(--font-display)] font-bold text-white">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
                You&rsquo;re on the list.
              </div>
            ) : (
              <form
                className="flex flex-col gap-[14px] rounded-[22px] border border-white/[0.16] bg-white/[0.08] p-5 [backdrop-filter:blur(8px)]"
                onSubmit={onSubmit}
              >
                <label
                  htmlFor="newsletter-email"
                  className="[font-family:var(--font-display)] text-[11px] font-bold tracking-[0.14em] text-white/[0.7] uppercase"
                >
                  Email
                </label>
                <div className="flex items-stretch gap-[10px]">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="min-w-0 flex-1 rounded-[14px] border-none bg-white px-[18px] py-[14px] [font-family:var(--font-body)] text-[15px] text-[var(--ql-deep-purple)] focus:shadow-[0_0_0_3px_var(--ql-magenta)] focus:outline-none"
                  />
                  <button type="submit" className="btn btn-on-dark">
                    Join the Newsletter
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
