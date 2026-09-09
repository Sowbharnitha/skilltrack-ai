import React, { useState } from 'react';
import {
  Clock, CheckCircle2, AlertCircle, Send, Bell, Calendar,
  MessageSquare, FileText, ChevronRight, Check
} from 'lucide-react';
import { studentData } from '../../data/mockData';

export const StudentFollowups = () => {
  const [pulseSubmitted, setPulseSubmitted] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState('Satisfied');

  const followups = [
    {
      id: 1,
      title: "Training Completed Milestone",
      date: "15 May 2026",
      status: "Completed",
      type: "Baseline Exit Audit",
      badgeColor: "bg-blue-100 text-blue-700",
      notes: "Trainee certified under PMKVY 4.0 with 88% aggregate in Data Operations."
    },
    {
      id: 2,
      title: "1 Month Post-Training Follow-up",
      date: "12 July 2026",
      status: "Completed",
      type: "Early Transition Check",
      badgeColor: "bg-emerald-100 text-emerald-700",
      notes: "Confirmed onboarded at ABC Technologies as Junior Data Analyst (₹15k starting wage verified)."
    },
    {
      id: 3,
      title: "3 Month Follow-up",
      date: "15 Sep 2026",
      status: pulseSubmitted ? "Completed" : "Pending",
      type: "Retention & Wage Review",
      badgeColor: pulseSubmitted ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700",
      notes: "Assessing job retention, workplace safety, wage increment to ₹18,000, and curriculum relevance."
    },
    {
      id: 4,
      title: "6 Month Follow-up",
      date: "12 Dec 2026",
      status: "Pending",
      type: "Appraisal & Promotion Audit",
      badgeColor: "bg-slate-100 text-slate-600",
      notes: "Longitudinal audit of salary increase to ₹22k, retention confirmation, and upskilling needs."
    },
    {
      id: 5,
      title: "12 Month Follow-up",
      date: "12 June 2027",
      status: "Pending",
      type: "Annual Workforce Impact Benchmark",
      badgeColor: "bg-slate-100 text-slate-600",
      notes: "Final longitudinal tracking: sustained employment confirmation & career advancement trajectory."
    }
  ];

  const handlePulseSubmit = (e) => {
    e.preventDefault();
    setPulseSubmitted(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">Smart Follow-up System</h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              Active Milestone: 3-Month Pulse
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Automated tracking pipeline monitoring job retention, wage changes, and curriculum feedback across 12 months.
          </p>
        </div>

        <div className="text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
          Next Scheduled Window: <strong className="text-slate-800">15 Sep 2026</strong>
        </div>
      </div>

      {/* Reminder Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent rounded-xl border border-amber-200 p-4 sm:p-5 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0 mt-0.5">
            <Bell className="w-5 h-5 text-amber-700" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-amber-900">3-Month Retention Pulse Survey Due</h4>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-800">Action Required</span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Confirm your ongoing employment status at ABC Technologies and report your confirmed salary increment to help calibrate regional skilling subsidies.
            </p>
            <div className="mt-3 text-xs font-semibold text-amber-900">
              Deadline: 15 September 2026 (In 6 Days)
            </div>
          </div>
        </div>

        <div className="bg-indigo-50/50 rounded-xl border border-indigo-200 p-4 sm:p-5 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-indigo-100 text-indigo-800 shrink-0 mt-0.5">
            <MessageSquare className="w-5 h-5 text-indigo-700" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-indigo-950">Automated WhatsApp / SMS Link</h4>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-200 text-indigo-800">Omni-Channel</span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Automated pulse questionnaires are also dispatched via WhatsApp conversational bots to ensure 90%+ survey completion across rural and semi-urban trainees.
            </p>
            <div className="mt-3 text-xs font-semibold text-indigo-700">
              Dispatched to: +91 98452 31089 (Delivered ✓)
            </div>
          </div>
        </div>
      </div>

      {/* Main Timeline Section */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft">
        <h3 className="text-base font-bold text-slate-800 mb-6">
          12-Month Longitudinal Follow-up Pipeline
        </h3>

        {/* Vertical Pipeline */}
        <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
          {followups.map((item, idx) => (
            <div key={item.id} className="relative">
              {/* Milestone Icon */}
              <div className={`absolute -left-6 sm:-left-8 top-1 w-6 sm:w-7 h-6 sm:h-7 rounded-full border-2 flex items-center justify-center bg-white shadow-sm ${
                item.status === 'Completed' ? 'border-emerald-500 text-emerald-600' :
                item.status === 'Pending' && item.id === 3 ? 'border-amber-500 text-amber-500 animate-pulse' :
                'border-slate-300 text-slate-400'
              }`}>
                {item.status === 'Completed' ? <Check className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
              </div>

              {/* Milestone Card */}
              <div className="bg-slate-50/70 hover:bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 shadow-soft transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.status}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-400">{item.date}</span>
                </div>

                <p className="text-xs text-indigo-700 font-semibold mb-1">{item.type}</p>
                <p className="text-xs text-slate-600">{item.notes}</p>

                {/* Inline 3-Month Pulse Form when pending */}
                {item.id === 3 && !pulseSubmitted && (
                  <form onSubmit={handlePulseSubmit} className="mt-4 pt-3 border-t border-slate-200/80 bg-white p-3.5 rounded-xl border">
                    <h5 className="text-xs font-bold text-slate-800 mb-2">Submit 3-Month Quick Pulse Response:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs mb-3">
                      {['Very Satisfied', 'Satisfied', 'Need Upskilling Support'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedResponse(opt)}
                          className={`p-2 rounded-lg border text-left font-medium transition-all ${
                            selectedResponse === opt
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-all"
                    >
                      Confirm 3-Month Pulse
                    </button>
                  </form>
                )}

                {item.id === 3 && pulseSubmitted && (
                  <div className="mt-3 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Response recorded: "{selectedResponse}". Thank you for maintaining verified longitudinal data!</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentFollowups;
