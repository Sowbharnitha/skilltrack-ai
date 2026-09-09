import React from 'react';
import { MoreVertical, Info } from 'lucide-react';

export const ChartCard = ({
  title,
  subtitle,
  children,
  action,
  height = 'h-72',
  badge,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft hover:shadow-card transition-all flex flex-col justify-between ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-slate-800 text-base">{title}</h3>
            {badge && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
          )}
        </div>

        {action && <div>{action}</div>}
      </div>

      <div className={`w-full ${height} relative`}>
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
