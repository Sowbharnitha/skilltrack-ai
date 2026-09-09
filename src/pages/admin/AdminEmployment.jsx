import React from 'react';
import { Briefcase, TrendingUp, CheckCircle2, Award } from 'lucide-react';
import ChartCard from '../../components/common/ChartCard';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';
import { adminData } from '../../data/mockData';

export const AdminEmployment = () => {
  const { wageProgression, retentionCurve, employmentOutcomes } = adminData.nationalOverview;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">National Employment Outcomes & Stability</h1>
        <p className="text-xs text-slate-500 mt-1">
          Longitudinal audit evaluating formal workforce absorption, job retention curves, and wage progression.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard
          title="Wage Progression Across 12 Months"
          subtitle="Monthly salary growth verified through EPFO returns and banking records."
          badge="45.8% Growth"
          height="h-72"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={wageProgression} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="tenure" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis domain={[12000, 26000]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${v/1000}k`} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }} />
              <Area type="monotone" dataKey="averageWage" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.2} strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Workforce Retention Benchmarks"
          subtitle="Trainee retention at 3 months, 6 months, and 12 months post-joining."
          badge="74% at 12M"
          height="h-72"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={retentionCurve} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="tenure" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} unit="%" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }} />
              <Bar dataKey="retentionRate" name="Retention Rate (%)" fill="#059669" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default AdminEmployment;
