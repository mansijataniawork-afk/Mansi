import React, { useState } from 'react';
import { Sparkles, Sliders, CheckCircle2, AlertCircle, Copy, Check, RotateCcw, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { staggerContainer, fadeInScaleUp, defaultViewport } from '../utils/motionVariants';

export const BrandEvaluationLab: React.FC = () => {
  const [assortmentGap, setAssortmentGap] = useState<'high' | 'moderate' | 'saturated'>('high');
  const [consumerVelocity, setConsumerVelocity] = useState<'viral' | 'steady' | 'emerging'>('viral');
  const [marginHealth, setMarginHealth] = useState<'premium' | 'standard' | 'thin'>('premium');
  const [operationalReadiness, setOperationalReadiness] = useState<'turnkey' | 'guidance' | 'bottleneck'>('guidance');
  const [copied, setCopied] = useState(false);

  // Calculate composite viability index
  const gapScores = { high: 30, moderate: 20, saturated: 8 };
  const velocityScores = { viral: 30, steady: 22, emerging: 10 };
  const marginScores = { premium: 25, standard: 18, thin: 6 };
  const readinessScores = { turnkey: 15, guidance: 10, bottleneck: 4 };

  const totalScore = gapScores[assortmentGap] + velocityScores[consumerVelocity] + marginScores[marginHealth] + readinessScores[operationalReadiness];

  let recommendation = {
    verdict: 'Priority Fast-Track Onboarding',
    statusClass: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
    playbookAction: 'Initiate vendor catalog ingestion, establish featured banner placement in upcoming Nykaa beauty edits, and review initial inventory fill-rate commitments.',
    tier: 'Tier 1 Strategic Assortment'
  };

  if (totalScore < 50) {
    recommendation = {
      verdict: 'Assortment Redundant / Strategic Offboarding Candidate',
      statusClass: 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800',
      playbookAction: 'Initiate SKU-level velocity audit. Offboard low-rotation SKUs to protect category gross margins and streamline platform catalog health.',
      tier: 'Category Pruning Target'
    };
  } else if (totalScore < 75) {
    recommendation = {
      verdict: 'Assortment Incubation & Playbook Guidance',
      statusClass: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
      playbookAction: 'Deploy the "How to Build a Brand on Nykaa" playbook. Coach brand founder on packaging compliance, hero SKU bundle pricing, and Meta/Search co-op strategy.',
      tier: 'Tier 2 Nurture Partner'
    };
  }

  const handleCopyAnalysis = () => {
    const report = `
Nykaa Brand Evaluation Framework Assessment
Candidate Score: ${totalScore}/100 (${recommendation.tier})
Verdict: ${recommendation.verdict}

Dimensions:
- Assortment Gap: ${assortmentGap.toUpperCase()}
- Consumer Search Velocity: ${consumerVelocity.toUpperCase()}
- Margin Structure: ${marginHealth.toUpperCase()}
- Operational Readiness: ${operationalReadiness.toUpperCase()}

Playbook Directive:
${recommendation.playbookAction}

Framework Authored by Mansi Jatania (Assistant Manager - Brand Onboarding, Nykaa Beauty)
    `.trim();

    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setAssortmentGap('high');
    setConsumerVelocity('viral');
    setMarginHealth('premium');
    setOperationalReadiness('guidance');
  };

  return (
    <section id="framework" className="py-20 md:py-28 border-b border-[#EAE5DF] dark:border-[#221F28] bg-[#FAF8F5]/60 dark:bg-[#0E0C10]/60">
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        
        {/* Section Header with whileInView */}
        <motion.div variants={fadeInScaleUp} className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#E07A5F] mb-2">
            Strategic Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] font-display mb-3">
            Interactive Brand Evaluation & Assortment Simulator
          </h2>
          <p className="text-sm sm:text-base text-[#6B6572] dark:text-[#A7A1AF] leading-relaxed">
            Experience the structured 4-pillar methodology I designed and deploy at Nykaa Beauty to assess over 550+ brands, identify portfolio gaps, and guide strategic onboarding or pruning decisions.
          </p>
        </motion.div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Input Matrix */}
          <motion.div 
            variants={fadeInScaleUp}
            className="lg:col-span-7 bg-white dark:bg-[#141118] border border-[#EAE5DF] dark:border-[#25202D] rounded-2xl p-6 sm:p-7 shadow-xs space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE5] dark:border-[#221D29]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6]">
                <Sliders className="w-4 h-4 text-[#E07A5F]" />
                <span>Evaluation Dimensions</span>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-xs text-[#8A8490] hover:text-[#1A161E] dark:hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Matrix</span>
              </button>
            </div>

            {/* Dimension 1: Assortment Gap */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6]">
                  1. Category Assortment Gap & White Space
                </label>
                <span className="text-[11px] font-mono text-[#8A8490]">Weight: 30%</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'high', label: 'High White Space', desc: 'Unserved niche / clean beauty' },
                  { id: 'moderate', label: 'Balanced Assortment', desc: 'Established category fit' },
                  { id: 'saturated', label: 'Category Saturated', desc: 'High internal cannibalization' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAssortmentGap(opt.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      assortmentGap === opt.id
                        ? 'border-[#1A161E] dark:border-[#E07A5F] bg-[#FAF8F5] dark:bg-[#1F1A26] shadow-xs'
                        : 'border-[#EAE5DF] dark:border-[#2A2433] hover:border-[#DDD7CF]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6]">{opt.label}</div>
                    <div className="text-[10px] text-[#8A8490] mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimension 2: Consumer Search Velocity */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6]">
                  2. Consumer Search Velocity & Gen-Z Demand
                </label>
                <span className="text-[11px] font-mono text-[#8A8490]">Weight: 30%</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'viral', label: 'High Organic Velocity', desc: 'High Gen-Z viral search pull' },
                  { id: 'steady', label: 'Steady Inflow', desc: 'Predictable repeat basket addition' },
                  { id: 'emerging', label: 'Low Awareness', desc: 'Requires paid co-op funding' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setConsumerVelocity(opt.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      consumerVelocity === opt.id
                        ? 'border-[#1A161E] dark:border-[#E07A5F] bg-[#FAF8F5] dark:bg-[#1F1A26] shadow-xs'
                        : 'border-[#EAE5DF] dark:border-[#2A2433] hover:border-[#DDD7CF]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6]">{opt.label}</div>
                    <div className="text-[10px] text-[#8A8490] mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimension 3: Margin Health */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6]">
                  3. Unit Economics & Category Margin Health
                </label>
                <span className="text-[11px] font-mono text-[#8A8490]">Weight: 25%</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'premium', label: 'Premium Margin', desc: 'Healthy take rate & promo buffer' },
                  { id: 'standard', label: 'Standard FMCG', desc: 'Sustainable unit contribution' },
                  { id: 'thin', label: 'Thin / Fragile', desc: 'High return / logistics risk' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setMarginHealth(opt.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      marginHealth === opt.id
                        ? 'border-[#1A161E] dark:border-[#E07A5F] bg-[#FAF8F5] dark:bg-[#1F1A26] shadow-xs'
                        : 'border-[#EAE5DF] dark:border-[#2A2433] hover:border-[#DDD7CF]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6]">{opt.label}</div>
                    <div className="text-[10px] text-[#8A8490] mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimension 4: Operational Readiness */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6]">
                  4. Founder Vision & Operational Readiness
                </label>
                <span className="text-[11px] font-mono text-[#8A8490]">Weight: 15%</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'turnkey', label: 'Turnkey Enterprise', desc: 'High warehouse fill rate' },
                  { id: 'guidance', label: 'Needs Playbook', desc: 'High potential, requires coaching' },
                  { id: 'bottleneck', label: 'Supply Bottlenecks', desc: 'Frequent out-of-stock risk' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setOperationalReadiness(opt.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      operationalReadiness === opt.id
                        ? 'border-[#1A161E] dark:border-[#E07A5F] bg-[#FAF8F5] dark:bg-[#1F1A26] shadow-xs'
                        : 'border-[#EAE5DF] dark:border-[#2A2433] hover:border-[#DDD7CF]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6]">{opt.label}</div>
                    <div className="text-[10px] text-[#8A8490] mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right: Synthesis Outcome Card */}
          <motion.div 
            variants={fadeInScaleUp}
            className="lg:col-span-5 bg-white dark:bg-[#141118] border border-[#EAE5DF] dark:border-[#25202D] rounded-2xl p-6 sm:p-7 shadow-xs space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE5] dark:border-[#221D29]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A8490]">
                Framework Recommendation
              </span>
              <span className="text-xs font-mono font-medium text-[#E07A5F]">
                {recommendation.tier}
              </span>
            </div>

            {/* Big Composite Score with AnimatePresence */}
            <div className="flex items-baseline gap-3">
              <motion.span 
                key={totalScore}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl font-bold font-display tracking-tight text-[#1A161E] dark:text-[#F3F0F6] tabular-nums"
              >
                {totalScore}
              </motion.span>
              <span className="text-xs font-mono text-[#8A8490]">
                / 100 Brand Viability Index
              </span>
            </div>

            {/* Verdict Box */}
            <motion.div 
              key={recommendation.verdict}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl border ${recommendation.statusClass} space-y-1`}
            >
              <div className="text-xs font-semibold uppercase tracking-wider">
                Strategic Assessment
              </div>
              <div className="text-base font-bold">
                {recommendation.verdict}
              </div>
            </motion.div>

            {/* Playbook Directive */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6]">
                <BookOpen className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>"How to Build a Brand on Nykaa" Playbook Directive</span>
              </div>
              <p className="text-xs sm:text-sm text-[#554F5D] dark:text-[#B5AFBD] leading-relaxed bg-[#FAF8F5] dark:bg-[#1C1822] p-4 rounded-xl border border-[#EAE5DF] dark:border-[#282230]">
                {recommendation.playbookAction}
              </p>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={handleCopyAnalysis}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#1A161E] dark:text-white bg-[#EFEAE4] dark:bg-[#1E1925] hover:bg-[#E5DFD7] dark:hover:bg-[#282230] border border-[#DDD7CF] dark:border-[#2C2735] rounded-xl transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Evaluation Report Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Structured Evaluation Report</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-[11px] text-[#8A8490] font-mono border-t border-[#F0EBE5] dark:border-[#221D29] pt-3">
              Authored & deployed at Nykaa Beauty · 550+ Brands Evaluated
            </div>

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};
