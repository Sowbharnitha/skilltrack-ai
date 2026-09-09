import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, User, Award, Briefcase, Sparkles, Compass, Clock,
  ShieldCheck, Lock, LogOut, Users, CheckSquare, FileText, BarChart3,
  BookOpen, Building2, MapPin, TrendingUp, Layers, HelpCircle, ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = ({ isOpen, onClose }) => {
  const { currentRole, currentUser, switchRole, roleProfiles } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Route definitions per persona
  const navConfig = {
    student: [
      { name: 'Dashboard', path: '/student', icon: LayoutDashboard, exact: true },
      { name: 'My Profile', path: '/student/profile', icon: User },
      { name: 'My Skills', path: '/student/skills', icon: Award },
      { name: 'Employment', path: '/student/employment', icon: Briefcase },
      { name: 'Skill Gap', path: '/student/skill-gap', icon: Sparkles, badge: 'AI' },
      { name: 'Career Recommendations', path: '/student/career', icon: Compass },
      { name: 'Follow-ups', path: '/student/followups', icon: Clock, badge: 'Due' },
      { name: 'Certificates', path: '/student/certificates', icon: ShieldCheck },
      { name: 'Privacy & Consent', path: '/student/privacy', icon: Lock },
    ],
    employer: [
      { name: 'Dashboard', path: '/employer', icon: LayoutDashboard, exact: true },
      { name: 'Employees', path: '/employer/employees', icon: Users },
      { name: 'Verify Employment', path: '/employer/verify', icon: CheckSquare, badge: '16 New' },
      { name: 'Job Roles', path: '/employer/jobs', icon: Briefcase },
      { name: 'Required Skills', path: '/employer/skills', icon: Award },
      { name: 'Feedback', path: '/employer/feedback', icon: FileText },
    ],
    institute: [
      { name: 'Dashboard', path: '/institute', icon: LayoutDashboard, exact: true },
      { name: 'Students', path: '/institute/students', icon: Users },
      { name: 'Courses', path: '/institute/courses', icon: BookOpen },
      { name: 'Training Outcomes', path: '/institute/outcomes', icon: TrendingUp },
      { name: 'Placement', path: '/institute/placement', icon: Briefcase },
      { name: 'Skill Gaps', path: '/institute/skill-gaps', icon: Sparkles },
      { name: 'Reports', path: '/institute/reports', icon: FileText },
    ],
    admin: [
      { name: 'Overview', path: '/admin', icon: LayoutDashboard, exact: true },
      { name: 'Trainees', path: '/admin/trainees', icon: Users },
      { name: 'Employment Outcomes', path: '/admin/employment', icon: TrendingUp },
      { name: 'Skill Gap Intelligence', path: '/admin/skill-gaps', icon: Sparkles, badge: 'AI' },
      { name: 'District Analytics', path: '/admin/districts', icon: MapPin },
      { name: 'Training Providers', path: '/admin/providers', icon: Building2 },
      { name: 'Programme Impact', path: '/admin/impact', icon: BarChart3 },
      { name: 'Reports', path: '/admin/reports', icon: FileText },
      { name: 'Privacy & Governance', path: '/admin/privacy', icon: Lock },
    ],
  };

  const currentNav = navConfig[currentRole] || navConfig.student;

  const handleLogout = () => {
    navigate('/login');
    if (onClose) onClose();
  };

  const handleSwitchPersona = (e) => {
    const newRole = e.target.value;
    switchRole(newRole);
    navigate(roleProfiles[newRole].baseRoute);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-slate-900 text-white flex flex-col transition-transform duration-200 ease-in-out border-r border-slate-800 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Branding */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <NavLink to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/30">
              <Layers className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 leading-none">
                <span className="font-bold text-white text-base tracking-tight">SkillTrack</span>
                <span className="font-extrabold text-indigo-400 text-base">AI</span>
              </div>
              <span className="text-[10px] text-slate-400 mt-0.5">SIH 2026 • SIH26135</span>
            </div>
          </NavLink>
        </div>

        {/* User Card */}
        <div className="p-4 mx-3 my-3 rounded-xl bg-slate-800/80 border border-slate-700/80 shrink-0">
          <div className="flex items-center gap-3">
            <img
              src={currentUser.avatar}
              alt={currentUser.displayName}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/50"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-semibold text-white truncate">{currentUser.displayName}</h4>
              <p className="text-[11px] text-indigo-300 font-medium truncate">{currentUser.roleLabel}</p>
              <p className="text-[10px] text-slate-400 truncate">{currentUser.subLabel}</p>
            </div>
          </div>

          {/* Quick Persona Switcher */}
          <div className="mt-3 pt-2.5 border-t border-slate-700/60">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block mb-1">
              Demo Persona Switcher
            </label>
            <select
              value={currentRole}
              onChange={handleSwitchPersona}
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="student">Student (Arun Kumar)</option>
              <option value="employer">Employer (ABC Tech)</option>
              <option value="institute">Training Institute (NSTI)</option>
              <option value="admin">Government Admin (MoSDE)</option>
            </select>
          </div>
        </div>

        {/* Nav list */}
        <div className="flex-1 px-3 py-2 overflow-y-auto space-y-1">
          <div className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {currentUser.roleLabel} Navigation
          </div>

          {currentNav.map((item) => {
            const Icon = item.icon;
            const isActive = item.exact
              ? location.pathname === item.path
              : location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => {
                  if (onClose && window.innerWidth < 1024) onClose();
                }}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span className="truncate">{item.name}</span>
                </div>

                {item.badge && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                    item.badge === 'AI' ? 'bg-amber-400 text-slate-950' :
                    item.badge.includes('New') || item.badge.includes('Due') ? 'bg-rose-500 text-white' : 'bg-indigo-500/40 text-indigo-200'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="p-3 border-t border-slate-800 shrink-0 space-y-1">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-slate-500" />
            <span>Public Portal & Landing</span>
          </NavLink>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Session</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
