import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ConfidenceGauge = ({ score = 92, status = "Highly Verified" }) => {
  const strokeDashoffset = 283 - (283 * score) / 100;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-36 h-36 flex items-center justify-center">
        {/* SVG Circle Gauge */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Track */}
          <circle
            cx="50"
            cy="50"
            r="45"
            className="text-slate-100"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
          />
          {/* Progress Stroke */}
          <circle
            cx="50"
            cy="50"
            r="45"
            className="text-emerald-500 transition-all duration-1000 ease-out"
            strokeWidth="8"
            strokeDasharray="283"
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <ShieldCheck className="w-6 h-6 text-emerald-600 mb-0.5" />
          <span className="text-3xl font-extrabold text-slate-900 leading-none">{score}%</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mt-1">Confidence</span>
        </div>
      </div>

      <div className="mt-3 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          {status}
        </span>
        <p className="text-[11px] text-slate-500 mt-1">
          Triangulated via 4 independent verification channels
        </p>
      </div>
    </div>
  );
};

export default ConfidenceGauge;
