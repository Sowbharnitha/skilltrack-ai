import React from 'react';
import { TrendingUp, Award, CheckCircle2, DollarSign } from 'lucide-react';
import ChartCard from '../../components/common/ChartCard';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { instituteData } from '../../data/mockData';

export const InstituteOutcomes = () => {
  const { courses } = instituteData;

  const outcomeData = courses.map(c => ({
    name: c.course,
    placement: c.placementRate,
    impact: c.impactScore * 10
  }));

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">Training Outcome & Wage Analytics</h1>
        <p className="text-xs text-slate-500 mt-1">
          Post-training longitudinal performance evaluating trainee wage jumps and job sustainability.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-12">
          <ChartCard
            title="Course Placement & Impact Benchmarks"
            subtitle="Comparing placement percentage against institutional impact score (normalized to 100)."
            badge="Performance Metric"
            height="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={outcomeData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }} />
                <Bar dataKey="placement" name="Placement Rate (%)" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="impact" name="Impact Score" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default InstituteOutcomes;
