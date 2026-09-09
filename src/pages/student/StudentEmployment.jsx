import React, { useState } from 'react';
import {
  ShieldCheck, CheckCircle2, FileText, Building2, User, Calendar,
  Download, ExternalLink, Hash, Award, Check, Clock
} from 'lucide-react';
import ConfidenceGauge from '../../components/verification/ConfidenceGauge';
import { studentData } from '../../data/mockData';

export const StudentEmployment = () => {
  const { profile, verificationSources } = studentData;
  const [downloading, setDownloading] = useState(false);

  const handleDownloadProof = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert("Official Cryptographic Employment Verification Certificate (PDF) generated and downloaded with DigiLocker QR signature!");
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">Employment Verification Portal</h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {profile.verificationStatus}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Tamper-proof multi-source employment ledger connecting Aadhaar, DigiLocker, Employer HR API, and EPFO UAN.
          </p>
        </div>

        <button
          onClick={handleDownloadProof}
          disabled={downloading}
          className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 rounded-xl shadow-sm transition-all flex items-center gap-1.5 self-start md:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>{downloading ? 'Exporting Certificate...' : 'Download Verified Certificate'}</span>
        </button>
      </div>

      {/* Main Details & Confidence Gauge Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Employment Record Card (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              Verified Employment Record
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              Audit ID: <strong className="text-indigo-600">ST-VER-8942-026</strong>
            </span>
          </div>

          {/* Key Attributes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Student / Trainee
              </span>
              <p className="text-base font-bold text-slate-900 mt-0.5">{profile.name}</p>
              <p className="text-xs text-slate-500">ID: {profile.id}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Company / Employer
              </span>
              <p className="text-base font-bold text-slate-900 mt-0.5">{profile.company}</p>
              <p className="text-xs text-slate-500">{profile.location}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Job Role & Designation
              </span>
              <p className="text-base font-bold text-slate-900 mt-0.5">{profile.targetJob}</p>
              <p className="text-xs text-slate-500">{profile.employmentType}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Employment Start Date
              </span>
              <p className="text-base font-bold text-slate-900 mt-0.5">{profile.joiningDate}</p>
              <p className="text-xs text-emerald-600 font-medium">EPFO UAN: {profile.uanNumber}</p>
            </div>
          </div>

          {/* Current CTC & Terms */}
          <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-indigo-900 block">Verified Starting Compensation</span>
              <span className="text-lg font-black text-indigo-700">{profile.currentCtc}</span>
              <span className="text-xs text-slate-500 block">Monthly In-Hand: ₹27,000</span>
            </div>

            <div className="text-xs text-indigo-950/80 bg-white px-3 py-2 rounded-lg border border-indigo-200/80">
              <span className="font-semibold block text-slate-800">DigiLocker Integration:</span>
              <span>Salary slip and Form 16 cross-authenticated.</span>
            </div>
          </div>
        </div>

        {/* Confidence Gauge (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft flex flex-col items-center justify-center text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Verification Integrity Gauge
          </h3>
          <ConfidenceGauge score={profile.verificationScore} status={profile.verificationStatus} />
          
          <div className="mt-4 pt-3 border-t border-slate-100 w-full text-left text-xs space-y-1.5 text-slate-500">
            <div className="flex justify-between">
              <span>Aadhaar Authenticity:</span>
              <strong className="text-emerald-600 font-semibold">100%</strong>
            </div>
            <div className="flex justify-between">
              <span>Corporate Domain Proof:</span>
              <strong className="text-emerald-600 font-semibold">100%</strong>
            </div>
            <div className="flex justify-between">
              <span>EPFO UAN Active Credit:</span>
              <strong className="text-emerald-600 font-semibold">Yes (Active)</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Verification Sources Breakdown per prompt specs */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft">
        <div className="mb-4">
          <h3 className="text-base font-bold text-slate-800">4-Way Multi-Source Triangulation Matrix</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Employment claims are authenticated across all four distinct regulatory and institutional checkpoints:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {verificationSources.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/30 flex items-start gap-3 hover:bg-emerald-50/60 transition-colors"
            >
              <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900">{item.source}</h4>
                  <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-emerald-200/80 text-emerald-800">
                    Validated
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.method}</p>
                <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Verified Date: {item.verifiedDate}</span>
                  <span className="font-semibold text-emerald-700">Weight: +{item.confidenceWeight}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentEmployment;
