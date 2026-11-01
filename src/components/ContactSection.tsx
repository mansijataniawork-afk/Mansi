import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, MessageSquare, Globe, Linkedin, Presentation } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { staggerContainer, fadeInScaleUp, defaultViewport } from '../utils/motionVariants';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [inquiryType, setInquiryType] = useState('Brand Partnership & Curation');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [message, setMessage] = useState('');

  const inquiryTypes = [
    'Brand Partnership & Curation',
    'Portfolio Strategy & Advisory',
    'Neuromarketing & Consumer Insights',
    'Executive / Career Opportunity',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiryType}] Inbound inquiry from ${name || 'Prospective Partner'}`);
    const bodyContent = encodeURIComponent(
      `Hi Mansi,\n\nName: ${name || 'N/A'}\nBrand / Organization: ${brand || 'N/A'}\nEmail: ${email || 'N/A'}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message || 'Looking forward to connecting regarding strategic brand management and category growth opportunities.'}\n\nBest,\n${name || 'Inbound Partner'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${bodyContent}`;
  };

  const handleCopyDraft = () => {
    const draftText = `
To: ${PERSONAL_INFO.email}
Subject: [${inquiryType}] Inbound inquiry from ${name || 'Prospective Partner'}

Hi Mansi,

My name is ${name || 'N/A'} representing ${brand || 'our brand'} (${email || 'email'}).
Category: ${inquiryType}

${message || 'We would love to discuss brand evaluation, category positioning, and potential collaboration.'}

Looking forward to hearing from you.
    `.trim();

    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#EAE5DF] dark:border-[#221F28] bg-[#FAF8F5]/60 dark:bg-[#0E0C10]/60">
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Editorial Contact Pitch */}
          <motion.div variants={fadeInScaleUp} className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#E07A5F] mb-2">
                Initiate Strategic Dialogue
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] font-display mb-4">
                Let's discuss brand growth, category strategy & consumer insights.
              </h2>
              <p className="text-sm sm:text-base text-[#554F5D] dark:text-[#B5AFBD] leading-relaxed">
                Whether you're exploring high-potential brand onboarding, category assortment white spaces, or strategic brand management advisory, I welcome your conversation.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 bg-white dark:bg-[#141118] border border-[#EAE5DF] dark:border-[#25202D] rounded-2xl shadow-xs space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#8A8490]">
                Direct Coordinates
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#E07A5F]" />
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm font-semibold text-[#1A161E] dark:text-[#F3F0F6] hover:underline"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs text-[#E07A5F] hover:underline cursor-pointer font-medium"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-[#F0EBE5] dark:border-[#221D29]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#E07A5F]" />
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-sm font-semibold text-[#1A161E] dark:text-[#F3F0F6] hover:underline"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-xs text-[#E07A5F] hover:underline cursor-pointer font-medium"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location */}
              <div className="pt-2 border-t border-[#F0EBE5] dark:border-[#221D29] flex items-center gap-2 text-xs text-[#6B6572] dark:text-[#A7A1AF]">
                <MapPin className="w-4 h-4 text-[#E07A5F] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Official Web, Wix & LinkedIn Links */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#8A8490] mb-3">
                Digital Presence & Archives
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-[#554F5D] dark:text-[#B5AFBD]">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#E07A5F] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={PERSONAL_INFO.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#E07A5F] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>mansijataniawork.com</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={PERSONAL_INFO.previousWixUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#E07A5F] transition-colors text-[#8A8490]"
                  title="Previous Wix Portfolio Website Archive"
                >
                  <Globe className="w-3.5 h-3.5 text-[#8A8490]" />
                  <span>Wix Site Archive</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Composer */}
          <motion.div 
            variants={fadeInScaleUp}
            className="lg:col-span-7 bg-white dark:bg-[#141118] border border-[#EAE5DF] dark:border-[#25202D] rounded-2xl p-7 sm:p-8 shadow-xs"
          >
            <div className="flex items-center gap-2 pb-5 border-b border-[#F0EBE5] dark:border-[#221D29] mb-6">
              <MessageSquare className="w-4 h-4 text-[#E07A5F]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6]">
                Strategic Inquiry & Brief Composer
              </h3>
            </div>

            <form onSubmit={handleSendMail} className="space-y-5">
              {/* Inquiry Type Tabs */}
              <div>
                <label className="block text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6] mb-2">
                  Inquiry Focus Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`p-2.5 rounded-xl text-xs font-medium transition-all text-left border cursor-pointer ${
                        inquiryType === type
                          ? 'bg-[#1A161E] text-white dark:bg-[#E07A5F] dark:text-white border-[#1A161E] dark:border-[#E07A5F] shadow-xs'
                          : 'bg-[#FAF8F5] dark:bg-[#1A1622] text-[#554F5D] dark:text-[#B5AFBD] border-[#EAE5DF] dark:border-[#2A2433] hover:border-[#DDD7CF]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priyal Mehta"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] dark:bg-[#1A1622] border border-[#EAE5DF] dark:border-[#2A2433] rounded-xl text-[#1A161E] dark:text-[#F3F0F6] placeholder-[#A7A1AF] focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6] mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. priyal@brand.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] dark:bg-[#1A1622] border border-[#EAE5DF] dark:border-[#2A2433] rounded-xl text-[#1A161E] dark:text-[#F3F0F6] placeholder-[#A7A1AF] focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
                  />
                </div>
              </div>

              {/* Brand Name */}
              <div>
                <label className="block text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6] mb-1.5">
                  Brand, Founder or Enterprise
                </label>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="e.g. D2C Beauty Venture, FMCG Studio, or Nykaa Partner"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] dark:bg-[#1A1622] border border-[#EAE5DF] dark:border-[#2A2433] rounded-xl text-[#1A161E] dark:text-[#F3F0F6] placeholder-[#A7A1AF] focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#1A161E] dark:text-[#F3F0F6] mb-1.5">
                  Discussion Points / Strategic Objectives
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your brand's category positioning, questions regarding platform onboarding or partnership goals..."
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] dark:bg-[#1A1622] border border-[#EAE5DF] dark:border-[#2A2433] rounded-xl text-[#1A161E] dark:text-[#F3F0F6] placeholder-[#A7A1AF] focus:outline-none focus:ring-2 focus:ring-[#E07A5F] resize-none leading-relaxed"
                />
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A161E] hover:bg-[#2C2735] dark:bg-[#E07A5F] dark:hover:bg-[#C9684F] rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Launch in Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6] bg-[#FAF8F5] dark:bg-[#1C1822] border border-[#EAE5DF] dark:border-[#2C2735] hover:bg-[#EFEAE4] rounded-xl transition-colors cursor-pointer"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Draft Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#8A8490] text-center">
                Submissions open directly in your mail client targeting <span className="font-mono text-[#E07A5F]">{PERSONAL_INFO.email}</span>.
              </p>
            </form>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};
