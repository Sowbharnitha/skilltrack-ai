import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import StatusBadge from './StatusBadge';

export const StatCard = ({
  title,
  value,
  status,
  change,
  subtext,
  icon: Icon,
  accentColor = 'indigo',
  badgeText
}) => {
  const getAccentBg = () => {
    switch (accentColor) {
      case 'emerald': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'amber': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'blue': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'purple': return 'bg-purple-50 text-purple-600 border-purple-100';
      default: return 'bg-indigo-50 text-indigo-600 border-indigo-100';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft hover:shadow-card transition-card relative overflow-hidden group">
      {/* Subtle top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${
        accentColor === 'emerald' ? 'bg-emerald-500' :
        accentColor === 'amber' ? 'bg-amber-500' :
        accentColor === 'blue' ? 'bg-blue-500' :
        accentColor === 'purple' ? 'bg-purple-500' : 'bg-indigo-600'
      }`} />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">{value}</span>
          </div>
        </div>

        {Icon && (
          <div className={`p-2.5 rounded-lg border ${getAccentBg()} group-hover:scale-110 transition-transform`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1.5 truncate">
          {status && <StatusBadge status={status} size="sm" />}
          {change && (
            <span className={`font-semibold flex items-center gap-0.5 ${
              change.startsWith('+') || change.includes('rate') ? 'text-emerald-600' : 'text-slate-600'
            }`}>
              {change.startsWith('+') && <TrendingUp className="w-3.5 h-3.5" />}
              {change}
            </span>
          )}
          {subtext && <span className="truncate text-slate-500">{subtext}</span>}
        </div>

        {badgeText && (
          <span className="shrink-0 px-2 py-0.5 rounded bg-slate-100 font-medium text-slate-600">
            {badgeText}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatCard;
