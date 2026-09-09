import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Users, Award } from 'lucide-react';
import StatCard from '../../components/common/StatCard';

export const AdminImpact = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">National Programme Impact & ROI</h1>
        <p className="text-xs text-slate-500 mt-1">
          Evaluating taxpayer fund utilization, public expenditure multipliers, and household income escalation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Scheme Investment"
          value="₹480 Cr"
          change="FY 2025-26"
          subtext="Budget allocated across ITIs & NSTIs"
          icon={DollarSign}
          accentColor="indigo"
        />
        <StatCard
          title="Generated Trainee Annual Wages"
          value="₹2,027 Cr"
          change="4.2x Multiplier"
          subtext="Direct economic injection to formal sector"
          icon={TrendingUp}
          accentColor="emerald"
        />
        <StatCard
          title="Average Payback Period"
          value="4.1 Months"
          change="Ultra-fast"
          subtext="Time for trainee tax contribution to repay training"
          icon={Award}
          accentColor="purple"
        />
        <StatCard
          title="Formal Sector Conversion"
          value="84.2%"
          change="+12% vs FY24"
          subtext="Transition from informal/unorganized labour"
          icon={Users}
          accentColor="blue"
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-soft space-y-4">
        <h3 className="text-base font-bold text-slate-900">Longitudinal Household Welfare Multiplier</h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Tracking indicates that for every ₹10,000 spent on NSQF-aligned advanced vocational skilling, trainee households experience a sustained monthly income escalation of ₹9,500 within 12 months, with 91% employment verification eliminating phantom subsidy leakage.
        </p>
      </div>
    </div>
  );
};

export default AdminImpact;
