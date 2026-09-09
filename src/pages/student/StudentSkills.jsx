import React from 'react';
import { Award, CheckCircle2, TrendingUp, Sparkles, BookOpen } from 'lucide-react';
import { studentData } from '../../data/mockData';
import SkillProgress from '../../components/common/SkillProgress';

export const StudentSkills = () => {
  const { skillsComparison } = studentData;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">Assessed Skill Inventory</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Individual skill proficiency scores corroborated through Sector Skill Council (IT-ITeS) practical tests.
          </p>
        </div>
        <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-200 self-start sm:self-auto">
          Overall Competency Index: 78%
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft space-y-3">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Core Analytical Skills</h3>
          {skillsComparison.slice(0, 4).map((s, idx) => (
            <SkillProgress
              key={idx}
              name={s.skill}
              proficiency={s.current}
              gap={Math.max(0, s.required - s.current)}
              priority={s.required > s.current ? (s.required - s.current > 30 ? 'Critical' : 'High') : 'Normal'}
            />
          ))}
        </div>

        <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft space-y-3">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Advanced & Emerging Competencies</h3>
          {skillsComparison.slice(4).map((s, idx) => (
            <SkillProgress
              key={idx}
              name={s.skill}
              proficiency={s.current}
              gap={Math.max(0, s.required - s.current)}
              priority={s.required > s.current ? (s.required - s.current > 30 ? 'Critical' : 'High') : 'Normal'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentSkills;
