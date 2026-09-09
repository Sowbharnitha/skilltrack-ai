import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layers, ShieldCheck, ArrowRight, Sparkles, User, Building2, BookOpen, Landmark, Lock } from 'lucide-react';
import { useAuth, roleProfiles } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { switchRole } = useAuth();

  const [email, setEmail] = useState('arun.kumar@alumni.skilltrack.gov.in');
  const [password, setPassword] = useState('••••••••••••');
  const [selectedRole, setSelectedRole] = useState('student');

  const handleLogin = (e) => {
    e?.preventDefault();
    switchRole(selectedRole);
    const targetRoute = roleProfiles[selectedRole]?.baseRoute || '/student';
    navigate(targetRoute);
  };

  const handleDemoClick = (roleKey) => {
    setSelectedRole(roleKey);
    switchRole(roleKey);
    navigate(roleProfiles[roleKey].baseRoute);
  };

  const roleOptions = [
    { key: 'student', label: 'Student', desc: 'Arun Kumar (PMKVY Trainee)', icon: User, route: '/student' },
    { key: 'employer', label: 'Employer', desc: 'ABC Technologies (HR Portal)', icon: Building2, route: '/employer' },
    { key: 'institute', label: 'Training Institute', desc: 'NSTI Bengaluru (NCVET)', icon: BookOpen, route: '/institute' },
    { key: 'admin', label: 'Government Admin', desc: 'MoSDE National Workforce', icon: Landmark, route: '/admin' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Brand Bar */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tight">
            SkillTrack <span className="text-indigo-600">AI</span>
          </span>
        </Link>
        <p className="mt-1 text-xs text-slate-500 font-medium">
          National Post-Training Employment Outcome & Career Platform
        </p>
        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-700">
          <span>Smart India Hackathon 2026 • SIH26135</span>
        </div>
      </div>

      {/* Main Login Card */}
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 sm:px-8 shadow-card rounded-2xl border border-slate-200/80">
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Role Dropdown */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                Select Your Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
              >
                <option value="student">Student</option>
                <option value="employer">Employer</option>
                <option value="institute">Training Institute</option>
                <option value="admin">Government Admin</option>
              </select>
            </div>

            {/* Email / User ID */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                Email / User ID
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
                placeholder="Enter your registered email or Aadhaar/ID"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Password
                </label>
                <span className="text-[11px] text-indigo-600 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-none transition-all"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs text-slate-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-indigo-600 focus:ring-indigo-500" />
                <span>Remember this session</span>
              </label>
              <span className="text-[11px] text-slate-400">DPDP Encrypted</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2.5">
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5"
              >
                <span>Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleLogin()}
                className="w-full py-2.5 px-4 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl transition-all"
              >
                Continue as Demo User
              </button>
            </div>
          </form>

          {/* Quick Demo Role Cards (for Hackathon Judges) */}
          <div className="mt-6 pt-5 border-t border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 text-center">
              1-Click Instant Demo Portals
            </span>

            <div className="grid grid-cols-2 gap-2">
              {roleOptions.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleDemoClick(item.key)}
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/50 text-left transition-all group"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon className="w-3.5 h-3.5 text-indigo-600 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 block truncate leading-tight">
                      {item.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom helper */}
        <div className="mt-4 text-center">
          <Link to="/" className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors">
            ← Return to SkillTrack AI Public Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
