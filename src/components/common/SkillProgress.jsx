import React from 'react';

export const SkillProgress = ({
  name,
  proficiency,
  gap,
  priority,
  showLabel = true,
  courses,
  hoursRequired
}) => {
  const getBarColor = (val, prio) => {
    if (prio === 'Critical' || val < 40) return 'bg-rose-500';
    if (prio === 'High' || val < 70) return 'bg-amber-500';
    return 'bg-indigo-600';
  };

  return (
    <div className="py-2.5">
      {showLabel && (
        <div className="flex items-center justify-between text-xs mb-1.5">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">{name}</span>
            {priority && (
              <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                priority === 'Critical' ? 'bg-rose-100 text-rose-700' :
                priority === 'High' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
              }`}>
                {priority}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {gap !== undefined && (
              <span className="text-slate-500 text-[11px]">
                Gap: <strong className="text-rose-600 font-semibold">{gap}%</strong>
              </span>
            )}
            <span className="font-bold text-slate-700">{proficiency}%</span>
          </div>
        </div>
      )}

      {/* Progress Track */}
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden flex">
        <div
          className={`h-full rounded-full transition-all duration-500 ${getBarColor(proficiency, priority)}`}
          style={{ width: `${Math.min(100, Math.max(0, proficiency))}%` }}
        />
      </div>

      {courses && (
        <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-500">
          <span className="truncate max-w-[80%]">{courses}</span>
          {hoursRequired && <span className="shrink-0 font-medium text-indigo-600">~{hoursRequired} hrs</span>}
        </div>
      )}
    </div>
  );
};

export default SkillProgress;
