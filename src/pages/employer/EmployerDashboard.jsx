import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users, CheckCircle2, Clock, Award, Briefcase, ChevronRight,
  ShieldCheck, Check, Filter, Search, Building2, Plus
} from 'lucide-react';
import StatCard from '../../components/common/StatCard';
import StatusBadge from '../../components/common/StatusBadge';
import { employerData } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';

export const EmployerDashboard = () => {
  const navigate = useNavigate();
  const { employeesList, verifyEmployee } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState('All');

  const { company, kpiCards, jobRequirements } = employerData;

  const filteredEmployees = employeesList.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          emp.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          emp.jobRole.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRoleFilter === 'All' || emp.jobRole === selectedRoleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">{company.name}</h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              Corporate HR Portal
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Sector: <strong>{company.sector}</strong> • {company.location} • Portal ID: <span className="font-mono">{company.id}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/employer/jobs')}
            className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
          >
            Post Job Requirement
          </button>
          <button
            onClick={() => navigate('/employer/verify')}
            className="px-3.5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verify Trainees (16)</span>
          </button>
        </div>
      </div>

      {/* 4 KPI Cards per Section 4 specs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title={kpiCards.totalEmployees.title}
          value={kpiCards.totalEmployees.value}
          change={kpiCards.totalEmployees.change}
          subtext={kpiCards.totalEmployees.subtext}
          icon={Users}
          accentColor="indigo"
        />

        <StatCard
          title={kpiCards.verifiedEmployees.title}
          value={kpiCards.verifiedEmployees.value}
          change={kpiCards.verifiedEmployees.change}
          subtext={kpiCards.verifiedEmployees.subtext}
          icon={CheckCircle2}
          accentColor="emerald"
        />

        <StatCard
          title={kpiCards.pendingVerification.title}
          value={kpiCards.pendingVerification.value}
          status="Action Needed"
          subtext={kpiCards.pendingVerification.subtext}
          icon={Clock}
          accentColor="amber"
        />

        <StatCard
          title={kpiCards.skillMatchAverage.title}
          value={kpiCards.skillMatchAverage.value}
          change={kpiCards.skillMatchAverage.change}
          subtext={kpiCards.skillMatchAverage.subtext}
          icon={Award}
          accentColor="blue"
        />
      </div>

      {/* Main Grid: Employee Table + Job Requirements Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Employee Table with "Verify" buttons (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200/80 shadow-soft overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Tracked Trainee Employees</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Live verification status of trainees placed through National Skill Development Corporation.
                </p>
              </div>

              {/* Search input */}
              <div className="relative min-w-[200px]">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold uppercase tracking-wider">
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Employee ID</th>
                    <th className="py-3 px-4">Job Role</th>
                    <th className="py-3 px-4">Employment Status</th>
                    <th className="py-3 px-4 text-center">Skill Match</th>
                    <th className="py-3 px-4 text-center">Verification</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredEmployees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        {emp.name}
                        <span className="block text-[10px] font-normal text-slate-400">{emp.institute}</span>
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-500">{emp.id}</td>
                      <td className="py-3 px-4 font-medium text-slate-700">{emp.jobRole}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                          emp.employmentStatus === 'Full-Time' ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {emp.employmentStatus}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-indigo-600">{emp.skillMatch}</td>
                      <td className="py-3 px-4 text-center">
                        <StatusBadge status={emp.verification} size="sm" />
                      </td>
                      <td className="py-3 px-4 text-right">
                        {emp.verification === 'Pending' ? (
                          <button
                            onClick={() => verifyEmployee(emp.id)}
                            className="px-2.5 py-1 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all"
                          >
                            Verify
                          </button>
                        ) : (
                          <span className="text-[11px] font-semibold text-emerald-600 inline-flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Verified
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500">
            <span>Showing {filteredEmployees.length} of {employeesList.length} employees</span>
            <button
              onClick={() => navigate('/employer/employees')}
              className="font-semibold text-indigo-600 hover:underline flex items-center gap-1"
            >
              <span>View Full Roster</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Job Requirement Section per prompt (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Job Profile Demand</span>
              <h3 className="text-base font-bold text-slate-900">{jobRequirements.role}</h3>
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
              {jobRequirements.openPositions} Openings
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Skill weights configured for automated candidate matching across Skill India trainees:
          </p>

          <div className="space-y-3.5">
            {jobRequirements.skills.map((skill, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{skill.name}</span>
                  <span className="font-bold text-indigo-600">{skill.importance}% Weight</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${skill.importance}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-400 block">{skill.description}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
            <span>Minimum Qualification: <strong>NSQF Level 5 or higher</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
