// ═══════════════════════════════════════════════════
// RECONTINUUM HOLDING — CONTENT DATA LAYER
// Single source of truth. CMS-ready (Contentful/Strapi).
// All fields typed via src/types/index.ts
// ═══════════════════════════════════════════════════

import type {
  CompanyInfo,
  Founder,
  PortfolioVenture,
  Capability,
  BrandValue,
  StatItem,
  NavLink,
  SEOMeta,
} from '../types/index';

// ── COMPANY ──────────────────────────────────────
export const company: CompanyInfo = {
  name:        'Recontinuum Holding Private Limited',
  shortName:   'Recontinuum',
  tagline:     'Limitless · Leadership · Legacy',
  description: 'A strategic holding company advancing health, innovation, and sustainable growth — partnering with visionary founders to build resilient businesses that deliver lasting value to people, communities, and stakeholders.',
  cin:         'U64200MH2026PTC467028',
  founded:     2026,
  type:        'Holding Company',
  address: {
    city:     'Sangli',
    state:    'Maharashtra',
    pincode:  '416416',
    country:  'India',
  },
  contact: {
    email:   'recontinuum.hq@gmail.com',
    phone:   '+91 72497 86797',
    website: 'https://www.recontinuum.com',
  },
  website: 'https://www.recontinuum.com',
} as const;

// ── FOUNDER ──────────────────────────────────────
export const founder: Founder = {
  name:       'Rajan Bhosale',
  title:      'Founder & Managing Director',
  role:       'Managing Director, Recontinuum Holding Pvt. Ltd.',
  background: 'Former Indian Army Professional',
  bio:        'Shaped by military discipline and long-term strategic thinking, Rajan Bhosale leads Recontinuum with a philosophy rooted in integrity, resilience, and precision — building institutions designed to endure for decades and create meaningful impact across generations.',
  imageAlt:   'Rajan Bhosale — Founder & MD, Recontinuum Holding Private Limited',
} as const;

// ── PORTFOLIO ────────────────────────────────────
export const portfolio: readonly PortfolioVenture[] = [
  {
    id:          'rajmeric-lifesciences',
    name:        'Rajmeric Lifesciences',
    tagline:     'Science-Led Wellness for Human Potential',
    description: "A nutraceutical and wellness enterprise dedicated to advancing stress-adaptation biology, cognitive balance, and long-term human performance through scientifically grounded formulations. Rajmeric represents Recontinuum's flagship commitment to science-led solutions that protect and elevate human potential.",
    sector:      'Nutraceutical & Wellness',
    stage:       'Active Development',
    logoAlt:     'Rajmeric Lifesciences Logo',
    focusAreas: [
      'Stress-Adaptation Biology',
      'Cognitive Balance & Clarity',
      'Long-Term Human Performance',
      'Science-Based Formulations',
    ],
    metadata: [
      { label: 'Sector',    value: 'Nutraceutical & Wellness'        },
      { label: 'Focus',     value: 'Stress-Adaptation & Cognition'   },
      { label: 'Stage',     value: 'Active Development'              },
      { label: 'Approach',  value: 'Science-Led Formulations'        },
    ],
    featured: true,
  },
] as const;

// ── CAPABILITIES ─────────────────────────────────
export const capabilities: readonly Capability[] = [
  {
    id:          'holding-management',
    number:      '01',
    icon:        '🏢',
    title:       'Holding & Group Management',
    description: 'Centralised leadership, capital allocation, and operational governance across all group entities with institutional precision.',
  },
  {
    id:          'life-sciences',
    number:      '02',
    icon:        '🧬',
    title:       'Nutraceutical & Life Sciences',
    description: 'Research, formulation, and commercialisation of science-backed wellness and human performance solutions.',
  },
  {
    id:          'investment',
    number:      '03',
    icon:        '📈',
    title:       'Strategic Investment',
    description: 'Selective capital deployment with disciplined risk management and long-horizon value creation imperatives.',
  },
  {
    id:          'governance',
    number:      '04',
    icon:        '⚙️',
    title:       'Governance & Compliance',
    description: 'Robust regulatory systems, institutional frameworks, and fiduciary oversight at every organisational tier.',
  },
  {
    id:          'advisory',
    number:      '05',
    icon:        '🧩',
    title:       'Business Advisory',
    description: 'Managerial, financial, and strategic support enabling portfolio companies to realise their fullest potential.',
  },
  {
    id:          'digital',
    number:      '06',
    icon:        '🌐',
    title:       'Digital Infrastructure',
    description: 'Secure technology platforms and digital enablement supporting operational excellence across the group.',
  },
] as const;

// ── BRAND VALUES ─────────────────────────────────
export const brandValues: readonly BrandValue[] = [
  { name: 'Integrity',                description: 'Uncompromising ethics in every decision.' },
  { name: 'Resilience',               description: 'Strength built through adversity.'        },
  { name: 'Precision',                description: 'Disciplined, structured execution.'        },
  { name: 'Long-Term Responsibility', description: 'Built for generations, not quarters.'     },
] as const;

// ── HERO STATS ───────────────────────────────────
export const heroStats: readonly StatItem[] = [
  { value: '01',    label: 'Active Platform',  sublabel: 'Core business in development'  },
  { value: '100%',  label: 'Founder Led',      sublabel: 'Direct governance & ownership' },
  { value: '∞',     label: 'Long-Term Vision', sublabel: 'Built for decades'             },
  { value: 'IN',    label: 'India Based',      sublabel: 'Global outlook & scalability'  },
] as const;

// ── NAVIGATION ───────────────────────────────────
export const navLinks: readonly NavLink[] = [
  { label: 'About',        href: '#about'     },
  { label: 'Portfolio',    href: '#portfolio'  },
  { label: 'Capabilities', href: '#services'  },
  { label: 'Contact',      href: '#contact'   },
] as const;

// ── SEO ──────────────────────────────────────────
export const seoMeta: SEOMeta = {
  title:          'Recontinuum Holding Private Limited',
  description:    'Building disciplined, science-led enterprises that protect and elevate human potential. A strategic holding company based in Sangli, Maharashtra, India.',
  keywords:       'Recontinuum Holding, Rajmeric Lifesciences, Holding Company India, Nutraceutical Group, Life Sciences Company, Investment Holding, Health Performance Systems, Sangli Maharashtra',
  ogTitle:        'Recontinuum Holding Private Limited',
  ogDescription:  'Building disciplined, science-led enterprises that protect and elevate human potential.',
  twitterCard:    'summary_large_image',
  canonical:      'https://www.recontinuum.com/',
} as const;
