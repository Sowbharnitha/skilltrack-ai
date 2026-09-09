import React, { useState } from 'react';
import { Sparkles, TrendingUp, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import LearningPathModal from './LearningPathModal';

export const AIRecommendation = ({
  recommendation,
  onViewPath
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = recommendation || {
    recommendedCareer: "Data Analyst",
    matchPercentage: 87,
    marketDemand: "Very High (+34% YoY)",
    averageEntrySalary: "₹3,50,000 - ₹5,20,000 / yr",
    requiredSkills: ["Python", "SQL", "Power BI", "Statistics"],
    actionPlan: [
      "Master Power BI DAX calculations & data storytelling",
      "Reinforce SQL window functions and aggregation benchmarks",
      "Complete industry-verified e-SkillIndia project"
    ]
  };

  return (
    <>
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 rounded-xl p-5 sm:p-6 text-white shadow-card relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-indigo-200 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            AI Career Recommendation
          </div>

          <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-2.5 py-0.5 rounded-full">
            High Demand
          </span>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs text-indigo-200 uppercase font-medium tracking-wider">Target Job Role</span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
              {data.recommendedCareer}
            </h3>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shrink-0 text-center">
            <span className="text-[11px] text-indigo-200 block">Match Score</span>
            <span className="text-2xl font-black text-amber-300">{data.matchPercentage}%</span>
          </div>
        </div>

        {/* Required skills */}
        <div className="mt-5">
          <span className="text-xs font-semibold text-indigo-200 uppercase tracking-wider block mb-2">
            Key Required Skills
          </span>
          <div className="flex flex-wrap gap-2">
            {data.requiredSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white border border-white/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Plan preview */}
        {data.actionPlan && (
          <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs text-indigo-100">
            {data.actionPlan.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action button */}
        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-indigo-200">
            Avg Salary: <strong className="text-white font-semibold">{data.averageEntrySalary || "₹24,500/mo"}</strong>
          </span>

          <button
            onClick={() => {
              if (onViewPath) onViewPath();
              else setIsModalOpen(true);
            }}
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-indigo-50 rounded-lg shadow-sm transition-all flex items-center gap-1.5 hover:translate-x-0.5"
          >
            <span>View Learning Path</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <LearningPathModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        career={data.recommendedCareer}
        currentMatch={78}
        targetMatch={92}
      />
    </>
  );
};

export default AIRecommendation;
