import { useState } from "react";

type Group = "general" | "training" | "guides";

const groups: Record<Group, { q: string; a: string }[]> = {
  general: [
    {
      q: "What is QueryLock?",
      a: "QueryLock is a cybersecurity education company built on one idea: a safer internet starts with educated people, not just better tools. We close the gap between security knowledge and everyone who needs it.",
    },
    {
      q: "What does QueryLock do?",
      a: "QueryLock is a cybersecurity education company that makes security easier to understand and apply. Our guides help curious learners build confidence in technical topics, while our hands-on training helps teams prevent vulnerabilities, reduce repeat findings, and make better security decisions.",
    },
    {
      q: "Who is QueryLock for?",
      a: "QueryLock is for anyone who wants technology and security to make more sense. Our guides are built for curious learners with no prior knowledge, while our training helps developers, product teams, leaders, and organizations make better security decisions.",
    },
    {
      q: "What makes QueryLock different?",
      a: "QueryLock teaches for understanding, not completion. Our guides take readers from zero knowledge to real confidence, and our training uses your team’s systems, code, and findings to build practical knowledge that lasts beyond the session.",
    },
  ],
  training: [
    {
      q: "Is QueryLock training customized?",
      a: "Yes. You can share as much context as you are comfortable with, including your tech stack, architecture, application type, team experience level, common concerns, or a redacted pentest report. We use that context to build training that fits your environment.",
    },
    {
      q: "What kind of training do you offer?",
      a: "We offer secure coding, findings-based, AI and LLM security, and technical security training for business professionals. Every workshop focuses on real understanding and can be tailored to your team’s technology, goals, and experience.",
    },
    {
      q: "Is training only for teams that already had a pentest?",
      a: "No. QueryLock can help after a pentest, but the larger goal is prevention. We train teams to understand security earlier so they can write secure code from the start and catch risky patterns before release.",
    },
  ],
  guides: [
    {
      q: "Do I need a technical background to read the guides?",
      a: "No. Every guide starts with the foundation and assumes no prior knowledge. In about 20 minutes, you can go from curious to confidently discussing the topic.",
    },
    {
      q: "What topics do the guides cover?",
      a: "QueryLock guides cover technology and security topics such as web applications, APIs, cloud applications, databases, containers, firewalls, AI, LLMs, and secure development basics.",
    },
    {
      q: "Are the guides free?",
      a: "Some QueryLock guides are free. All paid guides cost less than $10 to keep learning accessible. Every guide is a short, focused read designed to make a technical topic understandable with no prior knowledge required.",
    },
  ],
};

const labels: Record<Group, string> = {
  general: "General",
  training: "Training",
  guides: "Guides",
};

export default function FAQ() {
  const [activeGroup, setActiveGroup] = useState<Group>("general");
  const [openIdx, setOpenIdx] = useState(0);
  const items = groups[activeGroup];

  const selectGroup = (group: Group) => {
    setActiveGroup(group);
    setOpenIdx(0);
  };

  return (
    <section className="section section-lg" id="faq">
      <div className="container">
        <div className="mx-auto mb-14 flex max-w-[760px] flex-col items-center gap-4 text-center">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="font-extrabold text-[clamp(32px,4.6vw,52px)] leading-[1.05] tracking-[-0.02em] text-balance">
            Cybersecurity should make sense.
          </h2>
          <p className="max-w-[60ch] text-[17px] leading-[1.55] text-[var(--fg-2)]">
            Here are a few of the questions people ask about QueryLock, our guides, and our
            training.
          </p>
        </div>

        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {/* Tab switcher */}
          <div
            className="mx-auto mb-7 flex w-full max-w-[430px] items-center justify-center gap-[6px] rounded-full border border-[var(--border)] bg-[var(--ql-ink-50)] p-[6px] [@media(max-width:480px)]:rounded-[18px]"
            role="tablist"
            aria-label="FAQ categories"
          >
            {(Object.keys(groups) as Group[]).map((group) => {
              const isActive = activeGroup === group;
              return (
                <button
                  key={group}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={[
                    "flex-1 rounded-full border-0 px-[18px] py-[11px]",
                    "cursor-pointer [font-family:var(--font-display)] text-sm font-bold",
                    "[transition:color_var(--dur-base)_var(--ease-out),background_var(--dur-base)_var(--ease-out),box-shadow_var(--dur-base)_var(--ease-out)]",
                    "[@media(max-width:480px)]:px-2 [@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:text-[13px]",
                    isActive
                      ? "bg-gradient-to-br from-[var(--ql-deep-purple)] to-[var(--ql-violet)] text-white shadow-[0_8px_20px_color-mix(in_srgb,var(--ql-deep-purple)_18%,transparent)]"
                      : "bg-transparent text-[var(--ql-deep-purple)] hover:bg-[color-mix(in_srgb,var(--ql-violet)_8%,transparent)]",
                  ].join(" ")}
                  onClick={() => selectGroup(group)}
                >
                  {labels[group]}
                </button>
              );
            })}
          </div>

          {/* FAQ list */}
          <div
            className="flex flex-col gap-3"
            role="tabpanel"
            aria-label={`${labels[activeGroup]} questions`}
          >
            {items.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={`${activeGroup}-${i}`}
                  className={[
                    "overflow-hidden rounded-[18px] border bg-white",
                    "[transition:border-color_var(--dur-fast)_var(--ease-out),box-shadow_var(--dur-fast)_var(--ease-out)]",
                    isOpen
                      ? "border-[var(--ql-lavender-400)] shadow-[0_8px_24px_color-mix(in_srgb,var(--ql-deep-purple)_8%,transparent)]"
                      : "border-[var(--border)]",
                  ].join(" ")}
                >
                  <button
                    className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-6 py-[22px] text-left [font-family:var(--font-display)] text-[17px] font-bold tracking-[-0.005em] text-[var(--ql-deep-purple)]"
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-full"
                      style={{
                        background: isOpen
                          ? "linear-gradient(135deg, var(--ql-violet), var(--ql-magenta))"
                          : "linear-gradient(135deg, color-mix(in srgb, var(--ql-violet) 10%, transparent), color-mix(in srgb, var(--ql-magenta) 10%, transparent))",
                        color: isOpen ? "var(--ql-white)" : "var(--ql-violet)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition:
                          "transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
                      }}
                      aria-hidden="true"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="overflow-hidden"
                    style={{
                      maxHeight: isOpen ? 600 : 0,
                      transition: "max-height 320ms cubic-bezier(0.2, 0.7, 0.2, 1)",
                    }}
                    role="region"
                  >
                    <div className="px-6 pb-[22px] text-[15px] leading-[1.6] text-[var(--fg-2)]">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
