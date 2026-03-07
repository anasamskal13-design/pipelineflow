/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
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

type Translations = typeof translations;

const Navbar = ({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}) => {
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <TrendingUp className="text-white w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">PipelineFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#problem" className="hover:text-black transition-colors">
            {t.nav.problem}
          </a>
          <a href="#solution" className="hover:text-black transition-colors">
            {t.nav.solution}
          </a>
          <a href="#process" className="hover:text-black transition-colors">
            {t.nav.process}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-sm">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full border ${
                language === 'en'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-zinc-700 border-zinc-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded-full border ${
                language === 'fr'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-zinc-700 border-zinc-200'
              }`}
            >
              FR
            </button>
          </div>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
          >
            {t.nav.book}
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t.hero.badge}
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
            {t.hero.titleMain}{' '}
            <span className="text-zinc-500">{t.hero.titleAccent}</span>
          </h1>

          <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group"
            >
              {t.hero.primaryCta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#process"
              className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-50 transition-all text-center"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-400 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
};

const Problem = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <section id="problem" className="section-padding bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {t.problem.title}
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              {t.problem.text}
            </p>

            <div className="space-y-6">
              {t.problem.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertCircle className="text-red-400 w-6 h-6 shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700">
                <div className="text-3xl font-bold mb-1">0%</div>
                <div className="text-zinc-500 text-sm">{t.problem.stats.referrals}</div>
              </div>
              <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 mt-8">
                <div className="text-3xl font-bold mb-1">4.2x</div>
                <div className="text-zinc-500 text-sm">{t.problem.stats.inbound}</div>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700">
                <div className="text-3xl font-bold mb-1">82%</div>
                <div className="text-zinc-500 text-sm">{t.problem.stats.outbound}</div>
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
    <section id="solution" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t.solution.title}
          </h2>
          <p className="text-zinc-600 text-xl">{t.solution.text}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
   {t.solution.features.map((feature, i) => (
  <motion.div
    key={i}
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all"
  >
    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
      <feature.icon className="text-white w-6 h-6" />
    </div>
    <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
    <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
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
    <section id="process" className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="font-display text-4xl font-bold mb-6">{t.process.title}</h2>
              <p className="text-zinc-600 text-lg mb-8">{t.process.text}</p>
              <button className="text-black font-semibold flex items-center gap-2 group">
                {t.process.learnMore}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12">
           {t.process.steps.map((item, i) => (
  <div key={i} className="flex gap-8 group">
    <div className="font-display text-4xl font-bold text-zinc-200 group-hover:text-black transition-colors duration-500">
      {item.step}
    </div>
    <div className="pt-2">
      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
      <p className="text-zinc-600 text-lg leading-relaxed">{item.desc}</p>
    </div>
  </div>
))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto">
              {t.cta.title}
            </h2>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
              {t.cta.text}
            </p>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-zinc-100 transition-all inline-flex items-center gap-3"
            >
              {t.cta.button}
              <Calendar className="w-6 h-6" />
            </a>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-zinc-500 text-sm font-medium uppercase tracking-widest">
              {t.cta.badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-zinc-500 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <footer className="py-12 px-6 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
            <TrendingUp className="text-white w-4 h-4" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">PipelineFlow</span>
        </div>

        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} PipelineFlow. {t.footer.rights}
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-zinc-400 hover:text-black transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-black transition-colors">
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
    <div className="min-h-screen">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Problem language={language} />
        <Solution language={language} />
        <Process language={language} />
        <CTA language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}