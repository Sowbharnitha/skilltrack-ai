import React, { useState } from 'react';
import { FileText, Send, Star, CheckCircle2 } from 'lucide-react';

export const EmployerFeedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">Curriculum & Trainee Feedback</h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Submit enterprise feedback to NCVET and Training Institutes to align vocational syllabus with emerging tech demands.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-soft max-w-2xl">
        {submitted ? (
          <div className="p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Feedback Submitted to NCVET</h3>
            <p className="text-xs text-slate-600">
              Your insights have been ingested into the national curriculum intelligence engine to refine the PMKVY 4.0 syllabus.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-bold text-indigo-600 hover:underline"
            >
              Submit another feedback response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Trainee Cohort / Course Evaluated
              </label>
              <select className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl">
                <option>Data Analytics (NSTI Bengaluru)</option>
                <option>Industrial Electrician (ITI Pune)</option>
                <option>Web Development (Centurion University)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Workplace Readiness Rating (1 - 5)
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className="w-10 h-10 rounded-xl border border-slate-200 hover:border-indigo-600 font-bold text-slate-800 hover:text-indigo-600 flex items-center justify-center"
                  >
                    {num} ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Identified Syllabus Gaps (What should institutes teach better?)
              </label>
              <textarea
                rows="4"
                required
                defaultValue="Candidates exhibit solid SQL syntax knowledge, but require deeper hands-on experience with live Power BI DAX dashboards and Git collaborative workflows."
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Transmit Feedback to Ministry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmployerFeedback;
