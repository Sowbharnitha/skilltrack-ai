import React from 'react';
import { Shield, Info } from 'lucide-react';

export const ConsentToggle = ({
  id,
  title,
  description,
  enabled,
  onToggle,
  whyCollected,
  whoCanAccess,
  lastUpdated
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft hover:shadow-card transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-slate-900 text-sm">{title}</h4>
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
              enabled ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
            }`}>
              {enabled ? 'Consent Granted' : 'Disabled'}
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{description}</p>
        </div>

        {/* Accessible Toggle Switch */}
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          onClick={() => onToggle(id)}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
            enabled ? 'bg-indigo-600' : 'bg-slate-300'
          }`}
        >
          <span className="sr-only">Toggle {title}</span>
          <span
            aria-hidden="true"
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              enabled ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* DPDP Transparency Metadata */}
      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] text-slate-500">
        <div>
          <span className="font-semibold text-slate-700">Purpose: </span>
          <span>{whyCollected}</span>
        </div>
        <div>
          <span className="font-semibold text-slate-700">Access: </span>
          <span>{whoCanAccess}</span>
        </div>
        <div className="md:text-right">
          <span className="font-semibold text-slate-700">Last Synced: </span>
          <span>{lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export default ConsentToggle;
