import { useState } from 'react';

type Group = 'general' | 'training' | 'guides';

const groups: Record<Group, { q: string; a: string }[]> = {
  general: [
    { q: 'What is QueryLock?', a: 'QueryLock is a cybersecurity education company built on one idea: a safer internet starts with educated people, not just better tools. We close the gap between security knowledge and everyone who needs it.' },
    { q: 'What does QueryLock do?', a: 'QueryLock teaches cybersecurity through practical guides and hands-on training. We help curious learners understand security concepts, and we help teams write secure code, catch risks sooner, and make better security decisions.' },
    { q: 'Who is QueryLock for?', a: 'QueryLock is for anyone who wants cybersecurity to make more sense. That includes beginners, developers, security teams, product teams, and companies that want to lower risk before issues reach production.' },
    { q: 'What makes QueryLock different?', a: "QueryLock is education first. We do not assume you already have background knowledge, and we do not teach just to check a box. Our guides start with the foundation, and our training is tailored to your team's real stack, systems, and goals." },
  ],
  training: [
    { q: 'Is QueryLock training customized?', a: 'Yes. You can share as much context as you are comfortable with, including your tech stack, architecture, application type, team experience level, common concerns, or a redacted pentest report. We use that context to build training that fits your environment.' },
    { q: 'What kind of training do you offer?', a: 'QueryLock offers secure coding training, findings-based training, AI and LLM security training, and security training for product and leadership teams. Secure code review and secure development lifecycle topics can be added to secure coding training.' },
    { q: 'Is training only for teams that already had a pentest?', a: 'No. QueryLock can help after a pentest, but the larger goal is prevention. We train teams to understand security earlier so they can write secure code from the start and catch risky patterns before release.' },
  ],
  guides: [
    { q: 'Do I need a technical background to read the guides?', a: 'No. QueryLock guides are built for people who want to learn a topic from the beginning. They explain the foundation first, then connect it to real security concepts.' },
    { q: 'What topics do the guides cover?', a: 'QueryLock guides cover technology and security topics such as web applications, APIs, cloud applications, databases, containers, firewalls, AI, LLMs, and secure development basics.' },
    { q: 'Are the guides free?', a: 'Some starter resources are free. Paid guides are available for readers who want to go deeper into a topic.' },
  ],
};

const labels: Record<Group, string> = { general: 'General', training: 'Training', guides: 'Guides' };

export default function FAQ() {
  const [activeGroup, setActiveGroup] = useState<Group>('general');
  const [openIdx, setOpenIdx] = useState(0);
  const items = groups[activeGroup];

  const selectGroup = (group: Group) => {
    setActiveGroup(group);
    setOpenIdx(0);
  };

  return (
    <section className="section section-lg" id="faq">
      <div className="container">
        <div className="section-head-c">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2>Cybersecurity should make sense.</h2>
          <p>Here are a few of the questions people ask about QueryLock, our guides, and our training.</p>
        </div>

        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          {/* Tab switcher */}
          <div
            className="flex items-center justify-center gap-[6px] w-full max-w-[430px] mx-auto mb-7 p-[6px] border border-[var(--border)] rounded-full bg-[var(--ql-ink-50)] [@media(max-width:480px)]:rounded-[18px]"
            role="tablist"
            aria-label="FAQ categories"
          >
            {(Object.keys(groups) as Group[]).map(group => {
              const isActive = activeGroup === group;
              return (
                <button
                  key={group}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={[
                    'flex-1 border-0 rounded-full py-[11px] px-[18px]',
                    '[font-family:var(--font-display)] text-sm font-bold cursor-pointer',
                    '[transition:color_var(--dur-base)_var(--ease-out),background_var(--dur-base)_var(--ease-out),box-shadow_var(--dur-base)_var(--ease-out)]',
                    '[@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:px-2 [@media(max-width:480px)]:text-[13px]',
                    isActive
                      ? 'text-white bg-gradient-to-br from-[var(--ql-deep-purple)] to-[var(--ql-violet)] shadow-[0_8px_20px_color-mix(in_srgb,var(--ql-deep-purple)_18%,transparent)]'
                      : 'bg-transparent text-[var(--ql-deep-purple)] hover:bg-[color-mix(in_srgb,var(--ql-violet)_8%,transparent)]',
                  ].join(' ')}
                  onClick={() => selectGroup(group)}
                >
                  {labels[group]}
                </button>
              );
            })}
          </div>

          {/* FAQ list */}
          <div className="flex flex-col gap-3" role="tabpanel" aria-label={`${labels[activeGroup]} questions`}>
            {items.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={`${activeGroup}-${i}`}
                  className={[
                    'bg-white border rounded-[18px] overflow-hidden',
                    '[transition:border-color_var(--dur-fast)_var(--ease-out),box-shadow_var(--dur-fast)_var(--ease-out)]',
                    isOpen
                      ? 'border-[var(--ql-lavender-400)] shadow-[0_8px_24px_color-mix(in_srgb,var(--ql-deep-purple)_8%,transparent)]'
                      : 'border-[var(--border)]',
                  ].join(' ')}
                >
                  <button
                    className="w-full text-left py-[22px] px-6 flex items-center justify-between gap-4 [font-family:var(--font-display)] font-bold text-[17px] text-[var(--ql-deep-purple)] tracking-[-0.005em] bg-transparent cursor-pointer"
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-none"
                      style={{
                        background: isOpen
                          ? 'linear-gradient(135deg, var(--ql-violet), var(--ql-magenta))'
                          : 'linear-gradient(135deg, color-mix(in srgb, var(--ql-violet) 10%, transparent), color-mix(in srgb, var(--ql-magenta) 10%, transparent))',
                        color: isOpen ? 'var(--ql-white)' : 'var(--ql-violet)',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
                      }}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="overflow-hidden"
                    style={{ maxHeight: isOpen ? 600 : 0, transition: 'max-height 320ms cubic-bezier(0.2, 0.7, 0.2, 1)' }}
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
