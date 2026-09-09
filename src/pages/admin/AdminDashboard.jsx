import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  LineChart, Line, CartesianGrid, AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import {
  Landmark, Users, Briefcase, TrendingUp, ShieldCheck, DollarSign,
  Sparkles, ArrowRight, AlertTriangle, Lightbulb, MapPin, Building2,
  Download, Filter, ChevronRight, Sliders, Zap
} from 'lucide-react';
import StatCard from '../../components/common/StatCard';
import ChartCard from '../../components/common/ChartCard';
import { adminData } from '../../data/mockData';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { nationalOverview } = adminData;
  const { kpiCards, employmentOutcomes, districtPlacements, skillGapIntelligence, wageProgression, retentionCurve, aiIntelligencePanel } = nationalOverview;

  const [budgetSlider, setBudgetSlider] = useState(25);

  return (
    <div className="space-y-6">
      {/* Official Government Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-elevation relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-semibold border border-white/10 mb-3">
              <Landmark className="w-3.5 h-3.5 text-amber-400" />
              <span>Ministry of Skill Development & Entrepreneurship • Central Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              National Workforce Intelligence & Outcome Registry
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200 mt-2 max-w-2xl leading-relaxed">
              Real-time monitoring of vocational outcomes across PMKVY 4.0, DDU-GKY, and NAPS with cryptographic multi-source verification and longitudinal wage tracking.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('/admin/reports')}
              className="px-4 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-indigo-50 rounded-xl shadow-sm transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export National Dossier</span>
            </button>
            <button
              onClick={() => navigate('/admin/trainees')}
              className="px-4 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Explore 125k Trainees</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6 High-Impact Top KPI Cards per Section 6 specs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* Total Trainees */}
        <StatCard
          title={kpiCards.totalTrainees.title}
          value={kpiCards.totalTrainees.value}
          change={kpiCards.totalTrainees.change}
          subtext={kpiCards.totalTrainees.subtext}
          icon={Users}
          accentColor="indigo"
        />

        {/* Employed */}
        <StatCard
          title={kpiCards.employed.title}
          value={kpiCards.employed.value}
          status="Employed"
          subtext={kpiCards.employed.subtext}
          icon={Briefcase}
          accentColor="blue"
        />

        {/* Employment Rate */}
        <StatCard
          title={kpiCards.employmentRate.title}
          value={kpiCards.employmentRate.value}
          change={kpiCards.employmentRate.change}
          subtext={kpiCards.employmentRate.subtext}
          icon={TrendingUp}
          accentColor="emerald"
        />

        {/* Average Retention */}
        <StatCard
          title={kpiCards.averageRetention.title}
          value={kpiCards.averageRetention.value}
          change={kpiCards.averageRetention.change}
          subtext={kpiCards.averageRetention.subtext}
          icon={ShieldCheck}
          accentColor="purple"
        />

        {/* Average Salary */}
        <StatCard
          title={kpiCards.averageSalary.title}
          value={kpiCards.averageSalary.value}
          change={kpiCards.averageSalary.change}
          subtext={kpiCards.averageSalary.subtext}
          icon={DollarSign}
          accentColor="amber"
        />

        {/* Verified Employment */}
        <StatCard
          title={kpiCards.verifiedEmployment.title}
          value={kpiCards.verifiedEmployment.value}
          status="Verified"
          subtext={kpiCards.verifiedEmployment.subtext}
          icon={ShieldCheck}
          accentColor="emerald"
        />
      </div>

      {/* AI Workforce Intelligence Panel (Highlight per Section 6 specs) */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 rounded-2xl p-6 text-white border border-indigo-500/30 shadow-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">AI Workforce Intelligence & Policy Advisory</h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950">
                  REAL-TIME ACTIONABLE
                </span>
              </div>
              <p className="text-xs text-indigo-200 mt-0.5">
                Econometric predictive models synthesizing district hiring trends and skill deficits.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/admin/skill-gaps')}
            className="self-start md:self-auto px-4 py-2 text-xs font-bold text-indigo-950 bg-white hover:bg-indigo-50 rounded-xl transition-all flex items-center gap-1.5"
          >
            <span>Examine National Skill Gap Index</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Top Shortage Card */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-indigo-300 uppercase font-semibold">Critical National Skill Gap</span>
              <span className="text-xs font-bold text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded border border-rose-500/30">
                {aiIntelligencePanel.gapMagnitude}
              </span>
            </div>

            <h3 className="text-2xl font-black text-white">{aiIntelligencePanel.topSkillGap}</h3>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-white/5 rounded-lg">
                <span className="text-slate-400 block text-[10px]">Industry Demand</span>
                <strong className="text-emerald-300">{aiIntelligencePanel.demandLevel}</strong>
              </div>
              <div className="p-2 bg-white/5 rounded-lg">
                <span className="text-slate-400 block text-[10px]">Available Talent</span>
                <strong className="text-amber-300">{aiIntelligencePanel.availableTalent}</strong>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">{aiIntelligencePanel.economicImpact}</p>
          </div>

          {/* Recommended Action & Policy Simulator */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-400/20">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-1">
                <Lightbulb className="w-4 h-4" />
                <span>Recommended Executive Action</span>
              </div>
              <p className="text-xs text-indigo-100 leading-relaxed">
                {aiIntelligencePanel.recommendedAction}
              </p>
            </div>

            {/* Policy Intervention Simulator */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-200 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                  Policy Intervention Simulator: Increase Cloud/AI Training Subsidies
                </span>
                <strong className="text-amber-300 font-bold">+{budgetSlider}% Allocation</strong>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={budgetSlider}
                onChange={(e) => setBudgetSlider(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Baseline Model</span>
                <span className="text-emerald-400 font-medium">
                  Projected: +{Math.round(budgetSlider * 180)} Annual Placements, ₹{Math.round(budgetSlider * 3.4)} Cr Wage Boost
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Visualizations: Charts A, B, C, D, E per Section 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart A: Employment Outcome Breakdown (5 cols) */}
        <div className="lg:col-span-5">
          <ChartCard
            title="Employment Outcome Distribution"
            subtitle="Categorization across formal employment, self-employment, apprenticeships, and seeking."
            badge="125,430 Trainees"
            height="h-80"
          >
            <div className="flex flex-col sm:flex-row items-center justify-around h-full">
              <div className="w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={employmentOutcomes}
                      cx="50%"
                      cy="50%"
                      innerRadius={42}
                      outerRadius={75}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {employmentOutcomes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
                      formatter={(val) => [`${val.toLocaleString('en-IN')} (${((val/125430)*100).toFixed(1)}%)`, 'Trainees']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-1.5 text-xs">
                {employmentOutcomes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-600 truncate max-w-[120px]">{item.name}:</span>
                    <strong className="text-slate-900">{item.percentage}%</strong>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Chart B: District-wise Placement (7 cols) */}
        <div className="lg:col-span-7">
          <ChartCard
            title="District-wise Placement Benchmark"
            subtitle="Placement velocity and trainee volumes across industrial pilot districts."
            badge="District Missions"
            height="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={districtPlacements} margin={{ top: 20, right: 30, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="district" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
                  formatter={(val, name) => [`${val}%`, 'Placement Rate']}
                />
                <Bar dataKey="placementRate" name="Placement Rate (%)" fill="#4f46e5" radius={[4, 4, 0, 0]}>
                  {districtPlacements.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.placementRate >= 70 ? '#4f46e5' : '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>

      {/* Secondary Visualizations: Chart C (Skill Gap Intelligence) & Chart D (Wage Progression) & Chart E (Retention) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart C: Skill Gap Intelligence (6 cols) */}
        <div className="lg:col-span-6">
          <ChartCard
            title="Skill Gap Intelligence Index"
            subtitle="Comparing industrial market demand against certified trainee talent availability."
            badge="National Shortage Matrix"
            height="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillGapIntelligence} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="skill" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Bar dataKey="demand" name="Market Demand" fill="#f59e0b" radius={[3, 3, 0, 0]} />
                <Bar dataKey="talentAvailability" name="Available Talent" fill="#4f46e5" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Chart D & E: Wage Progression & Retention Curves (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Chart D: Wage Progression */}
          <ChartCard
            title="Wage Progression Curve (3M / 6M / 12M)"
            subtitle="Longitudinal starting wage increments validated via EPFO deposit receipts."
            badge="+45.8% 12-Month Hike"
            height="h-36"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={wageProgression} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="tenure" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis domain={[12000, 28000]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${v/1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }} formatter={(v) => [`₹${v.toLocaleString('en-IN')}`, 'Average Wage']} />
                <Area type="monotone" dataKey="averageWage" stroke="#059669" fill="#10b981" fillOpacity={0.2} strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Chart E: Retention Curve */}
          <ChartCard
            title="Workforce Retention Trajectory"
            subtitle="Sustained employment retention at 3 months (88%), 6 months (81%), and 12 months (74%)."
            badge="74% at 12M"
            height="h-36"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={retentionCurve} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="tenure" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis domain={[60, 100]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }} formatter={(v) => [`${v}%`, 'Retention Rate']} />
                <Line type="monotone" dataKey="retentionRate" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
