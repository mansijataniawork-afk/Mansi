import React, { useState, useEffect } from 'react';
import { ArrowDown, Copy, Check, Mail, MapPin, Sparkles, Building2, TrendingUp, Sliders, ExternalLink, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [mumbaiTime, setMumbaiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setMumbaiTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const tickerItems = [
    'NYKAA BEAUTY',
    'STRATEGIC BRAND EVALUATION',
    'CATEGORY ASSORTMENT HEALTH',
    'NEUROMARKETING & GEN-Z',
    'VENDOR LIFECYCLE GOVERNANCE',
    'CANVA STRATEGY DECKS',
    'B2C GTM PLANNING',
    'CPG PACKAGING DESIGN',
    'EXECUTIVE PITCH DECKS'
  ];

  return (
    <section className="relative pt-12 md:pt-16 pb-16 md:pb-20 overflow-hidden border-b border-[#EAE5DF] dark:border-[#221F28]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Hero: Left Typographic Narrative / Right Visual Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Typographic Hierarchy with Entrance Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              {/* Quiet Editorial Kicker with Typographic Separator */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E07A5F] mb-6">
                <span className="font-bold">Nykaa Beauty</span>
                <span aria-hidden="true" className="text-[#C8C2BA] dark:text-[#453F4E]">/</span>
                <span>Brand Management</span>
                <span aria-hidden="true" className="text-[#C8C2BA] dark:text-[#453F4E]">/</span>
                <span>Category & Assortment Insights</span>
              </div>

              {/* Refined Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] leading-[1.08] mb-6 max-w-2xl text-balance font-display">
                Curating high-performing brand portfolios through consumer & category insights.
              </h1>

              {/* Lead Narrative */}
              <p className="text-base sm:text-lg text-[#554F5D] dark:text-[#B5AFBD] leading-relaxed max-w-xl mb-8 font-sans">
                I'm <span className="font-semibold text-[#1A161E] dark:text-[#F3F0F6]">{PERSONAL_INFO.name}</span>, Assistant Manager in Brand Management at <span className="font-semibold text-[#E07A5F]">Nykaa Beauty</span>. I specialize in strategic brand evaluation, assortment white-space mapping, and vendor lifecycle governance—grounded in rigorous neuromarketing research into Gen-Z consumer behavior.
              </p>
            </div>

            {/* Actions & Affordances */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A161E] hover:bg-[#2C2735] dark:bg-[#E07A5F] dark:text-white dark:hover:bg-[#C9684F] rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Case Studies & Decks</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href="#framework"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6] bg-white dark:bg-[#15121A] border border-[#DDD7CF] dark:border-[#2C2735] hover:bg-[#FAF8F5] dark:hover:bg-[#1E1925] rounded-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  <Sliders className="w-4 h-4 text-[#E07A5F]" />
                  <span>Interactive Brand Simulator</span>
                </a>

                <a
                  href={PERSONAL_INFO.previousWixUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#7A7382] dark:text-[#9B95A2] hover:text-[#1A161E] dark:hover:text-white border border-transparent hover:border-[#DDD7CF] dark:hover:border-[#2C2735] rounded-xl transition-all whitespace-nowrap"
                  title="View previous Wix portfolio archive"
                >
                  <Globe className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>Wix Site</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              {/* Quick Copy Contact Strip */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A7382] dark:text-[#9B95A2]">
                <div className="flex items-center gap-1.5 font-mono">
                  <Mail className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <span aria-hidden="true" className="text-[#C8C2BA] dark:text-[#453F4E]">·</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 hover:text-[#1A161E] dark:hover:text-white transition-colors cursor-pointer underline underline-offset-4 decoration-[#DDD7CF] dark:decoration-[#2C2735]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
                <span aria-hidden="true" className="text-[#C8C2BA] dark:text-[#453F4E]">·</span>
                <span className="font-mono">{PERSONAL_INFO.phone}</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Portrait Anchor with Editorial Scrim & Details */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="relative group rounded-3xl overflow-hidden border border-[#EAE5DF] dark:border-[#25202D] bg-[#FAF8F5] dark:bg-[#141118] shadow-lg aspect-[4/5] max-h-[560px]">
              <img
                src={PERSONAL_INFO.portraitImage}
                alt={`${PERSONAL_INFO.name} — Brand Management Professional`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Photo Frame Editorial Badges */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-2 pointer-events-auto">
                <div className="flex items-center justify-between">
                  <div className="font-display text-lg font-bold">
                    {PERSONAL_INFO.name}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium">
                    Nykaa Beauty HQ
                  </span>
                </div>

                <div className="text-[11px] text-white/80">
                  Assistant Manager — Brand Onboarding & Portfolio Strategy
                </div>

                <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] text-white/90">
                  <div className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#E07A5F]" />
                    <span>Worli, Mumbai</span>
                  </div>
                  <span className="font-mono tabular-nums">{mumbaiTime || '07:30 PM'} IST</span>
                </div>
              </div>

            </div>

            {/* Quick Context Strip */}
            <div className="mt-3 py-2.5 px-4 rounded-xl bg-white dark:bg-[#141118] border border-[#EAE5DF] dark:border-[#25202D] flex items-center justify-between text-xs text-[#6B6572] dark:text-[#A7A1AF] shadow-xs">
              <span className="font-semibold text-[#1A161E] dark:text-[#F3F0F6]">Enterprise Mandate:</span>
              <span className="font-mono text-[#E07A5F]">550+ Brands Evaluated</span>
            </div>
          </motion.div>

        </div>

        {/* 4-Column Proof Metrics Strip below hero split with whileInView */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[#EAE5DF] dark:border-[#221F28]"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex flex-col"
            >
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] font-display tabular-nums mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#7A7382] dark:text-[#9B95A2]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Animated Brand & Strategy Marquee Ribbon */}
      <div className="mt-14 py-3 bg-[#1A161E] dark:bg-[#16121D] text-white overflow-hidden select-none border-y border-[#2C2735]">
        <div className="animate-marquee gap-8">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8 text-[11px] font-semibold tracking-widest uppercase text-[#DDD7CF]/90">
              <span>{item}</span>
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
