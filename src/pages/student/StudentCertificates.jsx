import React from 'react';
import { Award, ShieldCheck, Download, ExternalLink, QrCode } from 'lucide-react';
import { studentData } from '../../data/mockData';

export const StudentCertificates = () => {
  const { certificates } = studentData;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">Verifiable Digital Credentials</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Cryptographically signed vocational certificates verifiable via DigiLocker and India Blockchain Platform.
          </p>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 self-start sm:self-auto flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          DigiLocker Synced
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-soft hover:shadow-card transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {cert.status}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">{cert.id}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900">{cert.title}</h3>
              <p className="text-xs text-indigo-600 font-medium mt-1">{cert.issuer}</p>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <div className="flex justify-between">
                  <span>Issued Date:</span>
                  <strong className="text-slate-700">{cert.issuedOn}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Performance Grade:</span>
                  <strong className="text-emerald-600">{cert.grade}</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => alert(`Certificate ${cert.id} verification QR and hash verified against NCVET registry!`)}
                className="text-xs font-semibold text-slate-700 hover:text-indigo-600 flex items-center gap-1.5"
              >
                <QrCode className="w-4 h-4 text-slate-400" />
                <span>Verify QR Token</span>
              </button>

              <button
                onClick={() => alert(`Downloading verified PDF for ${cert.title}...`)}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCertificates;
