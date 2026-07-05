export interface Project {
  title: string;
  tag: string;
  isAmberTag?: boolean;
  description: string;
  stat: string;
  chips: string[];
  github?: string;
  live?: string;
}

export interface NowItem {
  label: string;
  title: string;
  description: string;
  chips: string[];
}

export interface ExperienceItem {
  years: string;
  role: string;
  company: string;
  description: string;
}

export interface HonorItem {
  award: string;
  event: string;
  description: string;
}

export const HERO_CONTENT = {
  eyebrow: "Bengaluru · CSE, MSRUAS",
  name: "Vinodkumar",
  tagline: "builds systems that act, not just answer.",
  subline: "Full-stack engineer specializing in multi-agent AI, RAG, FastAPI, and distributed systems—shipping scalable products that solve real business problems, not research demos.",
  meta: [
    "Full-Stack Intern, Saarthi"
  ]
};

export const WORK_PROJECTS: Project[] = [
  {
    title: "GeniusAI",
    tag: "Solo build",
    description: "An autonomous recruiting pipeline that takes a candidate from raw signal to a decision — no human triggers a step in between. Four agents (Orchestrator, Research, Reasoning, Action) hand off work the way a small hiring team would.",
    stat: "End-to-end candidate processing in under 90 seconds",
    chips: ["FastAPI", "Celery", "Redis", "Supabase pgvector", "GitHub API", "Slack API", "Vapi.ai"],
    github: "https://github.com/vinodkadli7022/Recruiting-Agent"
  },
  {
    title: "ComplianceAI",
    tag: "Winner — NMIT Hacks 2026",
    isAmberTag: true,
    description: "A compliance platform built for how Indian SMBs and their CAs actually work: owners get a free document vault, CAs get a subscription dashboard, and a permissioned sharing layer sits between them so nothing moves without explicit consent.",
    stat: "Open Innovation track winner, built in 48 hours",
    chips: ["FastAPI", "React", "RAG", "Document Vault", "Consent-scoped access"],
    github: "https://github.com/vinodkadli7022/compilance_ai",
    live: "https://compilance-ai.onrender.com/"
  },
  {
    title: "ILAP",
    tag: "Finalist — Srijin Atos 2026",
    isAmberTag: true,
    description: "Identity Lifecycle Automation Platform — provisioning, roles, and access built around real enterprise controls rather than a demo login screen, with SOC2 / ISO 27001 posture in mind from the first schema.",
    stat: "Enterprise-grade RBAC on a hackathon timeline",
    chips: ["MERN", "RBAC", "SOC2-minded", "ISO 27001-minded"],
    github: "https://github.com/vinodkadli7022/IAM-lifecycle",
    live: "https://iam-lifecycle-96hg.vercel.app/"
  },
  {
    title: "Candidate Search Engine",
    tag: "Solo build",
    description: "A hybrid candidate search engine that fuses semantic and keyword retrieval instead of choosing one — FAISS for dense vectors, BM25 for exact-term precision, merged with Reciprocal Rank Fusion.",
    stat: "1,732 profiles searched, fully offline, zero external APIs",
    chips: ["Python", "FAISS", "BM25", "RRF"],
    github: "https://github.com/vinodkadli7022/candidate-search-engine"
  },
  {
    title: "Plagiarism Detection System",
    tag: "Solo build",
    description: "A document similarity engine built the way a search team would — k-gram shingling and Jaccard similarity behind a production-shaped full-stack backend, not a one-off script.",
    stat: "Under 12ms similarity computation for 10k-word documents",
    chips: ["TypeScript", "k-gram hashing", "Jaccard similarity"],
    github: "https://github.com/vinodkadli7022/plagiarism-detection-system",
    live: "https://plagiarism-detection-system-steel.vercel.app/"
  },
  {
    title: "AuctionX-2",
    tag: "Solo build",
    description: "A production-grade real-time platform that replicates the IPL auction experience digitally — live bidding, state sync, and the pressure of a real auction room, not a static form.",
    stat: "Multi-user state sync under 80ms latency",
    chips: ["React", "Node.js", "Real-time state sync"],
    github: "https://github.com/vinodkadli7022/AuctionX-2",
    live: "https://auction-x-2.vercel.app/"
  },
  {
    title: "TERRITORIA",
    tag: "Solo build",
    description: "A real-time multiplayer territory-war game on a 50×50 grid — built to handle concurrent player state without the whole board falling out of sync.",
    stat: "Scalable WebSocket message distribution via Redis Pub/Sub",
    chips: ["React", "Vite", "Socket.io", "Redis"],
    github: "https://github.com/vinodkadli7022/TERRITORIA",
    live: "https://territoria-blond.vercel.app/"
  }
];

export const NOW_CONTENT: NowItem = {
  label: "Ascent Scaler Hackathon · Phase 2 · due July 22",
  title: "Industrial Operations Brain",
  description: "A proactive multi-agent system for industrial knowledge intelligence — live ops dashboard, an AI Daily Brief, Machine Digital Twin pages, an Expert Copilot chat, a knowledge graph, and a standing Compliance Agent. Built on a genuinely zero-cost stack.",
  chips: ["Gemini 2.0 Flash", "Groq Llama 3.3 70B", "bge-small-en-v1.5", "Neo4j Aura", "Supabase pgvector", "Render", "Vercel"]
};

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    years: "2026 — Present",
    role: "Full-Stack Engineer Intern",
    company: "Saarthi",
    description: "Building and shipping production FastAPI microservices."
  },
  {
    years: "2023 — 2027",
    role: "B.Tech, Computer Science & Engineering",
    company: "M.S. Ramaiah University of Applied Sciences, Bengaluru",
    description: "CGPA 8.9. Coursework spanning compilers, full-stack development, and applied economics."
  }
];

export const HONORS_LIST: HonorItem[] = [
  {
    award: "Won",
    event: "NMIT Hacks 2026",
    description: "Open Innovation track — ComplianceAI, team of 3, 48 hours."
  },
  {
    award: "Finalist",
    event: "Srijin Atos 2026",
    description: "ILAP — identity & access management for the enterprise."
  },
  {
    award: "Finalist",
    event: "Ascent Scaler Hackathon",
    description: "Industrial Operations Brain — proactive multi-agent system for industrial knowledge intelligence."
  }
];

export interface StackCategory {
  label: string;
  items: string[];
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++"]
  },
  {
    label: "Backend",
    items: ["FastAPI", "Node.js", "Express", "Celery", "Redis"]
  },
  {
    label: "AI / Agents",
    items: ["RAG pipelines", "Multi-agent orchestration", "FAISS", "BM25"]
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Supabase", "pgvector", "Neo4j", "MongoDB"]
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS"]
  },
  {
    label: "Infra",
    items: ["Docker", "Render", "Vercel", "Git"]
  }
];

export const CONTACT_LINKS = {
  email: "vinodkumarkadli7022@gmail.com",
  github: "https://github.com/vinodkadli7022",
  linkedin: "https://www.linkedin.com/in/vinodkumar-kadli-b40b91293",
  resume: "https://drive.google.com/file/d/1XDyx_Po-VDWR7odIzqaY9rteSsI7uIcw/view?usp=sharing"
};
