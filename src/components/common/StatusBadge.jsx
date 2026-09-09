import React from 'react';
import { CheckCircle2, Clock, AlertTriangle, ShieldCheck, XCircle, Sparkles } from 'lucide-react';

export const StatusBadge = ({ status, size = 'md', className = '' }) => {
  const getBadgeConfig = (statusStr) => {
    const s = String(statusStr || '').toLowerCase();

    if (s.includes('highly verified')) {
      return {
        bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1" />,
        label: 'Highly Verified'
      };
    }
    if (s.includes('verified')) {
      return {
        bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1" />,
        label: statusStr || 'Verified'
      };
    }
    if (s.includes('pending')) {
      return {
        bg: 'bg-amber-50 text-amber-700 border-amber-200',
        icon: <Clock className="w-3.5 h-3.5 text-amber-500 mr-1" />,
        label: statusStr || 'Pending'
      };
    }
    if (s.includes('critical') || s.includes('high') || s.includes('unemployed')) {
      return {
        bg: 'bg-rose-50 text-rose-700 border-rose-200',
        icon: <AlertTriangle className="w-3.5 h-3.5 text-rose-500 mr-1" />,
        label: statusStr
      };
    }
    if (s.includes('completed')) {
      return {
        bg: 'bg-blue-50 text-blue-700 border-blue-200',
        icon: <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mr-1" />,
        label: statusStr || 'Completed'
      };
    }
    if (s.includes('ai') || s.includes('active') || s.includes('full-time') || s.includes('employed')) {
      return {
        bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        icon: <Sparkles className="w-3.5 h-3.5 text-indigo-600 mr-1" />,
        label: statusStr
      };
    }

    return {
      bg: 'bg-slate-100 text-slate-700 border-slate-200',
      icon: null,
      label: statusStr || 'Unknown'
    };
  };

  const config = getBadgeConfig(status);
  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-xs font-medium px-2.5 py-1';

  return (
    <span
      className={`inline-flex items-center rounded-full border ${config.bg} ${sizeClasses} ${className}`}
    >
      {config.icon}
      <span>{config.label}</span>
    </span>
  );
};

export default StatusBadge;
