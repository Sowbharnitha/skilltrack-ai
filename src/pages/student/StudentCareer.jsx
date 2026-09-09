import React, { useState } from 'react';
import { Compass, Sparkles, TrendingUp, ArrowRight, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { studentData } from '../../data/mockData';
import LearningPathModal from '../../components/ai/LearningPathModal';

export const StudentCareer = () => {
  const { aiCareerRecommendation } = studentData;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(aiCareerRecommendation.recommendedCareer);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">AI Career Recommendations</h1>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              AI Powered
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Optimized career mobility pathways based on verified skill profile and live labour market hiring demand.
          </p>
        </div>
      </div>

      {/* Primary Target Career Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 rounded-2xl p-6 sm:p-8 text-white shadow-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200 block mb-1">
              Top Recommended Career Track
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">{aiCareerRecommendation.recommendedCareer}</h2>
            <p className="text-xs sm:text-sm text-indigo-200 mt-2 max-w-xl">
              Demand Outlook: <strong>{aiCareerRecommendation.marketDemand}</strong>. Expected salary potential: <strong>{aiCareerRecommendation.averageEntrySalary}</strong>.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center shrink-0">
            <span className="text-[11px] text-indigo-200 block">Calculated Match</span>
            <div className="text-4xl font-black text-amber-300">{aiCareerRecommendation.matchPercentage}%</div>
            <button
              onClick={() => {
                setSelectedCareer(aiCareerRecommendation.recommendedCareer);
                setModalOpen(true);
              }}
              className="mt-3 px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-indigo-50 rounded-xl transition-colors"
            >
              View Learning Path
            </button>
          </div>
        </div>
      </div>

      {/* Alternative Lateral Career Tracks */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft">
        <h3 className="text-base font-bold text-slate-800 mb-4">Alternative Growth Pathways</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiCareerRecommendation.alternativeRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-soft transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {role.match}% Match
                  </span>
                  <span className="text-xs font-bold text-emerald-600">{role.salary}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{role.role}</h4>
              </div>

              <button
                onClick={() => {
                  setSelectedCareer(role.role);
                  setModalOpen(true);
                }}
                className="mt-4 pt-2.5 border-t border-slate-100 text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center justify-between"
              >
                <span>Examine Learning Path</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <LearningPathModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        career={selectedCareer}
        currentMatch={78}
        targetMatch={92}
      />
    </div>
  );
};

export default StudentCareer;
