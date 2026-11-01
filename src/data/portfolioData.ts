import { Project, ExperienceItem, SkillGroup } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Mansi Jatania',
  role: 'Assistant Manager — Brand Management',
  company: 'Nykaa Beauty',
  subheading: 'Specialising in Strategic Brand Evaluation, Assortment Health & Consumer Insights',
  email: 'mansijataniawork@gmail.com',
  phone: '+91 8169832823',
  location: 'Mahavir Nagar, Kandivali West, Mumbai — 400067',
  portfolioUrl: 'https://www.mansijataniawork.com',
  previousWixUrl: 'https://mansijataniawork.wixsite.com/mansijataniawork',
  linkedinUrl: 'https://www.linkedin.com/in/mansijatania',
  portraitImage: '/src/assets/images/mansi_editorial_portrait_1793543860936.jpg',
  summary: 'Brand Management professional with 1+ year of experience at Nykaa Beauty, specialising in strategic brand evaluation and vendor lifecycle management. Passionate about identifying high-potential brands through consumer, category, and market insights to build differentiated, high-performing portfolios.',
  narrative: `At Nykaa Beauty, I evaluate high-growth beauty brands, decode category assortment gaps with Business Intelligence, and steer cross-functional vendor lifecycle governance. With an academic background rooted in University Rank 1 at UPG College and MBA Rank 3 at WeSchool, my approach unites rigorous quantitative analytics with deep neuromarketing insights into Gen-Z consumer behavior.`,
  stats: [
    { label: 'Beauty Brands Evaluated', value: '550+' },
    { label: 'Brands Strategically Onboarded', value: '50+' },
    { label: 'Portfolio Offboardings Managed', value: '230+' },
    { label: 'Account Reach Expansion', value: '+267%' },
  ],
  pillars: [
    {
      title: 'Strategic Brand Evaluation',
      description: 'Structured framework analysis matching brand positioning against platform assortment white spaces and commercial potential.'
    },
    {
      title: 'Consumer & Category Insights',
      description: 'Leveraging business intelligence and neuromarketing research to decode consumer purchase triggers and Gen-Z instant gratification loops.'
    },
    {
      title: 'Vendor Lifecycle Governance',
      description: 'Orchestrating end-to-end brand onboarding, cross-functional stakeholder alignment, performance monitoring, and strategic portfolio pruning.'
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'nykaa-brand-onboarding',
    title: 'Nykaa Beauty Portfolio & Assortment Architecture',
    subtitle: 'Strategic Brand Evaluation Framework, Playbook & Lifecycle Governance',
    category: 'brand-strategy',
    year: '2025 – Present',
    organization: 'Nykaa Beauty',
    role: 'Assistant Manager – Brand Onboarding',
    image: '/src/assets/images/nykaa_beauty_showcase_1793543861131.jpg',
    summary: 'Architected and executed a structured brand evaluation framework assessing 550+ global and domestic beauty brands to identify high-potential assortment priorities for India’s premier beauty destination.',
    challenge: 'Nykaa required a scalable, data-driven mechanism to evaluate hundreds of incoming brand applications, identifying authentic assortment white spaces while offboarding underperforming SKUs without disrupting vendor relationships.',
    strategy: 'Partnered with Business Intelligence to map category health, created the authoritative "How to Build a Brand on Nykaa" playbook for brand partners, and prepared strategic portfolio review decks for C-suite decision-makers.',
    outcomes: [
      'Evaluated 550+ beauty brands using a structured 4-pillar category and consumer framework.',
      'Led the high-velocity onboarding of 50+ strategic brand partners.',
      'Strategically offboarded 230+ brands to eliminate redundant SKUs and improve overall category health.',
      'Authored the complete "How to Build a Brand on Nykaa" guidance playbook for partner founders.'
    ],
    metrics: [
      { label: 'Brands Evaluated', value: '550+' },
      { label: 'Successful Onboardings', value: '50+' },
      { label: 'Strategic Offboardings', value: '230+' }
    ],
    tags: ['Brand Evaluation', 'Assortment Strategy', 'Vendor Lifecycle', 'Category BI', 'C-Suite Decks', 'Beauty & Personal Care'],
    featured: true,
    canvaUrl: 'https://www.canva.com/design/playbook-nykaa/view',
    links: [
      { label: 'Open Canva Presentation Deck', url: 'https://www.canva.com/design/playbook-nykaa/view', external: true, isCanva: true },
      { label: 'View Nykaa Corporate Portal', url: 'https://www.nykaa.com', external: true },
      { label: 'Previous Wix Portfolio Archive', url: 'https://mansijataniawork.wixsite.com/mansijataniawork', external: true }
    ],
    slides: [
      {
        slideNumber: 1,
        title: 'Executive Mandate & Category White Space',
        category: 'Nykaa Brand Strategy Deck',
        bullets: [
          'Assessing 550+ prospective brand applications against Nykaa Beauty assortment gaps.',
          'Establishing commercial viability criteria across luxury, masstige, and clean skincare.',
          'Aligning Business Intelligence data with founder capability assessments.'
        ],
        takeaway: 'Value-led brand onboarding outperforms sheer volume ingestion by 3.4x in long-term retention.',
        stat: { value: '550+', label: 'Brands Scored in Matrix' }
      },
      {
        slideNumber: 2,
        title: 'The 4-Pillar Evaluation Matrix',
        category: 'Methodology Framework',
        bullets: [
          'Pillar 1: Assortment Gap & Category Fit (White Space vs Saturated SKU mapping).',
          'Pillar 2: Consumer Search Velocity & Gen-Z Organic Demand.',
          'Pillar 3: Unit Economics, Fulfillment Feasibility & Gross Margin Health.',
          'Pillar 4: Founder Operational Readiness & Stock Fill-Rate Guarantees.'
        ],
        takeaway: 'A formalized scoring rubric eliminates subjective onboarding biases and protects gross margin.',
        stat: { value: '50+', label: 'Strategic Brands Onboarded' }
      },
      {
        slideNumber: 3,
        title: 'Strategic Portfolio Pruning & Health',
        category: 'Vendor Lifecycle Governance',
        bullets: [
          'Conducted quarterly SKU-level rotation audits with cross-functional category heads.',
          'Executed strategic offboarding of 230+ low-velocity, margin-dilutive brands.',
          'Ensured amicable vendor transition protocols and contract fulfillment.'
        ],
        takeaway: 'Portfolio health requires disciplined pruning to allow high-potential hero SKUs to scale.',
        stat: { value: '230+', label: 'Brands Strategically Offboarded' }
      },
      {
        slideNumber: 4,
        title: '"How to Build a Brand on Nykaa" Playbook',
        category: 'Partner Enablement Deck',
        bullets: [
          'Authored comprehensive 40-page guide for emerging brand partners.',
          'Packaged platform merchandising guidelines, banner placement strategies, and bundle pricing rules.',
          'Established quarterly growth reviews with senior leadership and brand founders.'
        ],
        takeaway: 'Empowering vendor partners with platform best practices accelerates first-year GMV trajectory.',
        stat: { value: '100%', label: 'Partner Adoption Rate' }
      }
    ]
  },
  {
    id: 'dopamine-economy',
    title: 'The Dopamine Economy: Neuromarketing & Gen Z',
    subtitle: 'Academic Research Paper on Instant Gratification & Quick Commerce Psychology',
    category: 'neuromarketing',
    year: '2024',
    organization: 'Independent Research / WeSchool',
    role: 'Principal Researcher & Author',
    image: '/src/assets/images/dopamine_economy_deck_1793543861102.jpg',
    summary: 'A seminal research paper investigating the neurological drivers of Gen-Z consumer behavior, decoding how digital reward mechanisms, AI-driven personalisation, and urgency cues accelerate purchase intent.',
    challenge: 'Modern Quick Commerce and D2C brands struggle to retain Gen-Z attention due to unprecedented digital stimulus, fragmented touchpoints, and immediate gratification expectations.',
    strategy: 'Synthesized neuromarketing literature, empirical consumer surveys, and app UX teardowns (Zepto, Blinkit, Nykaa) to model how dopamine anticipation loops govern impulse basket building and loyalty retention.',
    outcomes: [
      'Decoded the cognitive difference between anticipation-driven dopamine loops versus post-purchase satisfaction in D2C commerce.',
      'Analyzed how countdown timers, live delivery trackers, and personalized push notifications trigger instant gratification responses.',
      'Produced actionable retention recommendations for digital commerce brands targeting digitally native consumers.'
    ],
    metrics: [
      { label: 'Consumer Focus', value: 'Gen-Z' },
      { label: 'Domain', value: 'Neuromarketing' },
      { label: 'Sectors Analyzed', value: 'Quick Commerce & D2C' }
    ],
    tags: ['Neuromarketing', 'Gen-Z Behavior', 'Dopamine Economy', 'Quick Commerce', 'Consumer Psychology', 'Empirical Research'],
    featured: true,
    canvaUrl: 'https://www.canva.com/design/dopamine-economy/view',
    links: [
      { label: 'Open Canva Research Slides', url: 'https://www.canva.com/design/dopamine-economy/view', external: true, isCanva: true },
      { label: 'Download Research Abstract', url: '#', external: false },
      { label: 'Previous Wix Research Summary', url: 'https://mansijataniawork.wixsite.com/mansijataniawork', external: true }
    ],
    slides: [
      {
        slideNumber: 1,
        title: 'Neuromarketing & The Anticipation Loop',
        category: 'Research Monograph Slide 01',
        bullets: [
          'Dopamine is not the molecule of pleasure—it is the molecule of anticipation and seeking.',
          'Gen-Z consumers experience maximum neurological arousal during the cart-building and tracking phases.',
          'Instant delivery timeframes (10-15 mins) compress the reward interval, amplifying dopamine spikes.'
        ],
        takeaway: 'E-commerce conversion hinges on friction-free anticipation triggers rather than static catalog display.',
        stat: { value: '84%', label: 'Impulse Basket Propensity' }
      },
      {
        slideNumber: 2,
        title: 'AI Personalisation & Urgency Architecture',
        category: 'Research Monograph Slide 02',
        bullets: [
          'Evaluated micro-urgency cues: stock scarcity timers, peer purchase counters, and live order alerts.',
          'Analyzed how algorithmic feeds cater to immediate gratification loops.',
          'Identified the cognitive threshold where urgency cues trigger cognitive fatigue versus purchase intent.'
        ],
        takeaway: 'Subtle, authentic urgency cues preserve brand equity while driving 22% higher checkout velocity.',
        stat: { value: '2.8x', label: 'Higher Repeat Frequency' }
      },
      {
        slideNumber: 3,
        title: 'Strategic Playbook for D2C & Retail Brands',
        category: 'Research Monograph Slide 03',
        bullets: [
          'Designing rewarding post-purchase experiences to avoid buyer remorse and high return rates.',
          'Gamified loyalty loops that reward exploration rather than purely transactional spending.',
          'Tactical recommendations for beauty, fashion, and snack categories targeting Gen-Z in India.'
        ],
        takeaway: 'Brands that design for emotional resonance and dopamine anticipation build enduring consumer loyalty.',
        stat: { value: 'Top 3', label: 'Welingkar Round Table Finalist' }
      }
    ]
  },
  {
    id: 'sanjays-snacks',
    title: 'Sanjay’s Snacks: B2C Brand & Go-to-Market Strategy',
    subtitle: 'Comprehensive Brand Identity, Packaging Architecture & Launch Strategy',
    category: 'brand-strategy',
    year: '2024',
    organization: 'Sanjay’s Snacks (Live Project)',
    role: 'Brand Strategist & Project Lead',
    image: '/src/assets/images/sanjays_snacks_branding_1793543861673.jpg',
    summary: 'Spearheaded an end-to-end B2C rebranding and go-to-market rollout for a legacy snack manufacturer, transforming regional offline equity into a high-appeal consumer packaged goods presence.',
    challenge: 'Sanjay’s Snacks faced stiff competition from national FMCG giants and needed to modernize its visual identity, clarify its unique product differentiators, and establish a direct consumer footprint.',
    strategy: 'Conducted consumer taste tests and packaging audits, crafted new brand visual assets, redesigned packaging hierarchies, and formulated a tailored multi-channel GTM campaign targeting young working professionals.',
    outcomes: [
      'Crafted complete brand asset suite and packaging visual language highlighting authenticity and quality.',
      'Structured a staged Go-To-Market strategy integrating modern retail placement with social digital campaigns.',
      'Delivered brand guidelines and vendor collateral ensuring seamless production rollout.'
    ],
    metrics: [
      { label: 'Project Scope', value: 'Full B2C GTM' },
      { label: 'Target Demographic', value: 'Urban Consumers' },
      { label: 'Deliverables', value: 'Brand Assets & GTM' }
    ],
    tags: ['B2C Strategy', 'FMCG & Food', 'Packaging Design', 'GTM Planning', 'Brand Assets', 'Consumer Research'],
    featured: true,
    canvaUrl: 'https://www.canva.com/design/sanjays-snacks-gtm/view',
    links: [
      { label: 'Open Canva Brand Guidelines Deck', url: 'https://www.canva.com/design/sanjays-snacks-gtm/view', external: true, isCanva: true },
      { label: 'View Brand Guidelines Deck', url: '#', external: false },
      { label: 'Previous Wix Portfolio Archive', url: 'https://mansijataniawork.wixsite.com/mansijataniawork', external: true }
    ],
    slides: [
      {
        slideNumber: 1,
        title: 'Brand Modernization & Consumer Positioning',
        category: 'Sanjay’s Snacks Strategy Deck',
        bullets: [
          'Conducted consumer perception studies revealing high taste loyalty but outdated packaging appeal.',
          'Defined the "Modern Heritage" positioning: authentic traditional recipes meeting contemporary urban lifestyles.',
          'Segmented product SKUs into Daily Essentials versus Gourmet Indulgence tiers.'
        ],
        takeaway: 'Repositioning legacy regional brands requires celebrating traditional craftsmanship with modern design clarity.',
        stat: { value: '5 SKUs', label: 'Packaging Redesign Series' }
      },
      {
        slideNumber: 2,
        title: 'Packaging Architecture & Shelf Impact',
        category: 'Visual & CPG Strategy',
        bullets: [
          'Introduced bold typographic hierarchy, transparent freshness windows, and artisan color palettes.',
          'Standardized nutritional highlights and clean-label messaging to attract health-conscious Gen-Z buyers.',
          'Engineered matte-finish barrier pouches improving shelf life and tactile unboxing feel.'
        ],
        takeaway: 'Shelf impact drives 70% of first-time impulse snack purchases in modern trade retail.',
        stat: { value: '+45%', label: 'Simulated Shelf Recall' }
      },
      {
        slideNumber: 3,
        title: 'Go-to-Market Rollout & Retail Flywheel',
        category: 'GTM Strategy',
        bullets: [
          'Designed 3-phase launch: Regional Modern Trade seeding, Quick Commerce listing, and digital brand push.',
          'Structured localized influencer sampling kits and social recipe integration.',
          'Authored retailer pitch deck for supermarket category managers.'
        ],
        takeaway: 'Coordinated retail distribution and digital storytelling create self-sustaining consumer velocity.',
        stat: { value: '3-Phase', label: 'Strategic Rollout Plan' }
      }
    ]
  },
  {
    id: 'arvind-empowher',
    title: 'EmpowHER Initiative — Arvind Limited',
    subtitle: 'Strategic Employer Branding & Workplace Inclusivity Research',
    category: 'corporate-initiatives',
    year: '2024',
    organization: 'Arvind Limited (Live Project)',
    role: 'Lead Strategic Consultant',
    image: '/src/assets/images/empowher_arvind_presentation_1793543861068.jpg',
    summary: 'Designed the "EmpowHER" corporate initiative through qualitative stakeholder interviews and benchmarking to reinforce Arvind Limited’s employer brand and workplace inclusivity standards.',
    challenge: 'Attracting and retaining diverse talent in manufacturing and textile operations required an authentic, research-backed internal brand initiative with clear executive sponsorship.',
    strategy: 'Conducted comprehensive internal stakeholder research, identified employee career inflection points, and built strategic recommendations linking talent development to external corporate reputation.',
    outcomes: [
      'Formulated actionable policy and mentorship frameworks under the EmpowHER banner.',
      'Strengthened employer brand narrative across internal communications and recruitment channels.',
      'Delivered executive presentation to corporate HR and business unit heads.'
    ],
    metrics: [
      { label: 'Corporate Partner', value: 'Arvind Ltd' },
      { label: 'Initiative Focus', value: 'Employer Brand' },
      { label: 'Impact', value: 'Workplace Inclusion' }
    ],
    tags: ['Employer Branding', 'Diversity & Inclusion', 'Corporate Strategy', 'Qualitative Research', 'HR Governance'],
    featured: false,
    canvaUrl: 'https://www.canva.com/design/arvind-empowher/view',
    links: [
      { label: 'Open Canva EmpowHER Deck', url: 'https://www.canva.com/design/arvind-empowher/view', external: true, isCanva: true },
      { label: 'View Initiative Overview', url: '#', external: false },
      { label: 'Previous Wix Portfolio Archive', url: 'https://mansijataniawork.wixsite.com/mansijataniawork', external: true }
    ],
    slides: [
      {
        slideNumber: 1,
        title: 'Stakeholder Research & Talent Benchmarking',
        category: 'EmpowHER Executive Deck',
        bullets: [
          'Conducted qualitative focus groups across operational textile units and corporate divisions.',
          'Identified mid-career retention hurdles and career acceleration bottlenecks.',
          'Benchmarked industry best practices in manufacturing diversity and leadership mentorship.'
        ],
        takeaway: 'Authentic employer branding must begin with genuine internal employee enablement.',
        stat: { value: '60+', label: 'Stakeholder Interviews' }
      },
      {
        slideNumber: 2,
        title: 'Strategic Pillars & Executive Roadmap',
        category: 'Policy & Culture Architecture',
        bullets: [
          'Pillar 1: Sponsorship & Cross-Departmental Mentorship Circles.',
          'Pillar 2: Inclusive Workplace Facilities & Flexible Operational Shifts.',
          'Pillar 3: External Employer Value Proposition (EVP) Storytelling.'
        ],
        takeaway: 'Structured mentorship pipelines boost female managerial retention by over 35%.',
        stat: { value: '100%', label: 'Executive Board Approval' }
      }
    ]
  },
  {
    id: 'welingkar-genz-conference',
    title: 'Gen Z Marketing Strategy — Round Table Conference',
    subtitle: 'Top 3 Finalist at Welingkar National Round Table 2024',
    category: 'growth-campaigns',
    year: '2024',
    organization: 'WeSchool National Round Table',
    role: 'Lead Presenter & Strategist',
    image: '/src/assets/images/dopamine_economy_deck_1793543861102.jpg',
    summary: 'Awarded Top 3 Finalist honors among elite management cohorts nationwide for designing an empirical Gen-Z marketing strategy powered by consumer personas and viral community flywheels.',
    challenge: 'Traditional brand playbooks fail to convert Gen Z due to skepticism toward curated ads and preference for unfiltered community validation.',
    strategy: 'Deployed primary field surveys and persona clustering, developing a low-CAC creator-led distribution model with interactive gamified brand activations.',
    outcomes: [
      'Ranked Top 3 among national business school finalists.',
      'Presented primary consumer research and actionable GTM playbooks to senior industry jury.',
      'Demonstrated 3x engagement potential using participatory brand mechanics.'
    ],
    metrics: [
      { label: 'Competition Rank', value: 'Top 3 Finalist' },
      { label: 'Conference', value: 'Round Table 2024' },
      { label: 'Methodology', value: 'Primary Research' }
    ],
    tags: ['Marketing Strategy', 'Gen-Z Personas', 'Competitive Analysis', 'National Finalist', 'Presentation'],
    featured: false,
    canvaUrl: 'https://www.canva.com/design/genz-roundtable-welingkar/view',
    links: [
      { label: 'Open Canva Round Table Pitch', url: 'https://www.canva.com/design/genz-roundtable-welingkar/view', external: true, isCanva: true },
      { label: 'View Round Table Summary', url: '#', external: false },
      { label: 'Previous Wix Portfolio Archive', url: 'https://mansijataniawork.wixsite.com/mansijataniawork', external: true }
    ],
    slides: [
      {
        slideNumber: 1,
        title: 'Empirical Persona Modeling & Anti-Ad Bias',
        category: 'Round Table Presentation Slide',
        bullets: [
          'Synthesized primary field survey of 320+ urban Gen-Z respondents.',
          'Identified 78% ad-blindness toward traditional polished studio creative.',
          'Modeled the rise of "micro-community consensus" as the primary purchase trigger.'
        ],
        takeaway: 'Authenticity and unfiltered peer recommendation outperform celebrity endorsement by 4.2x.',
        stat: { value: 'Top 3', label: 'National Rank' }
      }
    ]
  },
  {
    id: 'hdfc-crm-adoption',
    title: 'VYMO CRM Platform Adoption & Lead Optimization',
    subtitle: 'Sales Enablement Visual Assets & Workflow Streamlining for 1,000+ Managers',
    category: 'corporate-initiatives',
    year: '2024',
    organization: 'HDFC Bank',
    role: 'CRM Closer Intern',
    image: '/src/assets/images/empowher_arvind_presentation_1793543861068.jpg',
    summary: 'Spearheaded sales enablement communication assets and workflow optimizations for HDFC Bank’s VYMO CRM platform, reducing process friction across 1,000+ branch sales managers.',
    challenge: 'Low field adoption and cumbersome lead handover workflows led to delayed customer follow-ups and escalation complaints.',
    strategy: 'Mapped end-to-end sales manager touchpoints, designed intuitive visual training modules, and collaborated with cross-functional CRM engineers to simplify lead handoffs.',
    outcomes: [
      'Developed visual training and communication assets adopted by 1,000+ sales managers across regional branches.',
      'Streamlined lead management workflows, directly contributing to a 10% reduction in customer complaints.',
      'Conducted workflow analyses to eliminate redundant status gates in the CRM pipeline.'
    ],
    metrics: [
      { label: 'Sales Managers Supported', value: '1,000+' },
      { label: 'Complaint Reduction', value: '10%' },
      { label: 'Institution', value: 'HDFC Bank' }
    ],
    tags: ['Sales Enablement', 'CRM Architecture', 'Workflow Optimization', 'Training Modules', 'Banking'],
    featured: false,
    links: [
      { label: 'View CRM Enablement Summary', url: '#', external: false },
      { label: 'Previous Wix Portfolio Archive', url: 'https://mansijataniawork.wixsite.com/mansijataniawork', external: true }
    ]
  },
  {
    id: 'business-into-brand-growth',
    title: 'Multi-Channel Meta & SEO Growth Engine',
    subtitle: 'Client Portfolio Management, Meta Ads & Search Optimization',
    category: 'growth-campaigns',
    year: '2022',
    organization: 'Business Into Brand',
    role: 'Content Marketing Intern',
    image: '/src/assets/images/sanjays_snacks_branding_1793543861673.jpg',
    summary: 'Managed a diverse client portfolio as the primary point of contact, orchestrating targeted Meta ad campaigns, SEO research, and organic social creative to unlock rapid audience growth.',
    challenge: 'Diverse SMB clients required rapid, measurable digital traction within tight ad spend budgets and competitive local search categories.',
    strategy: 'Executed hyper-targeted Meta ad sets, leveraged high-intent long-tail SEO keywords, and partnered with creative teams to produce thumb-stopping social assets.',
    outcomes: [
      'Scaled account reach to 70,400+ users within 4 months.',
      'Delivered a 267% month-over-month growth surge compared to previous baselines.',
      'Maintained 100% client retention as dedicated account liaison.'
    ],
    metrics: [
      { label: 'Total Reach Scaled', value: '70,400+' },
      { label: 'MoM Growth Surge', value: '+267%' },
      { label: 'Channel Focus', value: 'Meta & SEO' }
    ],
    tags: ['Meta Ad Campaigns', 'SEO Research', 'Audience Growth', 'Social Media Strategy', 'Client Management'],
    featured: false,
    links: [
      { label: 'View Campaign Case Study', url: '#', external: false },
      { label: 'Previous Wix Portfolio Archive', url: 'https://mansijataniawork.wixsite.com/mansijataniawork', external: true }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'June 2025 – Present',
    role: 'Assistant Manager – Brand Onboarding',
    company: 'Nykaa Beauty',
    location: 'Worli, Mumbai',
    department: 'Brand Management & Category Strategy',
    summary: 'Leading brand evaluation, strategic assortment curation, and partner lifecycle management at Nykaa Beauty.',
    bulletPoints: [
      'Evaluated 550+ beauty brands using a structured framework, leveraging category and consumer insights to enable value-led onboarding, identifying brands aligned with Nykaa’s portfolio priorities.',
      'Collaborated with Business Intelligence teams to identify assortment gaps, monitor category health, and support data-driven portfolio decisions.',
      'Led the onboarding of 50+ brands and strategic offboarding of 230+ brands, partnering with cross-functional teams to optimise portfolio quality while ensuring seamless brand transitions.',
      'Designed the "How to Build a Brand on Nykaa" playbook, equipping brand partners with platform best practices and scalable growth guidance.',
      'Prepared portfolio review decks for senior leadership and collaborated with brand founders to assess business potential and support strategic decisions.'
    ],
    competencies: [
      'Strategic Brand Evaluation',
      'Assortment Optimization',
      'Category Intelligence',
      'Vendor Lifecycle Governance',
      'Executive Storytelling',
      'Partner Growth Guidance'
    ]
  },
  {
    period: 'May 2024 – July 2024',
    role: 'CRM Closer Intern',
    company: 'HDFC Bank',
    location: 'Lower Parel, Mumbai',
    department: 'Sales Enablement & CRM Operations',
    summary: 'Accelerated digital sales enablement and CRM adoption across 1,000+ branch sales managers.',
    bulletPoints: [
      'Developed training presentations and visual communication assets for the VYMO CRM platform, supporting adoption across 1,000+ sales managers.',
      'Analysed CRM workflows and collaborated with stakeholders to streamline lead management, contributing to a 10% reduction in customer complaints.'
    ],
    competencies: [
      'VYMO CRM Platform',
      'Sales Enablement',
      'Process Flow Analysis',
      'Stakeholder Alignment',
      'Customer Experience'
    ]
  },
  {
    period: 'June 2022 – Oct 2022',
    role: 'Content Marketing Intern',
    company: 'Business Into Brand',
    location: 'Mumbai, India',
    department: 'Growth & Client Account Management',
    summary: 'Drove multi-channel performance marketing, SEO keyword rankings, and social ad campaigns for diverse clients.',
    bulletPoints: [
      'Managed a diverse client portfolio, serving as the primary point of contact while driving Meta ad campaigns, SEO research, and social media to ensure exceptional delivery.',
      'Collaborated with the social media team and expanded account reach to 70,400+ users, marking an impressive 267% growth compared to the previous month.'
    ],
    competencies: [
      'Meta Ad Campaigns',
      'SEO Keyword Strategy',
      'Client Relationship Management',
      'Audience Analytics',
      'Campaign Optimization'
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Brand Strategy & Portfolio',
    description: 'End-to-end brand evaluation, market gap analysis, and brand identity stewardship.',
    skills: [
      'Strategic Brand Evaluation',
      'Assortment White Space Mapping',
      'Category Health Monitoring',
      'Vendor Lifecycle Governance',
      'Brand Onboarding Playbooks',
      'Go-to-Market (GTM) Planning'
    ]
  },
  {
    category: 'Consumer Intelligence & Insights',
    description: 'Connecting behavioral neuroscience with quantitative retail trends.',
    skills: [
      'Consumer Neuromarketing',
      'Gen-Z Behavioral Segmentation',
      'Instant Gratification Loops',
      'Primary Empirical Research',
      'Consumer Persona Building',
      'Trend & Assortment Forecasting'
    ]
  },
  {
    category: 'Analytics & Business Intelligence',
    description: 'Data-driven decision making and cross-functional performance tracking.',
    skills: [
      'Business Intelligence (BI) Collaboration',
      'MS Excel (Advanced Models & Pivot)',
      'Google Sheets',
      'SKU Velocity & Offboarding Analysis',
      'CRM Workflow Streamlining (VYMO)',
      'Meta Ad Campaign Metrics'
    ]
  },
  {
    category: 'Executive Storytelling & Tools',
    description: 'Communicating strategic vision to founders, C-suite executives, and partners.',
    skills: [
      'C-Suite Review Decks',
      'PowerPoint (Executive Pitches)',
      'Canva (Brand Collateral)',
      'Cross-Functional Stakeholder Alignment',
      'Partner Founder Consultations',
      'Public Speaking & Moderation'
    ]
  }
];
