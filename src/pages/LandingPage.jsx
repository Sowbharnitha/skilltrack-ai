import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp,
  BarChart3, Users, Briefcase, Lock, Layers, Award, FileSearch,
  Check, ChevronRight, Zap
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useAuth } from '../context/AuthContext';
import { ConfidenceGauge } from '../components/verification/ConfidenceGauge';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { switchRole } = useAuth();

  const handleLaunchPersona = (role, route) => {
    switchRole(role);
    navigate(route);
  };

  const featureCards = [
    {
      title: "Employment Tracking",
      description: "Continuous longitudinal tracking of trainees across formal employment, apprenticeships, and entrepreneurship.",
      icon: Briefcase,
      color: "bg-blue-50 text-blue-600 border-blue-100",
      accent: "text-blue-600"
    },
    {
      title: "AI Skill Gap Analysis",
      description: "Automated econometric comparison between trainee skills and live industry demand to pinpoint precise skill deficiencies.",
      icon: Sparkles,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
      accent: "text-indigo-600"
    },
    {
      title: "Employment Verification",
      description: "Multi-source cryptographic verification cross-referencing employer records, EPFO UAN, and trainee consent.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      accent: "text-emerald-600"
    },
    {
      title: "Career Recommendations",
      description: "AI-generated advancement roadmaps mapping optimal career transitions, wage forecasts, and targeted micro-credentials.",
      icon: Award,
      color: "bg-purple-50 text-purple-600 border-purple-100",
      accent: "text-purple-600"
    },
    {
      title: "Retention Analytics",
      description: "Tracks 3-month, 6-month, and 12-month workforce retention milestones to evaluate vocational training longevity.",
      icon: TrendingUp,
      color: "bg-amber-50 text-amber-600 border-amber-100",
      accent: "text-amber-600"
    },
    {
      title: "Privacy & Consent",
      description: "Granular data governance built strictly on India's Digital Personal Data Protection (DPDP) Act 2023 with full consent control.",
      icon: Lock,
      color: "bg-slate-100 text-slate-700 border-slate-200",
      accent: "text-slate-700"
    },
  ];

  const workflowSteps = [
    { step: "01", name: "TRAIN", desc: "Trainee completes NSQF-certified vocational skill training at accredited ITI or NSTI centers." },
    { step: "02", name: "TRACK", desc: "Automated pulse checks and EPFO UAN linkages establish real-time employment transition." },
    { step: "03", name: "VERIFY", desc: "Multi-source triangulation confirms employer hiring, offer letter, and salary credit with 90%+ confidence." },
    { step: "04", name: "ANALYZE", desc: "Wage progression and retention rates are audited longitudinally at 1, 3, 6, and 12 months." },
    { step: "05", name: "PREDICT", desc: "AI models diagnose industrial skill shortages and forecast local labour market wage shifts." },
    { step: "06", name: "IMPROVE", desc: "Actionable curriculum upgrades and subsidized re-skilling programs optimize public funding ROI." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* SIH Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold shadow-soft">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                <span>Smart India Hackathon 2026 • Problem Statement SIH26135</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                From Training to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Employment
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                AI-powered employment outcome tracking, skill gap analysis and career intelligence for better workforce development.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/login"
                  className="px-6 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <button
                  onClick={() => handleLaunchPersona('admin', '/admin')}
                  className="px-6 py-3.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-soft hover:shadow transition-all flex items-center gap-2"
                >
                  <BarChart3 className="w-4 h-4 text-indigo-600" />
                  <span>Explore Dashboard</span>
                </button>
              </div>

              {/* Persona Quick Launch Pills */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Instant Demo Portals:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <button
                    onClick={() => handleLaunchPersona('student', '/student')}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-medium transition-colors border border-slate-200"
                  >
                    Student / Trainee →
                  </button>
                  <button
                    onClick={() => handleLaunchPersona('employer', '/employer')}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-medium transition-colors border border-slate-200"
                  >
                    Employer (ABC Tech) →
                  </button>
                  <button
                    onClick={() => handleLaunchPersona('institute', '/institute')}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-medium transition-colors border border-slate-200"
                  >
                    Training Institute →
                  </button>
                  <button
                    onClick={() => handleLaunchPersona('admin', '/admin')}
                    className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold transition-colors border border-indigo-200"
                  >
                    Govt Admin (MoSDE) →
                  </button>
                </div>
              </div>
            </div>

            {/* Right Visual Dashboard Preview */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-xl opacity-20" />

                {/* Dashboard Preview Glass Card */}
                <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-elevation p-5 sm:p-6 space-y-5">
                  {/* Top bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs font-semibold text-slate-700 ml-2">SkillTrack Intelligence Hub</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                      LIVE DATA
                    </span>
                  </div>

                  {/* Profile Preview */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-lg shadow-sm">
                        AK
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Arun Kumar</h4>
                        <p className="text-xs text-slate-500">Junior Data Analyst • ABC Tech</p>
                        <p className="text-[10px] text-indigo-600 font-medium">PMKVY 4.0 Verified Batch</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      ✓ Verified
                    </span>
                  </div>

                  {/* Confidence Gauge Preview */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-slate-700">Employment Confidence Score</span>
                      <strong className="text-emerald-600 font-black">92%</strong>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }} />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1.5">
                      <span>Aadhaar OTP ✓</span>
                      <span>Employer HR ✓</span>
                      <span>EPFO UAN ✓</span>
                    </div>
                  </div>

                  {/* AI Recommendation Snippet */}
                  <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-xl p-4 text-white">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-indigo-200 flex items-center gap-1 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        AI Recommendation
                      </span>
                      <span className="text-amber-300 font-bold">87% Match</span>
                    </div>
                    <p className="text-sm font-bold">Target Role: Data Analyst</p>
                    <p className="text-[11px] text-indigo-200 mt-1">
                      Bridge Power BI & Advanced SQL to qualify for ₹3.5LPA+ roles.
                    </p>
                  </div>

                  {/* Wage Progression mini-stat */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Entry Salary</span>
                      <span className="text-sm font-bold text-slate-800">₹15,000/mo</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
                      <span className="text-emerald-700 text-[10px] uppercase font-bold block">12-Month Base</span>
                      <span className="text-sm font-bold text-emerald-800">₹27,000/mo (+80%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">125,430+</p>
              <p className="text-xs text-slate-400 mt-1">Trainees Tracked Nationally</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">91%</p>
              <p className="text-xs text-slate-400 mt-1">Multi-Source Verification Rate</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400">₹24,500</p>
              <p className="text-xs text-slate-400 mt-1">Average Starting Wage</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">74%</p>
              <p className="text-xs text-slate-400 mt-1">12-Month Retention Stability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section id="features" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Comprehensive Post-Training Intelligence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Empowering students, enterprises, training institutions, and policymakers with reliable, privacy-first employment analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-soft hover:shadow-card transition-card group"
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${feat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              System Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              How SkillTrack AI Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              A closed-loop, data-driven framework from classroom certification to longitudinal career advancement.
            </p>

            {/* Workflow Pipeline Text */}
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-700 bg-white px-4 py-2 rounded-full border border-indigo-200 shadow-soft">
              TRAIN → TRACK → VERIFY → ANALYZE → PREDICT → IMPROVE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-soft hover:shadow-card transition-all relative overflow-hidden"
              >
                <span className="text-3xl font-black text-indigo-100 absolute top-3 right-4 select-none">
                  {step.step}
                </span>
                <span className="inline-block text-xs font-extrabold px-2.5 py-1 rounded bg-indigo-50 text-indigo-600 mb-3">
                  Step {step.step}: {step.name}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIH 2026 Problem Statement Callout */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 rounded-2xl p-8 sm:p-12 text-white shadow-elevation text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold border border-white/20 mb-4">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              Smart India Hackathon 2026 Finalist Prototype
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Experience the Complete Demonstration?
            </h2>
            <p className="text-indigo-200 text-xs sm:text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
              Explore all 4 enterprise dashboards including Student Career Intelligence, Employer Verification, Training Institute Cohorts, and Government National Workforce Advisory.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/login"
                className="px-6 py-3 text-xs sm:text-sm font-bold text-indigo-900 bg-white hover:bg-indigo-50 rounded-xl shadow-md transition-all"
              >
                Sign In to Demo Portal
              </Link>
              <button
                onClick={() => handleLaunchPersona('admin', '/admin')}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-indigo-700/60 hover:bg-indigo-700 border border-white/20 rounded-xl transition-all"
              >
                Launch MoSDE Admin Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
