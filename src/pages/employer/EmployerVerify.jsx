import React, { useState } from 'react';
import { CheckSquare, ShieldCheck, Check, Clock, FileText, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import StatusBadge from '../../components/common/StatusBadge';

export const EmployerVerify = () => {
  const { employeesList, verifyEmployee } = useAuth();
  const pendingEmployees = employeesList.filter(e => e.verification === 'Pending');

  const [selectedEmp, setSelectedEmp] = useState(pendingEmployees[0] || null);
  const [successMsg, setSuccessMsg] = useState('');

  const handleVerify = (id) => {
    verifyEmployee(id);
    setSuccessMsg(`Successfully corroborated employment for Employee ID ${id}! Real-time verification hash emitted to NCVET portal.`);
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">Employment Verification Workspace</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            HR authorization dashboard to confirm placement claims, probation status, and monthly payroll disbursement.
          </p>
        </div>
        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 self-start sm:self-auto">
          {pendingEmployees.length} Trainees Pending Verification
        </span>
      </div>

      {successMsg && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Pending Queue (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft space-y-3">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Pending Authorization Queue</h3>

          {pendingEmployees.length > 0 ? (
            pendingEmployees.map((emp) => (
              <div
                key={emp.id}
                onClick={() => setSelectedEmp(emp)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  selectedEmp?.id === emp.id ? 'border-indigo-600 bg-indigo-50/50 shadow-sm' : 'border-slate-200 bg-slate-50 hover:bg-white'
                }`}
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{emp.name}</h4>
                  <span className="text-[11px] text-slate-500">{emp.jobRole} • {emp.department}</span>
                  <span className="text-[10px] text-indigo-600 block mt-0.5">Joined: {emp.joinedDate}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVerify(emp.id);
                  }}
                  className="px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
                >
                  Verify Now
                </button>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-400 text-xs">
              All trainees currently verified! No pending authorizations.
            </div>
          )}
        </div>

        {/* Selected Trainee Verification Inspector (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-soft space-y-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
            Verification Proof Inspector
          </h3>

          {selectedEmp ? (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Candidate Name</span>
                  <strong className="text-slate-800 text-sm">{selectedEmp.name}</strong>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Internal Employee ID</span>
                  <strong className="text-slate-800 font-mono text-sm">{selectedEmp.id}</strong>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Designation / Role:</span>
                  <span className="font-bold text-slate-800">{selectedEmp.jobRole}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Department:</span>
                  <span className="font-bold text-slate-800">{selectedEmp.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Training Institute:</span>
                  <span className="font-bold text-indigo-600">{selectedEmp.institute}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Monthly Compensation:</span>
                  <span className="font-bold text-emerald-600">{selectedEmp.salary}</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-800">
                <span className="font-bold block">Confirmation Checkpoint:</span>
                <span>By clicking verify, ABC Technologies formally certifies that {selectedEmp.name} is currently employed in active capacity with salary credited via official banking channels.</span>
              </div>

              <button
                onClick={() => handleVerify(selectedEmp.id)}
                className="w-full py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Confirm & Sign Employment Verification</span>
              </button>
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400 text-xs">
              Select a candidate from the queue to inspect proof details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployerVerify;
