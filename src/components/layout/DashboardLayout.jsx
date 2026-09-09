import React, { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Menu, Search, Shield, User, Sparkles } from 'lucide-react';
import Sidebar from './Sidebar';
import NotificationPanel from '../common/NotificationPanel';
import { useAuth } from '../../context/AuthContext';

export const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser, currentRole, switchRole, roleProfiles } = useAuth();
  const location = useLocation();

  // Determine current page title
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('profile')) return 'Trainee Profile & Credentials';
    if (path.includes('skill-gap')) return 'AI Skill Gap Intelligence & Learning Path';
    if (path.includes('skills')) return 'Skill Taxonomy & Assessments';
    if (path.includes('employment')) return 'Employment Verification & Retention Status';
    if (path.includes('career')) return 'AI Career Recommendations & Pathways';
    if (path.includes('followups')) return 'Automated Follow-up Tracking System';
    if (path.includes('certificates')) return 'Verifiable Digital Credentials (DigiLocker)';
    if (path.includes('privacy')) return 'Privacy, DPDP Compliance & Consent Center';
    if (path.includes('employees')) return 'Tracked Employee Roster & Verification';
    if (path.includes('verify')) return 'Employer Employment Verification Portal';
    if (path.includes('jobs')) return 'Job Roles & Industry Skill Requirements';
    if (path.includes('students')) return 'Trainee Cohort & Batch Management';
    if (path.includes('courses')) return 'NCVET Course Catalog & Performance';
    if (path.includes('outcomes')) return 'Training Outcome & Placement Analytics';
    if (path.includes('trainees')) return 'National Trainee Registry';
    if (path.includes('districts')) return 'District Performance & Placement Heatmap';
    if (path.includes('providers')) return 'Training Provider Quality League';
    if (path.includes('impact')) return 'Scheme Impact & Wage Multiplier Analysis';
    if (path.includes('reports')) return 'Analytics Reports & Compliance Export';
    return `${currentUser.roleLabel} Dashboard`;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Responsive Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Container */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 h-16 bg-white/95 backdrop-blur border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 flex items-center justify-between shadow-soft">
          {/* Left: Mobile hamburger & Page Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight truncate">
                  {getPageTitle()}
                </h1>
                <span className="hidden sm:inline-flex text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase">
                  SIH26135
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden md:block">
                SkillTrack AI • Ministry of Skill Development & Entrepreneurship
              </p>
            </div>
          </div>

          {/* Right: Search, Persona dropdown, Notifications, Avatar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search */}
            <div className="hidden md:flex items-center relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3" />
              <input
                type="text"
                placeholder="Search skills, trainees, UAN..."
                className="pl-9 pr-3 py-1.5 text-xs bg-slate-100 border border-slate-200 rounded-lg w-48 lg:w-60 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>

            {/* Quick Persona Pills */}
            <div className="hidden xl:flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[11px]">
              {Object.keys(roleProfiles).map((roleKey) => (
                <button
                  key={roleKey}
                  onClick={() => switchRole(roleKey)}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    currentRole === roleKey
                      ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {roleKey === 'student' ? 'Student' :
                   roleKey === 'employer' ? 'Employer' :
                   roleKey === 'institute' ? 'Institute' : 'Admin'}
                </button>
              ))}
            </div>

            {/* Notifications Dropdown */}
            <NotificationPanel />

            {/* User Profile Thumbnail */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <img
                src={currentUser.avatar}
                alt={currentUser.displayName}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/30"
              />
              <div className="hidden sm:block text-left">
                <span className="text-xs font-semibold text-slate-800 block leading-tight truncate max-w-[120px]">
                  {currentUser.displayName}
                </span>
                <span className="text-[10px] text-slate-500 block leading-none">
                  {currentUser.roleLabel}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
