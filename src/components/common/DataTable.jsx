import React, { useState } from 'react';
import { Search, Download, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

export const DataTable = ({
  title,
  subtitle,
  columns,
  data = [],
  searchKey = 'name',
  searchPlaceholder = 'Search records...',
  actions,
  pageSize = 5
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((item) => {
    if (!searchTerm) return true;
    const val = item[searchKey] || Object.values(item).join(' ');
    return String(val).toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const currentRecords = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleExportCSV = () => {
    if (!data.length) return;
    const headers = columns.map(c => c.label).join(',');
    const rows = filteredData.map(row => 
      columns.map(c => `"${String(c.render ? c.accessor(row) : (row[c.accessor] ?? '')).replace(/"/g, '""')}"`).join(',')
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${(title || 'export').toLowerCase().replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-soft overflow-hidden">
      {/* Header bar */}
      <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-800 text-base">{title}</h3>
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Search Input */}
          <div className="relative min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={searchPlaceholder}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
          </div>

          <button
            onClick={handleExportCSV}
            title="Export CSV"
            className="p-1.5 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 rounded-lg text-xs font-medium inline-flex items-center gap-1 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">CSV</span>
          </button>

          {actions}
        </div>
      </div>

      {/* Table Area (Horizontally Scrollable) */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-100 text-slate-500 font-semibold uppercase tracking-wider">
              {columns.map((col, idx) => (
                <th key={idx} className={`py-3 px-4 ${col.className || ''}`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {currentRecords.length > 0 ? (
              currentRecords.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
                  {columns.map((col, cIdx) => (
                    <td key={cIdx} className={`py-3 px-4 ${col.className || ''}`}>
                      {col.render ? col.render(row) : (row[col.accessor] ?? '-')}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="py-8 text-center text-slate-400">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-3 sm:px-5 border-t border-slate-100 bg-slate-50/40 flex items-center justify-between text-xs text-slate-500">
        <div>
          Showing <span className="font-semibold text-slate-700">{filteredData.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}</span> to{' '}
          <span className="font-semibold text-slate-700">
            {Math.min(currentPage * pageSize, filteredData.length)}
          </span>{' '}
          of <span className="font-semibold text-slate-700">{filteredData.length}</span> results
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1 rounded border border-slate-200 bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-2 font-medium text-slate-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-1 rounded border border-slate-200 bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
