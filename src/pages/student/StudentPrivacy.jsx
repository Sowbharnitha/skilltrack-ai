import React, { useState } from 'react';
import { Shield, Lock, AlertTriangle, CheckCircle2, RotateCcw, FileText, Info } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import ConsentToggle from '../../components/common/ConsentToggle';

export const StudentPrivacy = () => {
  const { consents, toggleConsent, withdrawAllConsents } = useAuth();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const activeCount = consents.filter(c => c.enabled).length;

  const handleWithdrawAll = () => {
    withdrawAllConsents();
    setShowConfirmModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">Privacy & Consent Governance</h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-indigo-600" />
              DPDP Act 2023 Compliant
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            You retain absolute sovereignty over your employment, salary, and skill data. You may grant or revoke granular consent at any time with instant real-time revocation.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-4 py-2 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Withdraw All Consent</span>
          </button>
        </div>
      </div>

      {/* Consent Status Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-soft">
          <span className="text-[11px] font-semibold uppercase text-slate-400 block">Active Data Consents</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{activeCount} / {consents.length}</span>
            <span className="text-xs font-bold text-emerald-600">{Math.round((activeCount / consents.length) * 100)}% active</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-soft">
          <span className="text-[11px] font-semibold uppercase text-slate-400 block">Encryption Standard</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-lg font-bold text-slate-900">AES-256 GCM</span>
            <span className="text-xs text-slate-500">Zero Knowledge</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-soft">
          <span className="text-[11px] font-semibold uppercase text-slate-400 block">Right to Erasure</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-lg font-bold text-slate-900">Guaranteed</span>
            <span className="text-xs text-slate-500">Section 12 DPDP</span>
          </div>
        </div>
      </div>

      {/* 5 Granular Consent Toggles per Section 10 prompt */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800">
          Granular Data Permissions & Telemetry Controls
        </h3>

        {consents.map((item) => (
          <ConsentToggle
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            enabled={item.enabled}
            onToggle={toggleConsent}
            whyCollected={item.whyCollected}
            whoCanAccess={item.whoCanAccess}
            lastUpdated={item.lastUpdated}
          />
        ))}
      </div>

      {/* Data Transparency Ledger Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft overflow-hidden">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
          Data Transparency & Purpose Specification Ledger
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                <th className="py-2.5 px-3">Data Field Collected</th>
                <th className="py-2.5 px-3">Why It Is Collected (Purpose)</th>
                <th className="py-2.5 px-3">Who Can Access</th>
                <th className="py-2.5 px-3">Retention / Expiry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-800">Trainee Name, Phone & Aadhaar Mask</td>
                <td className="py-3 px-3">Identity de-duplication across central schemes (PMKVY/DDU-GKY).</td>
                <td className="py-3 px-3">NSDC UIDAI Authenticated Vault</td>
                <td className="py-3 px-3">3 Years Post-Training</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-800">Employer Name & Monthly CTC</td>
                <td className="py-3 px-3">Verify genuine employment outcomes & prevent fake placement claims.</td>
                <td className="py-3 px-3">Institute Officers & MoSDE Evaluators</td>
                <td className="py-3 px-3">12 Months (Audit Window)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-800">Skill Test & Assessment Scores</td>
                <td className="py-3 px-3">AI algorithm calculates regional skill shortages and career paths.</td>
                <td className="py-3 px-3">AI Recommendation Subsystem</td>
                <td className="py-3 px-3">Indefinite (Profile Ledger)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-800">EPFO UAN Linkage Token</td>
                <td className="py-3 px-3">Corroborates provident fund deposit as proof of formal employment.</td>
                <td className="py-3 px-3">Govt EPFO Gateway (Read-Only)</td>
                <td className="py-3 px-3">Active Employment Tenure</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal for "Withdraw All Consent" */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-elevation border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900">Withdraw All Data Consents?</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              This will disable automated employment verification, pause career recommendation AI models, and suppress your profile from institutional placement audit logs in compliance with Section 12 of the DPDP Act 2023.
            </p>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleWithdrawAll}
                className="px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition-colors"
              >
                Confirm Revocation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentPrivacy;
