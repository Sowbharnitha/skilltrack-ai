import React from 'react';
import { Building2, Award, Star, CheckCircle2 } from 'lucide-react';
import { adminData } from '../../data/mockData';

export const AdminProviders = () => {
  const { trainingProviders } = adminData;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">Training Provider Quality League</h1>
        <p className="text-xs text-slate-500 mt-1">
          Accreditation, trainee placement integrity, and quality ranking for vocational training institutes.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
                <th className="py-3 px-4">Center ID</th>
                <th className="py-3 px-4">Institute Name</th>
                <th className="py-3 px-4 text-center">Trainees Tracked</th>
                <th className="py-3 px-4 text-center">Placement Rate</th>
                <th className="py-3 px-4 text-center">Quality Rating</th>
                <th className="py-3 px-4 text-center">NCVET Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {trainingProviders.map((tp) => (
                <tr key={tp.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-slate-500">{tp.id}</td>
                  <td className="py-3 px-4 font-bold text-slate-900">{tp.name}</td>
                  <td className="py-3 px-4 text-center font-medium text-slate-700">{tp.trainees}</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">{tp.placementRate}%</td>
                  <td className="py-3 px-4 text-center font-bold text-amber-500">{tp.qualityRating} ★</td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[11px]">
                      {tp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProviders;
