import React from 'react';
import { X, Sparkles, CheckCircle2, BookOpen, Clock, Award, ArrowRight } from 'lucide-react';

export const LearningPathModal = ({ isOpen, onClose, career = "Data Analyst", currentMatch = 72, targetMatch = 94 }) => {
  if (!isOpen) return null;

  const curriculum = [
    {
      week: "Weeks 1 - 2",
      title: "Advanced SQL & Analytical Windows",
      skills: ["Window Functions", "Partitioning", "Query Optimization", "CTEs"],
      hours: "18 Hours",
      status: "In Progress",
      platform: "NCVET e-SkillIndia Portal"
    },
    {
      week: "Weeks 3 - 5",
      title: "Business Intelligence with Power BI",
      skills: ["DAX Formulations", "Power Query M", "Data Modeling", "Dashboard Storytelling"],
      hours: "25 Hours",
      status: "Up Next",
      platform: "Microsoft Learn / NSDC Sandbox"
    },
    {
      week: "Weeks 6 - 7",
      title: "Applied Business Statistics & Inference",
      skills: ["Hypothesis Testing", "A/B Testing Analytics", "Regression Modeling"],
      hours: "15 Hours",
      status: "Scheduled",
      platform: "SWAYAM MoE / IIT Madras"
    },
    {
      week: "Week 8",
      title: "Industry Capstone & Verified Portfolio",
      skills: ["End-to-End Enterprise Case Study", "DigiLocker Credential Issuance"],
      hours: "12 Hours",
      status: "Scheduled",
      platform: "SkillTrack Evaluation Sandbox"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-elevation overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            AI-Engineered Career Roadmap
          </div>

          <h2 className="text-xl sm:text-2xl font-bold">Personalized Learning Path: {career}</h2>
          <p className="text-indigo-200 text-xs sm:text-sm mt-1">
            Curated 8-week bridge plan to close targeted skill gaps based on verified employer demand.
          </p>

          {/* Match Jump Indicator */}
          <div className="mt-4 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs">
            <span>Current Skill Match: <strong className="text-amber-300 font-bold">{currentMatch}%</strong></span>
            <ArrowRight className="w-4 h-4 text-indigo-300" />
            <span>Target Match Post-Completion: <strong className="text-emerald-300 font-bold">{targetMatch}%</strong></span>
          </div>
        </div>

        {/* Timeline list */}
        <div className="p-5 sm:p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {curriculum.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-soft transition-all">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                  {item.week}
                </span>
                <span className="flex items-center gap-1 text-slate-500 text-[11px]">
                  <Clock className="w-3.5 h-3.5" />
                  {item.hours}
                </span>
              </div>

              <h4 className="font-semibold text-slate-800 text-sm mt-1">{item.title}</h4>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  {item.platform}
                </span>
                <span className={`font-semibold ${
                  item.status === 'In Progress' ? 'text-indigo-600' : 'text-slate-500'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-600" />
            NSQF Level 6 Aligned Micro-Credential
          </span>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                alert("Enrolled in personalized 8-Week Data Analyst Bridge Track! Confirmation sent to your registered email.");
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
            >
              Enroll in Track
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathModal;
