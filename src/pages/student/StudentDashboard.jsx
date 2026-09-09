import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  LineChart, Line, CartesianGrid, AreaChart, Area
} from 'recharts';
import {
  Briefcase, Award, TrendingUp, Clock, Sparkles, CheckCircle2,
  AlertCircle, ChevronRight, ShieldCheck, ArrowUpRight
} from 'lucide-react';
import StatCard from '../../components/common/StatCard';
import ChartCard from '../../components/common/ChartCard';
import SkillProgress from '../../components/common/SkillProgress';
import AIRecommendation from '../../components/ai/AIRecommendation';
import EmploymentTimeline from '../../components/verification/EmploymentTimeline';
import LearningPathModal from '../../components/ai/LearningPathModal';
import { studentData } from '../../data/mockData';

export const StudentDashboard = () => {
  const navigate = useNavigate();
  const [learningModalOpen, setLearningModalOpen] = useState(false);

  const { profile, kpiCards, skillsComparison, salaryProgression, employmentTimeline, missingSkills, aiCareerRecommendation } = studentData;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-500/20 shadow-sm"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">Welcome back, {profile.name}!</h2>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {profile.verificationStatus}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {profile.batch} • {profile.trainingInstitute}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => navigate('/student/skill-gap')}
            className="px-3.5 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>AI Skill Gap</span>
          </button>

          <button
            onClick={() => navigate('/student/employment')}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
          >
            <span>Verification Record</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4 KPI Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Employment Status */}
        <StatCard
          title={kpiCards.employmentStatus.title}
          value={kpiCards.employmentStatus.value}
          status="Verified"
          subtext={kpiCards.employmentStatus.subtext}
          icon={Briefcase}
          accentColor="emerald"
        />

        {/* Skill Match */}
        <StatCard
          title={kpiCards.skillMatch.title}
          value={kpiCards.skillMatch.value}
          change="+6% this qtr"
          subtext={kpiCards.skillMatch.subtext}
          icon={Award}
          accentColor="indigo"
        />

        {/* Career Progress */}
        <StatCard
          title={kpiCards.careerProgress.title}
          value={kpiCards.careerProgress.value}
          status="On Track"
          subtext={kpiCards.careerProgress.subtext}
          icon={TrendingUp}
          accentColor="blue"
        />

        {/* Next Follow-up */}
        <StatCard
          title={kpiCards.nextFollowup.title}
          value={kpiCards.nextFollowup.value}
          change="Pulse Due"
          subtext={kpiCards.nextFollowup.subtext}
          icon={Clock}
          accentColor="amber"
        />
      </div>

      {/* Main Grid: Charts & AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart A: Skill Match Comparison Chart (8 cols) */}
        <div className="lg:col-span-8">
          <ChartCard
            title="Skill Match Comparison"
            subtitle="Comparing your current assessed proficiency against verified industry benchmarks for Junior Data Analyst roles."
            badge="NCVET Standards"
            height="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={skillsComparison}
                margin={{ top: 20, right: 30, left: -10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="skill" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
                  formatter={(val) => [`${val}%`, '']}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="current" name="Current Skills" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="required" name="Required Skills" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* AI Career Recommendation Card (4 cols) */}
        <div className="lg:col-span-4 flex flex-col">
          <AIRecommendation
            recommendation={aiCareerRecommendation}
            onViewPath={() => setLearningModalOpen(true)}
          />
        </div>
      </div>

      {/* Second Row: Salary Progression & Skill Gaps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart B: Salary Progression (7 cols) */}
        <div className="lg:col-span-7">
          <ChartCard
            title="Salary Progression Trajectory"
            subtitle="Longitudinal wage increments verified through employer payroll credit confirmations."
            badge="+80% Growth"
            height="h-72"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salaryProgression} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="salaryGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="period" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis
                  domain={[10000, 30000]}
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `₹${v/1000}k`}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: '#fff', fontSize: '12px' }}
                  formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Monthly In-Hand Wage']}
                />
                <Area type="monotone" dataKey="salary" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#salaryGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Missing Skills Section (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft hover:shadow-card transition-all h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-800 text-base">Identified Skill Gaps</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100">
                    High Impact
                  </span>
                </div>
                <button
                  onClick={() => navigate('/student/skill-gap')}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-0.5"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                Prioritized bridge modules recommended to increase your market wage competitiveness:
              </p>

              <div className="space-y-3">
                {missingSkills.map((skill, idx) => (
                  <SkillProgress
                    key={idx}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    gap={skill.gap}
                    priority={skill.priority}
                    courses={skill.courses}
                    hoursRequired={skill.hoursRequired}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Estimated upskilling effort: <strong>85 Hours</strong></span>
              <button
                onClick={() => setLearningModalOpen(true)}
                className="font-semibold text-indigo-600 hover:underline"
              >
                Launch Learning Path
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chart C: Employment Timeline */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-800">Employment Journey Timeline</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified career progression from NSQF certification to multi-source employment verification.
            </p>
          </div>
          <span className="self-start sm:self-auto text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Current Status: Employed at ABC Technologies
          </span>
        </div>

        <EmploymentTimeline timeline={employmentTimeline} />
      </div>

      {/* Learning Path Modal */}
      <LearningPathModal
        isOpen={learningModalOpen}
        onClose={() => setLearningModalOpen(false)}
        career={aiCareerRecommendation.recommendedCareer}
        currentMatch={profile.skillMatchPercentage}
        targetMatch={92}
      />
    </div>
  );
};

export default StudentDashboard;
