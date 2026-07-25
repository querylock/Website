export interface Series {
  id: string;
  title: string;
  blurb: string;
  count: number;
  paid: number;
  free: number;
  pricePer: number;
  bundle: number;
  category: 'fundamentals' | 'ai' | 'securing';
  featured: boolean;
  tag: string;
}

export interface FreeResource {
  id: string;
  title: string;
  kind: 'Guide' | 'Checklist';
}

export interface Training {
  id: string;
  title: string;
  desc: string;
  audience: string;
  priceLabel: string;
  priceUnit: string;
  priceFootnote: string;
}

export const series: Series[] = [
  {
    id: 'how-things-work',
    title: 'How Things Work',
    blurb: 'The fundamentals. APIs, databases, the cloud, LLMs — explained the way you wish someone had explained them in the first place.',
    count: 7, paid: 6, free: 1, pricePer: 5, bundle: 25,
    category: 'fundamentals', featured: false, tag: 'Foundational',
  },
  {
    id: 'how-things-work-cyber',
    title: 'How Things Work: Cyber Edition',
    blurb: 'Hackers, social engineering, supply chain attacks, password cracking. The threat landscape, demystified.',
    count: 7, paid: 7, free: 0, pricePer: 5, bundle: 30,
    category: 'fundamentals', featured: false, tag: 'Threat landscape',
  },
  {
    id: 'ai-models-explained',
    title: 'AI Models Explained',
    blurb: 'Rule-based, trees, neural nets, CNNs, transformers, RL. The model zoo without the math PhD.',
    count: 6, paid: 6, free: 0, pricePer: 5, bundle: 25,
    category: 'ai', featured: false, tag: 'AI foundations',
  },
  {
    id: 'ai-in-practice',
    title: 'AI in Practice',
    blurb: 'Choosing the right model for the job — recognition, prediction, generation, automation. With concrete examples.',
    count: 6, paid: 6, free: 0, pricePer: 5, bundle: 25,
    category: 'ai', featured: false, tag: 'AI applied',
  },
  {
    id: 'securing-ai',
    title: 'Securing AI',
    blurb: 'Prompt injection, jailbreaking, data poisoning, RAG attacks, agent attacks. Plus a practical defense playbook.',
    count: 9, paid: 8, free: 1, pricePer: 15, bundle: 100,
    category: 'securing', featured: true, tag: 'Most popular',
  },
  {
    id: 'securing-web',
    title: 'Securing Web Applications',
    blurb: 'Injection, XSS, CSRF, broken access, business logic, SSRF. The OWASP top hits — and how to actually fix them.',
    count: 10, paid: 9, free: 1, pricePer: 15, bundle: 110,
    category: 'securing', featured: false, tag: 'Developer favorite',
  },
  {
    id: 'securing-apis',
    title: 'Securing APIs',
    blurb: 'Broken object authorization, auth/authn, rate limiting, misconfig, sensitive data exposure. Plus a defense guide.',
    count: 7, paid: 6, free: 1, pricePer: 15, bundle: 75,
    category: 'securing', featured: false, tag: 'For backend teams',
  },
  {
    id: 'securing-cloud',
    title: 'Securing the Cloud',
    blurb: 'Attacking and defending AWS, Azure, and GCP. Common cloud attack vectors and the practical fixes for each.',
    count: 7, paid: 6, free: 1, pricePer: 15, bundle: 75,
    category: 'securing', featured: false, tag: 'Multi-cloud',
  },
];

export const freeResources: FreeResource[] = [
  { id: 'llm', title: 'How a Large Language Model Works', kind: 'Guide' },
  { id: 'ai-check', title: 'Is Your AI Secure? A Beginner’s Checklist', kind: 'Checklist' },
  { id: 'web-check', title: 'Is Your Web Application Secure? A Beginner’s Checklist', kind: 'Checklist' },
  { id: 'api-check', title: 'Is Your API Secure? A Beginner’s Checklist', kind: 'Checklist' },
  { id: 'cloud-check', title: 'Is Your Cloud Secure? A Beginner’s Checklist', kind: 'Checklist' },
];

export const training: Training[] = [
  {
    id: 'live-virtual',
    title: 'Live virtual workshop',
    desc: 'Open enrollment. Anyone can attend. Real instructors, real Q&A, no recordings to scroll past at 2x.',
    audience: 'Individuals & small teams',
    priceLabel: '$79',
    priceUnit: '/ seat (half-day)',
    priceFootnote: 'Full day $149. Early bird saves $20.',
  },
  {
    id: 'private-virtual',
    title: 'Private virtual team training',
    desc: 'Book it for your team. Up to 15 people. Tailored to the stack and findings you actually have.',
    audience: 'Teams of 5–30',
    priceLabel: '$1,500',
    priceUnit: 'flat (half-day)',
    priceFootnote: 'Full day $2,500. Add‑ons $75/person past 15.',
  },
  {
    id: 'onsite',
    title: 'Onsite team training',
    desc: 'We come to your office for the deep version. Hands-on labs, whiteboard sessions, real conversations.',
    audience: 'Whole engineering orgs',
    priceLabel: '$2,500',
    priceUnit: '+ travel (half-day)',
    priceFootnote: 'Full day $4,000 + travel.',
  },
];
