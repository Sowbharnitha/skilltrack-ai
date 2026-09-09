import React, { useState } from 'react';
import { FileText, Download, Eye, ExternalLink } from 'lucide-react';
import { availableReports } from '../../data/mockData';
import ReportViewerModal from '../../components/common/ReportViewerModal';

export const InstituteReports = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">Institutional Audit & Placement Reports</h1>
        <p className="text-xs text-slate-500 mt-1">
          Standardized downloadable compliance reports prepared for NCVET review and state skill development mission audits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableReports.map((rep) => (
          <div key={rep.id} className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft hover:shadow-card transition-all flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                {rep.type}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-2">{rep.title}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{rep.summary}</p>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>Scope:</span>
                  <strong className="text-slate-700">{rep.scope}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <strong className="text-slate-700">{rep.generatedDate}</strong>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setSelectedReport(rep)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200 rounded-lg flex items-center gap-1"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Report</span>
              </button>

              <button
                onClick={() => setSelectedReport(rep)}
                className="px-3 py-1.5 text-xs font-bold text-indigo-600 hover:bg-indigo-50 border border-indigo-200 rounded-lg flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <ReportViewerModal
        isOpen={Boolean(selectedReport)}
        onClose={() => setSelectedReport(null)}
        report={selectedReport}
      />
    </div>
  );
};

export default InstituteReports;
