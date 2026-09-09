import React from 'react';
import { BookOpen, Award, Users, TrendingUp } from 'lucide-react';
import { instituteData } from '../../data/mockData';

export const InstituteCourses = () => {
  const { courses } = instituteData;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">NCVET Accredited Course Catalog</h1>
        <p className="text-xs text-slate-500 mt-1">
          Detailed breakdown of syllabus alignment, student throughput, and industry placement rates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-soft space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {course.nsqfLevel}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{course.course}</h3>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                {course.placementRate}% Placed
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-400 text-[10px] block">Enrolled</span>
                <strong className="text-slate-800 text-sm">{course.students}</strong>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-400 text-[10px] block">Completed</span>
                <strong className="text-slate-800 text-sm">{course.completed}</strong>
              </div>
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                <span className="text-emerald-600 text-[10px] block">Placed</span>
                <strong className="text-emerald-700 text-sm">{course.placed}</strong>
              </div>
            </div>

            <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-100">
              <div className="flex justify-between">
                <span>Avg Starting Salary:</span>
                <strong className="text-slate-700">{course.avgSalary}</strong>
              </div>
              <div className="flex justify-between">
                <span>Institutional Impact Score:</span>
                <strong className="text-indigo-600">{course.impactScore} / 10</strong>
              </div>
              <div className="flex justify-between">
                <span>Primary Recruiters:</span>
                <strong className="text-slate-800">{course.topHiringCompany}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstituteCourses;
