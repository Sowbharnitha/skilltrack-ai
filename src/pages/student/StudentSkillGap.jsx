import React, { useState } from 'react';
import {
  Sparkles, CheckCircle2, XCircle, ArrowRight, BrainCircuit,
  BookOpen, Clock, Target, Award, Zap, RefreshCw
} from 'lucide-react';
import LearningPathModal from '../../components/ai/LearningPathModal';

export const StudentSkillGap = () => {
  const [learningModalOpen, setLearningModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Student specific data per Section 7 prompt specs
  const student = "Arun Kumar";
  const targetJob = "Data Analyst";
  const overallSkillMatch = 72;

  const currentSkills = ["Python", "SQL", "Excel", "Java"];
  const requiredSkills = ["Python", "SQL", "Power BI", "Statistics", "Machine Learning"];

  const matchedSkills = [
    { name: "Python", level: "Proficient", score: 85, evidence: "Completed PMKVY Practical Module" },
    { name: "SQL", level: "Intermediate", score: 75, evidence: "Assessed on Joins & Grouping" },
    { name: "Excel", level: "Advanced", score: 95, evidence: "DigiLocker Certified Master" }
  ];

  const missingSkills = [
    {
      name: "Power BI",
      severity: "Critical",
      gapScore: 45,
      impact: "Required in 88% of open Data Analyst roles",
      suggestedAction: "Master Power Query & DAX formulas"
    },
    {
      name: "Statistics",
      severity: "High",
      gapScore: 25,
      impact: "Required for KPI forecasting and A/B inference",
      suggestedAction: "Complete probability & regression coursework"
    },
    {
      name: "Machine Learning",
      severity: "Medium",
      gapScore: 40,
      impact: "Differentiates entry from mid-level analyst compensation",
      suggestedAction: "Learn scikit-learn basics & linear regression"
    }
  ];

  const aiRecommendations = [
    { step: 1, title: "Learn Power BI", desc: "Focus on DAX, data modeling, and enterprise reporting dashboards to immediately fulfill top corporate requirements.", badge: "Urgent" },
    { step: 2, title: "Improve Statistics", desc: "Strengthen exploratory data analysis, confidence intervals, and hypothesis testing for business analytics.", badge: "Recommended" },
    { step: 3, title: "Learn basic Machine Learning", desc: "Build foundational predictive models using Python Scikit-Learn to qualify for advanced analytical tracks.", badge: "Career Booster" }
  ];

  const handleGeneratePath = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setLearningModalOpen(true);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 rounded-2xl p-6 sm:p-8 text-white shadow-card relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold border border-white/10 mb-3">
              <BrainCircuit className="w-4 h-4 text-amber-300" />
              <span>AI Skill Intelligence Engine • SIH26135</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">AI Skill Gap Analysis</h1>
            <p className="text-xs sm:text-sm text-indigo-200 mt-1 max-w-2xl">
              Precision talent diagnostic comparing <strong>{student}</strong>'s certified proficiencies against verified employer requirements for <strong>{targetJob}</strong>.
            </p>
          </div>

          {/* Match Score Badge */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center shrink-0">
            <span className="text-xs text-indigo-200 font-semibold uppercase tracking-wider block">
              Overall Skill Match
            </span>
            <div className="text-4xl sm:text-5xl font-black text-amber-300 my-1">
              {overallSkillMatch}%
            </div>
            <span className="text-[11px] font-medium text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              Qualified for Junior Roles
            </span>
          </div>
        </div>
      </div>

      {/* Target Role & Skills Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Skills Box */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                AK
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">Current Skills (Arun Kumar)</h3>
                <span className="text-[11px] text-slate-400">Verified through NSTI & NCVET assessment</span>
              </div>
            </div>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
              {currentSkills.length} Skills
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {currentSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Target Job Requirements */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">Target Job: {targetJob}</h3>
                <span className="text-[11px] text-slate-400">Industry Standard Profile (NSQF Level 6)</span>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              {requiredSkills.length} Required
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {requiredSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-blue-50/50 border border-blue-200 text-xs font-semibold text-blue-900 flex items-center gap-1.5"
              >
                <Target className="w-3.5 h-3.5 text-blue-600" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Matched vs Missing Skills Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Matched Skills (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-800">Matched Skills ({matchedSkills.length})</h3>
          </div>

          <div className="space-y-3">
            {matchedSkills.map((s, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-emerald-100 bg-emerald-50/40 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-800">{s.name}</span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.2 rounded-full">
                      {s.level}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-0.5">{s.evidence}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-emerald-600">{s.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Missing Skills (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-rose-500" />
            <h3 className="text-sm font-bold text-slate-800">Missing Skills ({missingSkills.length})</h3>
          </div>

          <div className="space-y-3">
            {missingSkills.map((s, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-rose-100 bg-rose-50/40 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-800">{s.name}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.2 rounded-full ${
                      s.severity === 'Critical' ? 'bg-rose-200 text-rose-800 font-bold' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {s.severity} Gap
                    </span>
                  </div>
                  <span className="text-xs font-bold text-rose-600">-{s.gapScore}%</span>
                </div>
                <p className="text-[11px] text-slate-600">{s.impact}</p>
                <div className="mt-2 text-[11px] font-medium text-indigo-600 flex items-center gap-1">
                  <span>Action: {s.suggestedAction}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Recommendations Section */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base font-bold text-slate-900">AI Priority Action Plan</h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Rank-ordered intervention steps generated by SkillTrack AI to elevate match from 72% to 94%:
            </p>
          </div>

          <button
            onClick={handleGeneratePath}
            disabled={isGenerating}
            className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-75 rounded-xl shadow-md transition-all flex items-center gap-2 shrink-0"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Generating Roadmap...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Generate Learning Path</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiRecommendations.map((rec) => (
            <div
              key={rec.step}
              className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/30 hover:bg-indigo-50/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                    {rec.step}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">
                    {rec.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-800">{rec.title}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{rec.desc}</p>
              </div>

              <button
                onClick={() => setLearningModalOpen(true)}
                className="mt-4 pt-2.5 border-t border-indigo-100/80 text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>View Free Modules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Path Modal */}
      <LearningPathModal
        isOpen={learningModalOpen}
        onClose={() => setLearningModalOpen(false)}
        career={targetJob}
        currentMatch={overallSkillMatch}
        targetMatch={94}
      />
    </div>
  );
};

export default StudentSkillGap;
