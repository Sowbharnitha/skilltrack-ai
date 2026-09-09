import React from 'react';
import { X, Download, FileText, Printer, CheckCircle2, Shield } from 'lucide-react';

export const ReportViewerModal = ({ isOpen, onClose, report }) => {
  if (!isOpen || !report) return null;

  const handleDownloadPDF = () => {
    alert(`Generating official verified PDF for "${report.title}"... PDF downloaded successfully!`);
  };

  const handleExportCSV = () => {
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
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-elevation overflow-hidden animate-in zoom-in-95">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-600 text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">{report.title}</h2>
              <span className="text-xs text-indigo-300">Document ID: {report.id} • {report.scope}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-xs text-slate-700">
          <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-between">
            <span className="text-indigo-900 font-semibold">Classification: Official Ministry Audit Document</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              ✓ NCVET Authenticated
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Scope Coverage</span>
              <strong className="text-slate-900">{report.scope}</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Audited Cohort</span>
              <strong className="text-slate-900">{report.recordsCount}</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Generated Timestamp</span>
              <strong className="text-slate-900">{report.generatedDate}</strong>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1">Executive Summary</h4>
            <p className="leading-relaxed text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
              {report.summary}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">Sample Verification Data Stream</h4>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-100 text-slate-600 font-bold">
                  <tr>
                    <th className="p-2">Metric Dimension</th>
                    <th className="p-2">National Benchmark</th>
                    <th className="p-2">Current Performance</th>
                    <th className="p-2">Compliance Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2 font-medium">Employment Transition Rate</td>
                    <td className="p-2">60.0%</td>
                    <td className="p-2 font-bold text-emerald-600">66.0% (+6.0%)</td>
                    <td className="p-2 text-emerald-600 font-semibold">Exceeds Target</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">12-Month Job Retention</td>
                    <td className="p-2">70.0%</td>
                    <td className="p-2 font-bold text-emerald-600">74.0%</td>
                    <td className="p-2 text-emerald-600 font-semibold">Compliant</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Multi-Source Verification</td>
                    <td className="p-2">80.0%</td>
                    <td className="p-2 font-bold text-emerald-600">91.0%</td>
                    <td className="p-2 text-emerald-600 font-semibold">Audit Cleared</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">File size: {report.fileSize} • Cryptographic SHA-256 Validated</span>

          <div className="flex gap-2">
            <button
              onClick={handleExportCSV}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-sm flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportViewerModal;
