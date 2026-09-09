import React from 'react';
import { Sparkles, AlertTriangle, ArrowRight, Lightbulb, Target } from 'lucide-react';
import ChartCard from '../../components/common/ChartCard';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { adminData } from '../../data/mockData';

export const AdminSkillGaps = () => {
  const { skillGapIntelligence, aiIntelligencePanel } = adminData.nationalOverview;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">National Skill Gap Intelligence</h1>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              AI Diagnostic
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Econometric shortfall index identifying mismatch between industrial vacancy requirements and vocational candidate proficiencies.
          </p>
        </div>
      </div>

      {/* Main Chart */}
      <ChartCard
        title="Industrial Demand vs Available Certified Talent"
        subtitle="Ranked across top vocational high-demand sectors: Python, Cloud Computing, PLC, Data Analytics, Cybersecurity, Industrial Automation."
        badge="Top Shortfall: Cloud (82%)"
        height="h-80"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={skillGapIntelligence} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="skill" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} unit="%" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }} />
            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
            <Bar dataKey="demand" name="Market Demand" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="talentAvailability" name="Available Talent" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Actionable Sector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillGapIntelligence.slice(0, 3).map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5 shadow-soft space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase">{item.sector}</span>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                Gap: {item.gapScore}%
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900">{item.skill}</h3>
            <p className="text-xs text-slate-600">
              Demand index of <strong>{item.demand}/100</strong> versus only <strong>{item.talentAvailability}/100</strong> certified graduates.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSkillGaps;
