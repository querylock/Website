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
          <div className="faq-tabs" role="tablist" aria-label="FAQ categories">
            {(Object.keys(groups) as Group[]).map(group => (
              <button
                key={group}
                type="button"
                role="tab"
                aria-selected={activeGroup === group}
                className={`faq-tab ${activeGroup === group ? 'active' : ''}`}
                onClick={() => selectGroup(group)}
              >
                {labels[group]}
              </button>
            ))}
          </div>
          <div className="faq-list" role="tabpanel" aria-label={`${labels[activeGroup]} questions`}>
            {items.map((item, i) => (
              <div key={`${activeGroup}-${i}`} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                  aria-expanded={openIdx === i}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="faq-answer" role="region">
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
