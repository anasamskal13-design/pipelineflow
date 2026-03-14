/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Linkedin,
  Target,
  Database,
  Calendar,
  Users,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  BarChart3,
  Activity,
  Sparkles,
} from 'lucide-react';

type Language = 'en' | 'fr';

const calendlyUrl =
  'https://calendly.com/anas-imps/diagnostic-strategique-acquisition-clients';

const translations = {
  en: {
    nav: {
      problem: 'The Problem',
      solution: 'Our Solution',
      process: 'Process',
      book: 'Book a Call',
    },
    hero: {
      badge: 'Now accepting 2 new agencies for Q2',
      titleMain: 'Predictable Pipeline',
      titleAccent: 'for B2B Marketing Agencies',
      subtitle:
        'We help B2B marketing agencies generate qualified sales meetings through cold email, LinkedIn outreach and targeted prospecting.',
      primaryCta: 'Book a Strategy Call',
      secondaryCta: 'See our process',
      stats: {
        meetings: 'Qualified meetings / month',
        system: 'Outbound acquisition system',
        roi: 'Focused on predictable pipeline',
      },
      visual: {
        campaign: 'Active Campaigns',
        meetings: 'Meetings Booked',
        replyRate: 'Reply Rate',
        pipeline: 'Pipeline Value',
        qualified: 'Qualified this week',
        deliverability: 'Deliverability',
        warm: 'Warm lead',
        booked: 'Booked call',
      },
    },
    problem: {
      title: 'The Referral Trap: Why Most Agencies Struggle to Scale',
      text:
        'Most marketing agencies are world-class at delivering results for clients, but they treat their own growth as an afterthought.',
      items: [
        'Relying solely on unpredictable referrals',
        "Inbound leads that aren't the right fit",
        "The 'feast or famine' revenue cycle",
        'No structured system to reach ideal clients',
      ],
      stats: {
        referrals: 'Predictability in referrals',
        inbound: 'Higher cost per inbound lead',
        outbound: 'Agencies lack an outbound system',
      },
    },
    solution: {
      title: 'A Structured Acquisition System',
      text:
        "We don't just send emails. We build a comprehensive outbound engine tailored to your agency's unique value proposition.",
      features: [
        {
          icon: Target,
          title: 'Ideal Customer Targeting',
          desc: 'We define exactly who your best clients are based on LTV, niche, and pain points.',
        },
        {
          icon: Database,
          title: 'Prospect Database Building',
          desc: 'Custom-built lists of decision-makers with verified contact data. No generic scrapers.',
        },
        {
          icon: Mail,
          title: 'Cold Email Campaigns',
          desc: 'High-deliverability infrastructure and copy that actually gets replies, not spam reports.',
        },
        {
          icon: Linkedin,
          title: 'LinkedIn Outreach',
          desc: 'Omnichannel approach to stay top-of-mind where your prospects spend their time.',
        },
        {
          icon: Users,
          title: 'Lead Qualification',
          desc: 'We filter out the noise so you only talk to prospects who are ready and able to buy.',
        },
        {
          icon: Calendar,
          title: 'Meeting Booking',
          desc: 'Qualified sales meetings booked directly into your calendar. You just show up and close.',
        },
      ],
    },
    process: {
      title: 'How We Work',
      text:
        'Our 5-step process is designed to take you from zero outbound to a predictable flow of meetings in 30 days.',
      learnMore: 'Learn more about our methodology',
      steps: [
        {
          step: '01',
          title: 'Define Ideal Customer Profile',
          desc: 'We analyze your past successes to identify the industries, company sizes, and job titles that yield the highest ROI.',
        },
        {
          step: '02',
          title: 'Build Prospect Database',
          desc: 'Using premium data sources, we build a clean, verified list of decision-makers matching your ICP.',
        },
        {
          step: '03',
          title: 'Launch Outbound Campaigns',
          desc: 'We deploy personalized, multi-channel sequences that cut through the noise and start conversations.',
        },
        {
          step: '04',
          title: 'Qualify Leads',
          desc: 'Our team handles the initial back-and-forth to ensure every prospect meets your minimum criteria.',
        },
        {
          step: '05',
          title: 'Book Meetings',
          desc: 'We sync with your calendar to book meetings directly, providing you with full context before the call.',
        },
      ],
    },
    cta: {
      title: 'Ready to build your predictable sales engine?',
      text:
        'Book a 15-minute strategy call to see if your agency is a fit for our outbound system.',
      button: 'Book My Strategy Call',
      badges: [
        'No Long-Term Contracts',
        'Guaranteed Meetings',
        'Exclusive Territory',
      ],
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  fr: {
    nav: {
      problem: 'Le Problème',
      solution: 'Notre Solution',
      process: 'Process',
      book: 'Réserver un appel',
    },
    hero: {
      badge: 'Nous acceptons 2 nouvelles agences pour le Q2',
      titleMain: 'Pipeline Prévisible',
      titleAccent: 'pour les agences marketing B2B',
      subtitle:
        'Nous aidons les agences marketing B2B à générer des rendez-vous commerciaux qualifiés grâce au cold email, à l’outreach LinkedIn et à une prospection ciblée.',
      primaryCta: 'Réserver un appel stratégique',
      secondaryCta: 'Voir notre process',
      stats: {
        meetings: 'Rendez-vous qualifiés / mois',
        system: 'Système d’acquisition outbound',
        roi: 'Axé sur un pipeline prévisible',
      },
      visual: {
        campaign: 'Campagnes actives',
        meetings: 'Rendez-vous bookés',
        replyRate: 'Taux de réponse',
        pipeline: 'Valeur pipeline',
        qualified: 'Qualifiés cette semaine',
        deliverability: 'Délivrabilité',
        warm: 'Lead chaud',
        booked: 'Appel réservé',
      },
    },
    problem: {
      title:
        'Le piège du bouche-à-oreille : pourquoi la plupart des agences peinent à scaler',
      text:
        'La plupart des agences marketing sont excellentes pour obtenir des résultats pour leurs clients, mais elles négligent souvent leur propre acquisition.',
      items: [
        'Dépendance à des recommandations imprévisibles',
        'Des leads entrants qui ne sont pas les bons',
        'Un cycle de revenus irrégulier',
        'Aucun système structuré pour atteindre les clients idéaux',
      ],
      stats: {
        referrals: 'Prévisibilité des recommandations',
        inbound: 'Coût plus élevé par lead entrant',
        outbound: 'Des agences sans système outbound',
      },
    },
    solution: {
      title: 'Un système d’acquisition structuré',
      text:
        'Nous n’envoyons pas seulement des emails. Nous construisons un moteur outbound complet adapté à la proposition de valeur unique de votre agence.',
      features: [
        {
          icon: Target,
          title: 'Ciblage du client idéal',
          desc: 'Nous définissons précisément qui sont vos meilleurs clients selon la LTV, la niche et les pain points.',
        },
        {
          icon: Database,
          title: 'Construction de base de prospects',
          desc: 'Des listes sur mesure de décideurs avec des données de contact vérifiées. Pas de scraping générique.',
        },
        {
          icon: Mail,
          title: 'Campagnes de cold email',
          desc: 'Une infrastructure à haute délivrabilité et des messages qui génèrent de vraies réponses.',
        },
        {
          icon: Linkedin,
          title: 'Outreach LinkedIn',
          desc: 'Une approche omnicanale pour rester visible là où vos prospects passent leur temps.',
        },
        {
          icon: Users,
          title: 'Qualification des leads',
          desc: 'Nous filtrons le bruit pour que vous ne parliez qu’à des prospects pertinents.',
        },
        {
          icon: Calendar,
          title: 'Prise de rendez-vous',
          desc: 'Des rendez-vous qualifiés directement dans votre agenda. Vous n’avez plus qu’à closer.',
        },
      ],
    },
    process: {
      title: 'Comment nous travaillons',
      text:
        'Notre processus en 5 étapes est conçu pour vous faire passer de zéro outbound à un flux prévisible de rendez-vous en 30 jours.',
      learnMore: 'En savoir plus sur notre méthodologie',
      steps: [
        {
          step: '01',
          title: 'Définir le client idéal',
          desc: 'Nous analysons vos succès passés pour identifier les secteurs, tailles d’entreprise et postes qui génèrent le meilleur ROI.',
        },
        {
          step: '02',
          title: 'Construire la base de prospects',
          desc: 'À partir de sources premium, nous créons une liste propre et vérifiée de décideurs correspondant à votre ICP.',
        },
        {
          step: '03',
          title: 'Lancer les campagnes outbound',
          desc: 'Nous déployons des séquences personnalisées et multicanales qui ouvrent des conversations.',
        },
        {
          step: '04',
          title: 'Qualifier les leads',
          desc: 'Notre équipe gère les premiers échanges pour s’assurer que chaque prospect correspond à vos critères.',
        },
        {
          step: '05',
          title: 'Booker les rendez-vous',
          desc: 'Nous synchronisons avec votre agenda pour réserver directement les appels qualifiés.',
        },
      ],
    },
    cta: {
      title: 'Prêt à construire votre moteur commercial prévisible ?',
      text:
        'Réservez un appel stratégique de 15 minutes pour voir si votre agence est adaptée à notre système outbound.',
      button: 'Réserver mon appel stratégique',
      badges: [
        'Sans contrat long terme',
        'Rendez-vous garantis',
        'Territoire exclusif',
      ],
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
  },
} as const;

const Navbar = ({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}) => {
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
            <TrendingUp className="text-white w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-950">
            PipelineFlow
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#problem" className="hover:text-blue-700 transition-colors">
            {t.nav.problem}
          </a>
          <a href="#solution" className="hover:text-blue-700 transition-colors">
            {t.nav.solution}
          </a>
          <a href="#process" className="hover:text-blue-700 transition-colors">
            {t.nav.process}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 sm:px-3 py-1 rounded-full border text-xs sm:text-sm transition-all ${
                language === 'en'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 sm:px-3 py-1 rounded-full border text-xs sm:text-sm transition-all ${
                language === 'fr'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              FR
            </button>
          </div>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
          >
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">{t.nav.book}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const HeroVisual = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="relative w-full max-w-xl mx-auto"
    >
      <div className="absolute -top-12 -right-8 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl" />

      <div className="relative rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-xl shadow-2xl shadow-blue-200/40 overflow-hidden">
        <div className="border-b border-slate-200 px-5 py-4 flex items-center justify-between bg-white/80">
          <div>
            <div className="text-sm font-semibold text-slate-950">{t.hero.visual.campaign}</div>
            <div className="text-xs text-slate-500">PipelineFlow Dashboard</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wide text-slate-500">
                  {t.hero.visual.meetings}
                </span>
                <Calendar className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-950">18</div>
              <div className="text-xs text-emerald-600 mt-1">+22% this month</div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wide text-slate-500">
                  {t.hero.visual.replyRate}
                </span>
                <Activity className="w-4 h-4 text-sky-500" />
              </div>
              <div className="text-3xl font-bold text-slate-950">12.4%</div>
              <div className="text-xs text-emerald-600 mt-1">Above benchmark</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-slate-950">
                {t.hero.visual.pipeline}
              </span>
              <BarChart3 className="w-4 h-4 text-blue-600" />
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{t.hero.visual.qualified}</span>
                  <span>74%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-blue-600 to-sky-400"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>{t.hero.visual.deliverability}</span>
                  <span>97%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full w-[97%] rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-slate-950">Lead Activity</div>
              <span className="inline-flex items-center gap-1 text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                <Sparkles className="w-3 h-3" />
                Live
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
                <div>
                  <div className="text-sm font-medium text-slate-950">Growth Agency</div>
                  <div className="text-xs text-slate-500">{t.hero.visual.warm}</div>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  Interested
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
                <div>
                  <div className="text-sm font-medium text-slate-950">SEO Agency</div>
                  <div className="text-xs text-slate-500">{t.hero.visual.booked}</div>
                </div>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  Friday 10:30
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50 via-sky-50/50 to-slate-50">
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:48px_48px]"></div>
      </div>

      <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] bg-blue-500/15 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[28rem] h-[28rem] bg-sky-400/15 rounded-full blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t.hero.badge}
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-slate-950 mb-6 leading-[1.02]">
              {t.hero.titleMain}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                {t.hero.titleAccent}
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-500/20"
              >
                {t.hero.primaryCta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#process"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-all text-center shadow-sm"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 shadow-lg shadow-blue-100/30">
                <div className="text-2xl font-bold text-slate-950 mb-1">15-30</div>
                <div className="text-sm text-slate-600">{t.hero.stats.meetings}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 shadow-lg shadow-blue-100/30">
                <div className="text-2xl font-bold text-slate-950 mb-1">B2B</div>
                <div className="text-sm text-slate-600">{t.hero.stats.system}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 shadow-lg shadow-blue-100/30">
                <div className="text-2xl font-bold text-slate-950 mb-1">ROI</div>
                <div className="text-sm text-slate-600">{t.hero.stats.roi}</div>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:block">
            <HeroVisual language={language} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <section id="problem" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {t.problem.title}
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {t.problem.text}
            </p>

            <div className="space-y-6">
              {t.problem.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertCircle className="text-sky-400 w-6 h-6 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-lg shadow-blue-950/20">
                <div className="text-3xl font-bold mb-1 text-white">0%</div>
                <div className="text-slate-500 text-sm">{t.problem.stats.referrals}</div>
              </div>
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 mt-8 shadow-lg shadow-blue-950/20">
                <div className="text-3xl font-bold mb-1 text-white">4.2x</div>
                <div className="text-slate-500 text-sm">{t.problem.stats.inbound}</div>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-lg shadow-blue-950/20">
                <div className="text-3xl font-bold mb-1 text-white">82%</div>
                <div className="text-slate-500 text-sm">{t.problem.stats.outbound}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Solution = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <section id="solution" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-950">
            {t.solution.title}
          </h2>
          <p className="text-slate-600 text-xl">{t.solution.text}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.solution.features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl border border-slate-200 bg-white hover:bg-white hover:shadow-2xl hover:shadow-blue-100/40 transition-all"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                <feature.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-slate-950">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <section id="process" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-100/70">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="font-display text-4xl font-bold mb-6 text-slate-950">
                {t.process.title}
              </h2>
              <p className="text-slate-600 text-lg mb-8">{t.process.text}</p>
              <button className="text-blue-700 font-semibold flex items-center gap-2 group">
                {t.process.learnMore}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12">
            {t.process.steps.map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="font-display text-4xl font-bold text-slate-300 group-hover:text-blue-600 transition-colors duration-500">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-3 text-slate-950">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PilotProgram = ({ language }: { language: Language }) => {
  const content =
    language === 'fr'
      ? {
          badge: '🔒 Limité à 2 agences',
          title: 'Rejoignez notre programme clients fondateurs',
          subtitle:
            'Nous intégrons 2 agences pilotes à un tarif réduit en échange d’un cas client et d’un témoignage.',
          priceTitle: 'Tarif',
          priceMain: '1 500€ / mois',
          priceOld: 'Au lieu de 3 500€',
          priceNote: 'tarif pilote · 2 places seulement',
          getTitle: 'Ce que vous obtenez',
          getItems: [
            'Full outbound system setup',
            '15-30 qualified meetings/month',
            'Cold email + LinkedIn sequences',
            'Dedicated account manager',
            'Weekly reporting',
          ],
          askTitle: 'Ce qu’on demande',
          askItems: [
            '3-month commitment',
            'Honest feedback',
            '1 written testimonial',
            '1 case study (anonymized ok)',
          ],
          cta: 'Postuler pour une place pilote →',
          note:
            'Sans contrat long terme. Résiliation possible à tout moment après le 1er mois.',
        }
      : {
          badge: '🔒 Limited to 2 agencies',
          title: 'Join Our Founding Client Program',
          subtitle:
            "We're onboarding 2 pilot agencies at a reduced rate in exchange for a case study and testimonial.",
          priceTitle: 'Pricing',
          priceMain: '1 500€ / month',
          priceOld: 'Instead of 3 500€',
          priceNote: 'pilot rate · 2 spots only',
          getTitle: 'What you get',
          getItems: [
            'Full outbound system setup',
            '15-30 qualified meetings/month',
            'Cold email + LinkedIn sequences',
            'Dedicated account manager',
            'Weekly reporting',
          ],
          askTitle: 'What we ask',
          askItems: [
            '3-month commitment',
            'Honest feedback',
            '1 written testimonial',
            '1 case study (anonymized ok)',
          ],
          cta: 'Apply for a Pilot Spot →',
          note: 'No long-term contract. Cancel anytime after month 1.',
        };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-xs font-semibold mb-6 shadow-sm">
            {content.badge}
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 text-white">
            {content.title}
          </h2>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-blue-700/40 bg-gradient-to-br from-blue-950/60 to-slate-900/90 p-8 shadow-xl shadow-blue-900/20">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 mb-5">
              {content.priceTitle}
            </div>
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
              {content.priceMain}
            </div>
            <div className="text-slate-400 text-lg line-through mb-2">
              {content.priceOld}
            </div>
            <div className="text-orange-300 text-sm font-medium">
              {content.priceNote}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg shadow-black/20">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 mb-5">
              {content.getTitle}
            </div>
            <div className="space-y-4">
              {content.getItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg shadow-black/20">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 mb-5">
              {content.askTitle}
            </div>
            <div className="space-y-4">
              {content.askItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
          >
            {content.cta}
          </a>

          <p className="mt-4 text-sm text-slate-400">{content.note}</p>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto">
              {t.cta.title}
            </h2>
            <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto">
              {t.cta.text}
            </p>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all inline-flex items-center gap-3 shadow-lg shadow-white/10"
            >
              {t.cta.button}
              <Calendar className="w-6 h-6" />
            </a>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400 text-sm font-medium uppercase tracking-widest">
              {t.cta.badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/40 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-400/30 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <footer className="py-12 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <TrendingUp className="text-white w-4 h-4" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-slate-950">
            PipelineFlow
          </span>
        </div>

        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} PipelineFlow. {t.footer.rights}
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Problem language={language} />
        <Solution language={language} />
        <Process language={language} />
        <PilotProgram language={language} />
        <CTA language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}