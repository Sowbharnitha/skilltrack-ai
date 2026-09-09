import React from 'react';
import { Shield, Lock, FileCheck, CheckCircle2, AlertTriangle, Users } from 'lucide-react';
import StatCard from '../../components/common/StatCard';

export const AdminPrivacy = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">National Data Governance & DPDP Compliance</h1>
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            DPDP Act 2023 Aligned
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Auditing data consent states, anonymization pipelines, and access control across 125,430 trainee profiles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Active Trainee Consents"
          value="98.4%"
          change="Compliant"
          subtext="Explicit purpose-bound authorizations"
          icon={Shield}
          accentColor="emerald"
        />
        <StatCard
          title="Consent Revocation Rate"
          value="1.6%"
          status="Processed"
          subtext="Right to Erasure honored within 48 hrs"
          icon={Lock}
          accentColor="indigo"
        />
        <StatCard
          title="Data Security Audit"
          value="Zero Breaches"
          change="ISO 27001 / SOC2"
          subtext="Continuous automated red-team verification"
          icon={FileCheck}
          accentColor="purple"
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-soft space-y-4">
        <h3 className="text-base font-bold text-slate-900">Data Minimization & Anonymization Architecture</h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          In strict adherence to the Digital Personal Data Protection (DPDP) Act 2023, macroeconomic reports and district intelligence views consume only mathematically irreversible k-anonymized telemetry. Direct trainee identifiers (Aadhaar, UAN, phone) remain sequestered inside hardware security modules (HSM) accessible only via multi-party cryptographic threshold signatures.
        </p>
      </div>
    </div>
  );
};

export default AdminPrivacy;
