import React, { useState } from 'react';
import { FileText, Download, Eye, Filter, Calendar, Layers } from 'lucide-react';
import { availableReports } from '../../data/mockData';
import ReportViewerModal from '../../components/common/ReportViewerModal';

export const AdminReports = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [filterType, setFilterType] = useState('All');

  const filteredReports = availableReports.filter((r) => {
    if (filterType === 'All') return true;
    return r.type.toLowerCase().includes(filterType.toLowerCase());
  });

  const handleExportAllCSV = () => {
    const headers = "Report ID,Title,Report Type,Scope,Records,Generated Date\n";
    const rows = availableReports.map(r => `"${r.id}","${r.title}","${r.type}","${r.scope}","${r.recordsCount}","${r.generatedDate}"`).join('\n');
    const csvContent = "data:text/csv;charset=utf-8," + headers + rows;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "national_workforce_reports_index.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">National Reports & Analytics Center</h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              6 Official Dossiers
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Download comprehensive executive reports and machine-readable datasets for policy planning and parliamentary review.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportAllCSV}
            className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Complete CSV Index</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 text-xs font-semibold">
        {['All', 'Employment Outcome', 'Skill Gap', 'District', 'Training Provider', 'Wage Progression', 'Retention'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilterType(tab)}
            className={`px-3.5 py-1.5 rounded-xl border transition-all ${
              filterType === tab
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Reports Grid (6 Reports per Section 11 specs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {report.type}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{report.id}</span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 mt-3 group-hover:text-indigo-600 transition-colors">
                {report.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{report.summary}</p>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400 space-y-1.5">
                <div className="flex justify-between">
                  <span>Scope:</span>
                  <strong className="text-slate-700">{report.scope}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Audited Cohort:</span>
                  <strong className="text-indigo-600 font-semibold">{report.recordsCount}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Date Generated:</span>
                  <strong className="text-slate-700">{report.generatedDate}</strong>
                </div>
              </div>
            </div>

            {/* 3 Buttons per prompt: View Report, Download PDF, Export CSV */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5">
              <button
                onClick={() => setSelectedReport(report)}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200 rounded-lg flex items-center gap-1"
              >
                <Eye className="w-3.5 h-3.5 text-slate-400" />
                <span>View</span>
              </button>

              <button
                onClick={() => {
                  alert(`Downloading PDF for "${report.title}"... Simulated official download completed.`);
                }}
                className="px-2.5 py-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </button>

              <button
                onClick={() => {
                  const csvContent = "data:text/csv;charset=utf-8," + 
                    "Report Title,Scope,Records,Generated Date,Status\n" +
                    `"${report.title}","${report.scope}","${report.recordsCount}","${report.generatedDate}","Verified"`;
                  const encodedUri = encodeURI(csvContent);
                  const link = document.createElement("a");
                  link.setAttribute("href", encodedUri);
                  link.setAttribute("download", `${report.title.toLowerCase().replace(/\s+/g, '_')}.csv`);
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-lg flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CSV</span>
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

export default AdminReports;
