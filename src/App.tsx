/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  ChevronRight
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-200">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
          <TrendingUp className="text-white w-5 h-5" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight">PipelineFlow</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
        <a href="#problem" className="hover:text-black transition-colors">The Problem</a>
        <a href="#solution" className="hover:text-black transition-colors">Our Solution</a>
        <a href="#process" className="hover:text-black transition-colors">Process</a>
      </div>
      <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all">
        Book a Call
      </button>
    </div>
  </nav>
);

const Hero = () => (
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
          Now accepting 2 new agencies for Q2
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
         Predictable Pipeline
for B2B Marketing Agencies <span className="text-zinc-500">B2B Marketing Agencies</span>
        </h1>
        <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl">
          We help B2B marketing agencies generate qualified sales meetings through cold email, LinkedIn outreach and targeted prospecting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
  href="https://calendly.com/anas-imps/diagnostic-strategique-acquisition-clients"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 transition-all flex items-center gap-2"
>
  Book a Strategy Call
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>
        </div>
      </motion.div>
    </div>
    
    {/* Background elements */}
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-400 rounded-full blur-[100px]"></div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="section-padding bg-zinc-900 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
            The Referral Trap: Why Most Agencies Struggle to Scale
          </h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Most marketing agencies are world-class at delivering results for clients, but they treat their own growth as an afterthought.
          </p>
          <div className="space-y-6">
            {[
              "Relying solely on unpredictable referrals",
              "Inbound leads that aren't the right fit",
              "The 'feast or famine' revenue cycle",
              "No structured system to reach ideal clients"
            ].map((item, i) => (
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
              <div className="text-zinc-500 text-sm">Predictability in referrals</div>
            </div>
            <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 mt-8">
              <div className="text-3xl font-bold mb-1">4.2x</div>
              <div className="text-zinc-500 text-sm">Higher cost per inbound lead</div>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700">
              <div className="text-3xl font-bold mb-1">82%</div>
              <div className="text-zinc-500 text-sm">Agencies lack an outbound system</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solution" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          A Structured Acquisition System
        </h2>
        <p className="text-zinc-600 text-xl">
          We don't just send emails. We build a comprehensive outbound engine tailored to your agency's unique value proposition.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Target,
            title: "Ideal Customer Targeting",
            desc: "We define exactly who your best clients are based on LTV, niche, and pain points."
          },
          {
            icon: Database,
            title: "Prospect Database Building",
            desc: "Custom-built lists of decision-makers with verified contact data. No generic scrapers."
          },
          {
            icon: Mail,
            title: "Cold Email Campaigns",
            desc: "High-deliverability infrastructure and copy that actually gets replies, not spam reports."
          },
          {
            icon: Linkedin,
            title: "LinkedIn Outreach",
            desc: "Omnichannel approach to stay top-of-mind where your prospects spend their time."
          },
          {
            icon: Users,
            title: "Lead Qualification",
            desc: "We filter out the noise so you only talk to prospects who are ready and able to buy."
          },
          {
            icon: Calendar,
            title: "Meeting Booking",
            desc: "Qualified sales meetings booked directly into your calendar. You just show up and close."
          }
        ].map((feature, i) => (
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

const Process = () => (
  <section id="process" className="section-padding bg-zinc-50">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="font-display text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-zinc-600 text-lg mb-8">
              Our 5-step process is designed to take you from zero outbound to a predictable flow of meetings in 30 days.
            </p>
            <button className="text-black font-semibold flex items-center gap-2 group">
              Learn more about our methodology
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="lg:w-2/3 space-y-12">
          {[
            { step: "01", title: "Define Ideal Customer Profile", desc: "We analyze your past successes to identify the industries, company sizes, and job titles that yield the highest ROI." },
            { step: "02", title: "Build Prospect Database", desc: "Using premium data sources, we build a clean, verified list of decision-makers matching your ICP." },
            { step: "03", title: "Launch Outbound Campaigns", desc: "We deploy personalized, multi-channel sequences that cut through the noise and start conversations." },
            { step: "04", title: "Qualify Leads", desc: "Our team handles the initial back-and-forth to ensure every prospect meets your minimum criteria." },
            { step: "05", title: "Book Meetings", desc: "We sync with your calendar to book meetings directly, providing you with full context before the call." }
          ].map((item, i) => (
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

const CTA = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="bg-black rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto">
            Ready to build your predictable sales engine?
          </h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
            Book a 15-minute strategy call to see if your agency is a fit for our outbound system.
          </p>
          <button className="bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-zinc-100 transition-all inline-flex items-center gap-3">
            Book My Strategy Call
            <Calendar className="w-6 h-6" />
          </button>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-zinc-500 text-sm font-medium uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              No Long-Term Contracts
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Guaranteed Meetings
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Exclusive Territory
            </div>
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-zinc-500 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-zinc-200">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
          <TrendingUp className="text-white w-4 h-4" />
        </div>
        <span className="font-display font-bold text-lg tracking-tight">PipelineFlow</span>
      </div>
      <div className="text-zinc-500 text-sm">
        © {new Date().getFullYear()} PipelineFlow. All rights reserved.
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

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
