import React from 'react';
import { Briefcase, Plus, Award, Target, Users } from 'lucide-react';
import { employerData } from '../../data/mockData';

export const EmployerJobs = () => {
  const { jobRequirements } = employerData;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">Job Roles & Skill Configurations</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure required skill taxonomy and importance weights to calibrate AI talent recommendations.
          </p>
        </div>
        <button
          onClick={() => alert("New job profile dialog opened for posting!")}
          className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-colors flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Define New Job Role</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-soft space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">{jobRequirements.role}</h2>
            <span className="text-xs text-slate-500">{jobRequirements.department} • {jobRequirements.experienceLevel}</span>
          </div>
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
            {jobRequirements.openPositions} Active Vacancies
          </span>
        </div>

        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Required Competency Weights (AI Match Drivers)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobRequirements.skills.map((s, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800">{s.name}</span>
                <span className="font-bold text-indigo-600">{s.importance}% Weight</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${s.importance}%` }} />
              </div>
              <span className="text-[11px] text-slate-500 block">{s.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployerJobs;
