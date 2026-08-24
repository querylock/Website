export interface GuideLanding {
  slug: string;
  name: string;
  eyebrow: string;
  metaDescription: string;
  gumroadUrl: string;
  thumbnailUrl: string;
  priceCents: number;
  isPWYW: boolean;
  readMinutes: number;
  intro: string[];
  whatYoullLearn: string[];
  whoThisIsFor: string;
  faq: { q: string; a: string }[];
}

export const guides: GuideLanding[] = [
  {
    slug: "llm",
    name: "How a Large Language Model (LLM) Works",
    eyebrow: "AI Fundamentals",
    metaDescription:
      "A plain-language guide to what happens between your prompt and an AI's response: tokens, self-attention, transformers, and prompt injection explained without the math.",
    gumroadUrl: "https://shop.querylock.com/l/LLM",
    thumbnailUrl: "https://public-files.gumroad.com/xgklvv46jpcronfg74jye9serc8k",
    priceCents: 0,
    isPWYW: true,
    readMinutes: 12,
    intro: [
      "Every time you type a question into ChatGPT, Claude, or any other AI assistant, a lot happens between hitting enter and seeing a reply appear on your screen. This guide breaks down that process in plain English, no math background or computer science degree required.",
      "You'll walk through what a large language model actually is, how it turns your words into something it can process, and why it sometimes states wrong answers with total confidence. Along the way, the guide introduces the vocabulary that shows up constantly in AI conversations, including tokens, self-attention, and transformers, and explains what each one actually means in practice, not just in theory.",
      "Understanding how LLMs work isn't just interesting trivia. It's the foundation for using AI tools more effectively and for recognizing when something's gone wrong, including prompt injection, one of the most common ways attackers are targeting AI systems today.",
    ],
    whatYoullLearn: [
      "What actually happens between sending a prompt and receiving an AI-generated response",
      "Why language models can sound completely confident even when they're wrong",
      "What tokens, self-attention, and transformers mean, and how they fit together",
      "How prompt injection attacks exploit the way LLMs process input",
    ],
    whoThisIsFor:
      "Anyone who uses AI tools regularly, such as ChatGPT, Claude, or Copilot, and wants to understand what's actually happening under the hood. No prior technical or programming background needed.",
    faq: [
      {
        q: "Do I need to know how to code to understand this guide?",
        a: "No. The guide is written for curious readers with zero technical background. The only requirement is curiosity.",
      },
      {
        q: "Is this guide about how to build an LLM?",
        a: "No. It's about how existing large language models process your input and generate a response, explained through analogies and examples rather than math or code.",
      },
      {
        q: "How long does it take to read?",
        a: "About 15 minutes for enough understanding to hold a real conversation about how modern AI actually works.",
      },
    ],
  },
  {
    slug: "internet",
    name: "How the Internet Works",
    eyebrow: "Fundamentals",
    metaDescription:
      "How your data actually travels from your device to a website and back: DNS, packets, routers, and encryption explained through everyday examples, not diagrams.",
    gumroadUrl: "https://shop.querylock.com/l/internet",
    thumbnailUrl: "https://public-files.gumroad.com/zimgzhzt2n76806pfx8padnioek0",
    priceCents: 999,
    isPWYW: false,
    readMinutes: 10,
    intro: [
      "Every time you open a browser and type in a web address, your request travels across cables, satellites, and routers scattered around the planet, and somehow comes back with the right page in a couple of seconds. This guide walks through exactly how that happens, from your device to the destination server and back.",
      "You'll learn how your computer finds the right website in the first place, why data gets broken into small packets before it travels, how routers pass those packets along without ever seeing the full picture, and what's actually protecting your information while it's in transit. Every concept is explained through practical, everyday examples instead of network diagrams and acronyms.",
      "The internet is the backbone of nearly everything digital, from email to banking to streaming video. Understanding the basics of how it moves your data isn't just satisfying curiosity. It's the first step toward understanding how that data can be intercepted, and why the protections built into the system matter.",
    ],
    whatYoullLearn: [
      "How your device locates a website using DNS",
      "Why data is split into packets before it travels, and how those packets find their way back together",
      "How routers move information across the globe without needing to understand it",
      "What keeps the internet reliable even when individual parts of it fail",
      "How encryption protects your data while it's traveling, and where the real risks are",
    ],
    whoThisIsFor:
      "Anyone who uses the internet daily (so, everyone) and has ever wondered what's actually happening behind that loading spinner. No networking background required.",
    faq: [
      {
        q: "Is this a networking certification study guide?",
        a: "No. It's written for everyday curiosity, not certification prep. You won't need to memorize OSI layers or configure a router.",
      },
      {
        q: "Will this help me understand things like VPNs or Wi-Fi security?",
        a: "Yes. Once you understand how data actually travels across the internet, concepts like VPNs, encryption, and Wi-Fi security make a lot more sense.",
      },
      {
        q: "How technical does it get?",
        a: "Not very. Every concept is explained with real-world analogies first, technical terms second.",
      },
    ],
  },
  {
    slug: "webapps",
    name: "How Web Applications Work",
    eyebrow: "Fundamentals",
    metaDescription:
      "What actually happens between pressing enter and a webpage loading: servers, requests, TLS, and how that same process gets exploited by attacks like XSS and SQL injection.",
    gumroadUrl: "https://shop.querylock.com/l/webapps",
    thumbnailUrl: "https://public-files.gumroad.com/3y46c2p162lyl4w9c2imx9taotrn",
    priceCents: 999,
    isPWYW: false,
    readMinutes: 12,
    intro: [
      "You visit dozens of websites a day without thinking twice about what happens after you hit enter. This guide pulls back the curtain on that split-second process: everything that happens between your browser sending a request and a fully loaded page appearing on your screen.",
      "You'll learn how your browser finds and talks to a server, how that server pulls information from a database and assembles it into a page, and how a single application can serve that experience to millions of people at once without breaking a sweat. The guide also covers what that little lock icon in your address bar is actually protecting, since it comes up in almost every conversation about web security.",
      "Web applications are how most of us interact with the internet, whether we're checking email, shopping, or logging into a bank account. Understanding how they're built is also the fastest way to understand how they get attacked. This guide connects the dots between how websites work and how common attacks like SQL injection and cross-site scripting actually target them.",
    ],
    whatYoullLearn: [
      'What actually happens when your browser "talks" to a website\'s server',
      "What terms like server, request, and TLS mean in plain language",
      "Why the lock icon in your browser matters, and what it's actually protecting",
      "How one web application can serve millions of users at the same time",
      "How common attacks like SQL injection and cross-site scripting (XSS) target the very process this guide explains",
    ],
    whoThisIsFor:
      "Anyone curious about how the websites and apps they use every day are actually built. Especially useful if you're starting to explore web security or software development.",
    faq: [
      {
        q: "Do I need to know HTML or JavaScript first?",
        a: "No prior coding knowledge is required. The guide explains concepts, not code.",
      },
      {
        q: "Does this cover mobile apps too?",
        a: "The focus is specifically on web applications (things you access through a browser), though many of the same concepts apply to how mobile apps communicate with servers.",
      },
      {
        q: "Will I understand security terms like XSS and SQL injection afterward?",
        a: "Yes. The guide explains where those vulnerabilities come from by first showing you the normal request/response process they exploit.",
      },
    ],
  },
  {
    slug: "firewalls",
    name: "How Firewalls Work",
    eyebrow: "Network Security",
    metaDescription:
      "What a firewall actually does, how it decides what traffic to block, and the real differences between basic, stateful, web application, and next-generation firewalls.",
    gumroadUrl: "https://shop.querylock.com/l/firewalls",
    thumbnailUrl: "https://public-files.gumroad.com/mocltgdroor78iil3me8lh779ixu",
    priceCents: 999,
    isPWYW: false,
    readMinutes: 15,
    intro: [
      "Firewall is one of those words that gets thrown around constantly in movies, IT meetings, and security headlines, but few people outside of networking actually know what one does. This guide fixes that, walking through exactly how a firewall decides what traffic to let through and what to block.",
      "You'll learn the difference between the major types of firewalls, including basic, stateful, web application, and next-generation, and see how each one makes its decisions differently. The guide also gets into how firewalls can be tricked or misconfigured, and why relying on a firewall alone is never enough to keep a system safe.",
      "Firewalls are one of the oldest and most widely used layers of cybersecurity, sitting at the edge of nearly every network you interact with. Understanding how they actually work, not just that they exist, makes the rest of network security click into place much faster.",
    ],
    whatYoullLearn: [
      "What a firewall actually does, and why virtually every network has one",
      "The difference between basic, stateful, web application, and next-generation firewalls",
      "How a firewall decides whether to allow or block a given piece of traffic",
      "How firewalls get misconfigured or bypassed in the real world",
      "Why a firewall is one layer of defense, not a complete security strategy on its own",
    ],
    whoThisIsFor:
      'Anyone who\'s heard "firewall" used constantly and wants an actual, concrete explanation. Helpful for IT beginners, developers, and anyone building a foundation in network security.',
    faq: [
      {
        q: "Is this about a specific firewall product?",
        a: "No. The guide covers how firewalls work as a category of technology, not any single vendor's product.",
      },
      {
        q: "Do I need networking experience to follow along?",
        a: "No. The guide starts from the basics of how network traffic moves before explaining how firewalls act on it.",
      },
      {
        q: "Will this help me understand next-generation firewalls (NGFWs)?",
        a: "Yes. The guide covers how NGFWs differ from traditional firewalls and what extra protection they add.",
      },
    ],
  },
  {
    slug: "cloud",
    name: "How the Cloud Works",
    eyebrow: "Fundamentals",
    metaDescription:
      'What "the cloud" actually is, how companies rent computing power instead of buying hardware, and who\'s really responsible when something in the cloud goes wrong.',
    gumroadUrl: "https://shop.querylock.com/l/cloud",
    thumbnailUrl: "https://public-files.gumroad.com/uqy73nmeoxq08rdrtq0q7cjotmsi",
    priceCents: 999,
    isPWYW: false,
    readMinutes: 12,
    intro: [
      'Everyone talks about "the cloud" as if it\'s some abstract, magical place, but your data has to physically live somewhere. This guide explains exactly what the cloud actually is, why nearly every modern company builds on it, and how those cloud-based applications are put together.',
      "You'll learn how companies rent computing power instead of buying and maintaining their own hardware, why cloud applications can scale from a handful of users to millions without a full rebuild, and, critically, who is actually responsible when something in the cloud goes wrong. That last question matters more than most people realize, since a lot of high-profile data breaches come down to confusion over exactly that.",
      "The cloud powers nearly every application you use, from your email to your bank's app to the tools your company runs on. This guide connects the basics of cloud computing to two real examples of how simple cloud misconfigurations exposed millions of records, so you leave with more than just vocabulary.",
    ],
    whatYoullLearn: [
      'Why "the cloud" is really just someone else\'s computers, and what that means in practice',
      "What terms like compute, scaling, and networking actually mean in a cloud context",
      "Who the major cloud providers are and why companies choose one over another",
      "Who is actually responsible when something goes wrong in the cloud: you, or the provider",
      "Two real-world examples of how small cloud misconfigurations exposed millions of records",
    ],
    whoThisIsFor:
      "Anyone who works with, near, or on top of cloud infrastructure and wants a clear mental model of how it fits together. No prior cloud certification required.",
    faq: [
      {
        q: "Does this cover a specific provider like AWS or Azure?",
        a: "The guide explains cloud computing concepts that apply across providers, and touches on why companies choose one of the major three.",
      },
      {
        q: "Is this guide technical enough for someone starting a cloud security role?",
        a: "It's a strong starting point. It builds the foundational mental model that more advanced cloud security material assumes you already have.",
      },
      {
        q: 'What\'s the "shared responsibility" thing I keep hearing about?',
        a: "That's exactly one of the core ideas this guide untangles: who's responsible for what when you're running something in the cloud.",
      },
    ],
  },
  {
    slug: "containers",
    name: "How Containers Work",
    eyebrow: "Fundamentals",
    metaDescription:
      "What a container actually is, how it differs from a virtual machine, and what Docker and Kubernetes are really doing behind the scenes, explained without the command line.",
    gumroadUrl: "https://shop.querylock.com/l/containers",
    thumbnailUrl: "https://public-files.gumroad.com/fhdarblka4kp1hbdwu0z0abuopx0",
    priceCents: 999,
    isPWYW: false,
    readMinutes: 12,
    intro: [
      "Think about a shipping container: it doesn't matter what's inside or which ship, truck, or train it ends up on. It just works, everywhere. Software containers work on the same idea, and they're quietly running behind almost every modern application, whether you realize it or not.",
      "This guide explains what a container actually is, why it changed the way applications get built and deployed, and how it lets the same piece of software run identically on a laptop, a server, or a cloud platform. You'll see how containers differ from virtual machines, what Docker is actually doing behind the scenes, and why Kubernetes exists to manage containers once you have more than a handful of them.",
      "Containers are foundational to how modern software gets shipped, but the terminology, including images, Dockerfiles, container engines, and orchestration, can make the topic feel more complicated than it is. This guide clears that up, and also covers a couple of real security risks that come with relying on containers so heavily.",
    ],
    whatYoullLearn: [
      "What a container actually is, and why it's become so useful for modern software",
      "Why a container behaves the same way no matter where it runs",
      "What terms like image, Dockerfile, and container engine mean in practice",
      "Why containers are lighter and faster than virtual machines, and when a VM is still the better choice",
      "What Docker and Kubernetes each actually do, and why they aren't the same thing",
      "Two real security risks that come with using containers, and why they matter",
    ],
    whoThisIsFor:
      "Developers, IT professionals, or anyone curious about the technology behind modern software deployment. No Docker or Kubernetes experience needed going in.",
    faq: [
      {
        q: "Will this teach me to write Docker commands?",
        a: "No. This is a conceptual guide to what containers are and why they matter, not a hands-on Docker tutorial.",
      },
      {
        q: "What's the difference between a container and a virtual machine?",
        a: "That's one of the core comparisons the guide walks through, including when you'd actually want a VM instead of a container.",
      },
      {
        q: "Do I need to know Kubernetes already?",
        a: "No. The guide explains what Kubernetes does and why it exists, assuming no prior exposure.",
      },
    ],
  },
  {
    slug: "databases",
    name: "How Databases Work",
    eyebrow: "Fundamentals",
    metaDescription:
      "How applications store and retrieve your information in milliseconds: relational vs. NoSQL, SQL basics, and how the same process gets exploited by SQL injection.",
    gumroadUrl: "https://shop.querylock.com/l/databases",
    thumbnailUrl: "https://public-files.gumroad.com/p4gmp903pw2ic6t1sxxjfamvbdd8",
    priceCents: 999,
    isPWYW: false,
    readMinutes: 10,
    intro: [
      "Your music playlists, your bank balance, your online shopping history, your social media posts. They all have one thing in common: they live in a database. This guide explains how an application can search through all of that stored information and hand back exactly what it's looking for in a fraction of a second.",
      "You'll learn the difference between relational and NoSQL databases and when each one makes sense, how applications actually talk to a database behind the scenes, and why concepts like primary keys and SQL exist in the first place. The guide is written for people who've never touched a database directly, so there's no assumption that you already know SQL.",
      "Databases sit behind nearly every application you use, which also makes them one of the most common targets for attackers. Once you understand how a database stores and retrieves information, one of the most well-known vulnerabilities in software, SQL injection, makes a lot more sense, including why it's still a problem today.",
    ],
    whatYoullLearn: [
      "How an application can find your exact information in milliseconds",
      "What CRUD means, and why nearly every application relies on it",
      "The difference between relational and NoSQL databases, and when each makes sense",
      "Why databases rely on things like primary keys and Structured Query Language (SQL)",
      "How a small mistake in handling database queries can lead to a SQL injection attack",
    ],
    whoThisIsFor:
      "Anyone who wants to understand what's happening behind the scenes of the apps they use daily. A solid starting point before diving into SQL, backend development, or database security.",
    faq: [
      {
        q: "Do I need to already know SQL?",
        a: "No. The guide is built for people who've never written a line of SQL, and explains why it exists before showing what it looks like.",
      },
      {
        q: "Does this cover both SQL and NoSQL databases?",
        a: "Yes. It explains the difference between relational (SQL) and NoSQL databases and when each is the better choice.",
      },
      {
        q: "Will I understand SQL injection after reading this?",
        a: "Yes. The guide connects how databases normally process queries to how that same process can be abused in a SQL injection attack.",
      },
    ],
  },
  {
    slug: "apis",
    name: "How APIs Work",
    eyebrow: "Fundamentals",
    metaDescription:
      "How applications talk to each other: requests, endpoints, authentication, and REST vs. SOAP explained in plain language, plus two real ways APIs get abused.",
    gumroadUrl: "https://shop.querylock.com/l/APIs",
    thumbnailUrl: "https://public-files.gumroad.com/s0iknmuohmfggajc4b1tr4jddkr8",
    priceCents: 999,
    isPWYW: false,
    readMinutes: 12,
    intro: [
      "DoorDash didn't build its own maps. It didn't build its own payment processor. It didn't build its own text messaging system. So how does one app do all of that? The answer is APIs, the quiet connective tissue that lets different systems talk to each other, and this guide explains exactly how.",
      "You'll learn how a request actually gets built and sent, how one application proves its identity to another before anything happens, why APIs are organized around things called endpoints, and what happens in the moments between an application sending a request and getting a response back. The guide also compares REST and SOAP, two different approaches to building APIs, and explains why REST became the standard almost everywhere.",
      "APIs power everything from online payments to weather apps to single sign-on, which also makes them a frequent target for attackers. This guide closes with two real, common ways APIs get abused, so you come away understanding not just how APIs work, but why getting them right matters.",
    ],
    whatYoullLearn: [
      "Why applications rely on other applications instead of building every feature themselves",
      "How to actually read a basic API request and response",
      "What terms like endpoint, JSON, and status code mean in practice",
      "How an application proves who it is before an API will respond to it",
      "The difference between REST and SOAP, and why REST became the dominant approach",
      "Two real ways APIs get abused, and why understanding them matters",
    ],
    whoThisIsFor:
      "Developers, product managers, or anyone who's heard \"we'll just use their API\" in a meeting and wants to actually understand what that means. No coding experience required.",
    faq: [
      {
        q: "Do I need programming experience to understand this guide?",
        a: "No. It's written for people who've never written code, though developers new to APIs will get value from it too.",
      },
      {
        q: "Does this teach me how to build an API?",
        a: "Not directly. It's focused on understanding how APIs work and communicate, which is the foundation you'd need before building one.",
      },
      {
        q: "What's the difference between REST and SOAP?",
        a: "That's one of the core comparisons in the guide, including why REST won out as the dominant approach for most modern APIs.",
      },
    ],
  },
];
