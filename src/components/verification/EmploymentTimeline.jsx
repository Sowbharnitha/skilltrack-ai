import React from 'react';
import { CheckCircle2, Circle, Clock, Briefcase, Award, FileSearch, ShieldCheck } from 'lucide-react';

export const EmploymentTimeline = ({ timeline = [] }) => {
  const getStepIcon = (title, status) => {
    const t = String(title || '').toLowerCase();
    if (t.includes('training')) return <Award className="w-4 h-4 text-indigo-600" />;
    if (t.includes('search')) return <FileSearch className="w-4 h-4 text-blue-600" />;
    if (t.includes('interview')) return <Briefcase className="w-4 h-4 text-purple-600" />;
    if (t.includes('employment')) return <Briefcase className="w-4 h-4 text-emerald-600" />;
    if (t.includes('verification')) return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
    return <CheckCircle2 className="w-4 h-4 text-indigo-600" />;
  };

  return (
    <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
      {timeline.map((step, idx) => {
        const isCompleted = step.status === 'Completed';

        return (
          <div key={step.id || idx} className="relative group">
            {/* Step Icon Anchor */}
            <div className={`absolute -left-6 sm:-left-8 top-0.5 w-6 sm:w-7 h-6 sm:h-7 rounded-full border-2 flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-110 ${
              isCompleted ? 'border-emerald-500 text-emerald-600' : 'border-slate-300 text-slate-400'
            }`}>
              {getStepIcon(step.title, step.status)}
            </div>

            {/* Content Card */}
            <div className="bg-slate-50/70 hover:bg-white border border-slate-200/80 rounded-xl p-3.5 sm:p-4 shadow-soft transition-all">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">{step.title}</h4>
                  {step.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                      {step.badge}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-medium text-slate-400">{step.date}</span>
              </div>

              {step.organization && (
                <div className="text-xs font-medium text-indigo-600 mb-1">
                  {step.organization}
                </div>
              )}

              {step.details && (
                <p className="text-xs text-slate-600 leading-relaxed">{step.details}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EmploymentTimeline;
