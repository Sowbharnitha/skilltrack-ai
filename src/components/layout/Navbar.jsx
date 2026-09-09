import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, Shield, ArrowRight, Layers, Compass, BarChart3, UserCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentRole, currentUser } = useAuth();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Workforce Impact', href: '#impact' },
    { name: 'About SIH26135', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top official banner */}
      <div className="bg-slate-900 text-white text-[11px] py-1 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded">
              SIH 2026
            </span>
            <span className="hidden sm:inline text-slate-300">
              Smart India Hackathon • Problem Statement SIH26135
            </span>
            <span className="sm:hidden text-slate-300">SIH26135</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="hidden md:inline">Ministry of Skill Development & Entrepreneurship Aligned</span>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Live Prototype
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-lg tracking-tight">SkillTrack</span>
              <span className="font-black text-indigo-600 text-lg">AI</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-slate-500 -mt-1 hidden sm:block">Workforce Intelligence & Retention Platform</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Login
          </Link>
          <Link
            to={currentUser.baseRoute || '/student'}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 group"
          >
            <span>Explore Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/login"
            className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg"
          >
            Login
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-indigo-600"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg"
            >
              Login to Account
            </Link>
            <Link
              to={currentUser.baseRoute || '/student'}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg"
            >
              Launch Demo Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
