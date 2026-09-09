import React from 'react';
import { Layers, Shield, ExternalLink, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">SkillTrack AI</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              AI-powered employment outcome tracking, skill gap intelligence, and longitudinal retention verification for India's skilling ecosystem.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800 text-[11px] text-indigo-300 border border-slate-700">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>DPDP Act 2023 Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Platform Personas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/student" className="hover:text-indigo-400 transition-colors">Trainee & Student Portal</a></li>
              <li><a href="/employer" className="hover:text-indigo-400 transition-colors">Employer Verification Portal</a></li>
              <li><a href="/institute" className="hover:text-indigo-400 transition-colors">Training Institute Workspace</a></li>
              <li><a href="/admin" className="hover:text-indigo-400 transition-colors">Government Macro Intelligence</a></li>
            </ul>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/student/skill-gap" className="hover:text-indigo-400 transition-colors">AI Skill Gap Engine</a></li>
              <li><a href="/student/employment" className="hover:text-indigo-400 transition-colors">Multi-Source Verification (EPFO/OCR)</a></li>
              <li><a href="/student/followups" className="hover:text-indigo-400 transition-colors">Automated 1M-12M Follow-ups</a></li>
              <li><a href="/admin/reports" className="hover:text-indigo-400 transition-colors">Longitudinal Retention Analytics</a></li>
            </ul>
          </div>

          {/* Hackathon Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Smart India Hackathon 2026
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Built for Problem Statement <strong>SIH26135</strong>: "Privacy-conscious platform to track employment outcomes, verify jobs, and deliver AI career recommendations post skill training."
            </p>
            <div className="text-[11px] text-slate-500">
              Technology: React 18, Vite, Tailwind CSS, Recharts, Lucide
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 SkillTrack AI Platform. Prototype for Smart India Hackathon 2026.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400">Data Privacy Architecture</span>
            <span className="hover:text-slate-400">Security Whitepaper</span>
            <span className="hover:text-slate-400">API Documentation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
