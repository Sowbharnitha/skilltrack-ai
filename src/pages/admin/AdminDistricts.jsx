import React from 'react';
import { MapPin, TrendingUp, Users, DollarSign } from 'lucide-react';
import ChartCard from '../../components/common/ChartCard';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { adminData } from '../../data/mockData';

export const AdminDistricts = () => {
  const { districtPlacements } = adminData.nationalOverview;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">District Placement Analytics</h1>
        <p className="text-xs text-slate-500 mt-1">
          Comparative performance and placement density across pilot skilling districts (Pune, Mumbai, Nashik, Nagpur, Erode).
        </p>
      </div>

      <ChartCard
        title="District-wise Placement Rates"
        subtitle="Comparing vocational employment success rates across municipal clusters."
        badge="Top District: Pune (78%)"
        height="h-80"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={districtPlacements} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="district" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} unit="%" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }} />
            <Bar dataKey="placementRate" name="Placement Rate (%)" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {districtPlacements.map((d, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 p-4 shadow-soft space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600">
              <MapPin className="w-3.5 h-3.5" />
              <span>{d.district}</span>
            </div>
            <p className="text-xl font-black text-slate-900">{d.placementRate}%</p>
            <div className="text-[11px] text-slate-500 space-y-0.5 pt-1 border-t border-slate-100">
              <div>Trainees: <strong>{d.trainees.toLocaleString('en-IN')}</strong></div>
              <div>Avg Wage: <strong>₹{d.avgSalary.toLocaleString('en-IN')}</strong></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDistricts;
