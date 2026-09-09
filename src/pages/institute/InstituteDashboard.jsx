import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  LineChart, Line, CartesianGrid, PieChart, Pie, Cell
} from 'recharts';
import {
  Users, CheckCircle2, Award, Briefcase, BookOpen, TrendingUp,
  Sparkles, FileText, ChevronRight
} from 'lucide-react';
import StatCard from '../../components/common/StatCard';
import ChartCard from '../../components/common/ChartCard';
import { instituteData } from '../../data/mockData';

export const InstituteDashboard = () => {
  const navigate = useNavigate();
  const { institute, kpiCards, courses, placementTrend, employmentStatusBreakdown, skillGapDistribution } = instituteData;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">{institute.name}</h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              {institute.accreditation}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Center Code: <span className="font-mono font-bold text-slate-700">{institute.centerCode}</span> • Director: {institute.director} • {institute.district}, {institute.state}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/institute/reports')}
            className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
          >
            Export NCVET Audit
          </button>
          <button
            onClick={() => navigate('/institute/students')}
            className="px-3.5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Manage 500 Students</span>
          </button>
        </div>
      </div>

      {/* 4 Cards per Section 5 specs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title={kpiCards.totalStudents.title}
          value={kpiCards.totalStudents.value}
          change={kpiCards.totalStudents.change}
          subtext={kpiCards.totalStudents.subtext}
          icon={Users}
          accentColor="indigo"
        />

        <StatCard
          title={kpiCards.courseCompleted.title}
          value={kpiCards.courseCompleted.value}
          change={kpiCards.courseCompleted.change}
          subtext={kpiCards.courseCompleted.subtext}
          icon={Award}
          accentColor="blue"
        />

        <StatCard
          title={kpiCards.placed.title}
          value={kpiCards.placed.value}
          change={kpiCards.placed.change}
          subtext={kpiCards.placed.subtext}
          icon={Briefcase}
          accentColor="emerald"
        />

        <StatCard
          title={kpiCards.placementRate.title}
          value={kpiCards.placementRate.value}
          change={kpiCards.placementRate.change}
          subtext={kpiCards.placementRate.subtext}
          icon={TrendingUp}
          accentColor="purple"
        />
      </div>

      {/* 4 Recharts Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart 1: Placement Rate Trend (6 cols) */}
        <div className="lg:col-span-6">
          <ChartCard
            title="Placement Velocity Trend"
            subtitle="Monthly trajectory of verified job placements across active cohorts."
            badge="71% Current Rate"
            height="h-72"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={placementTrend} margin={{ top: 15, right: 30, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis domain={[50, 80]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
                  formatter={(val) => [`${val}%`, 'Placement Rate']}
                />
                <Line type="monotone" dataKey="rate" stroke="#4f46e5" strokeWidth={3} dot={{ fill: '#4f46e5', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Chart 2: Course-wise Outcomes (6 cols) */}
        <div className="lg:col-span-6">
          <ChartCard
            title="Course-wise Training Outcomes"
            subtitle="Comparing enrolled vs completed vs successfully placed trainees per sector."
            badge="4 Primary Courses"
            height="h-72"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={courses} margin={{ top: 15, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="course" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Bar dataKey="students" name="Enrolled" fill="#94a3b8" radius={[3, 3, 0, 0]} />
                <Bar dataKey="completed" name="Completed" fill="#6366f1" radius={[3, 3, 0, 0]} />
                <Bar dataKey="placed" name="Placed" fill="#10b981" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Chart 3: Skill Gap Distribution (6 cols) */}
        <div className="lg:col-span-6">
          <ChartCard
            title="Curriculum vs Industry Demand Index"
            subtitle="Variance between institute curriculum depth and industry requirement scores."
            badge="Curriculum Audit"
            height="h-72"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillGapDistribution} margin={{ top: 15, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="skill" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Bar dataKey="industryNeed" name="Industry Requirement" fill="#f59e0b" radius={[3, 3, 0, 0]} />
                <Bar dataKey="instituteCurriculum" name="Curriculum Coverage" fill="#4f46e5" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Chart 4: Employment Status Breakdown (6 cols) */}
        <div className="lg:col-span-6">
          <ChartCard
            title="Employment Classification"
            subtitle="Distribution of placed cohort across formal, apprenticeship, and entrepreneurship."
            badge="320 Placed"
            height="h-72"
          >
            <div className="flex flex-col sm:flex-row items-center justify-around h-full">
              <div className="w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={employmentStatusBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={75}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {employmentStatusBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
                      formatter={(val) => [`${val}%`, 'Share']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend labels */}
              <div className="space-y-2 text-xs">
                {employmentStatusBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-600">{item.name}:</span>
                    <strong className="text-slate-900">{item.count} ({item.value}%)</strong>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
        </div>
      </div>

      {/* Course Table per Section 5 specs */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-soft overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">Vocational Course Performance Matrix</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Comprehensive audit metrics across Electrician, Data Analytics, Web Development, and Mechanical Technician.
            </p>
          </div>
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            NCVET Standard Scorecard
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4">Course</th>
                <th className="py-3 px-4 text-center">Students</th>
                <th className="py-3 px-4 text-center">Completed</th>
                <th className="py-3 px-4 text-center">Placed</th>
                <th className="py-3 px-4 text-center">Placement %</th>
                <th className="py-3 px-4 text-center">Impact Score</th>
                <th className="py-3 px-4">Top Hiring Partner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {courses.map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-900">
                    {c.course}
                    <span className="block text-[10px] font-normal text-slate-400">{c.nsqfLevel}</span>
                  </td>
                  <td className="py-3 px-4 text-center font-medium text-slate-700">{c.students}</td>
                  <td className="py-3 px-4 text-center font-medium text-slate-700">{c.completed}</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">{c.placed}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold">
                      {c.placementRate}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center font-black text-indigo-600">{c.impactScore} / 10</td>
                  <td className="py-3 px-4 text-slate-600 font-medium">{c.topHiringCompany}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;
