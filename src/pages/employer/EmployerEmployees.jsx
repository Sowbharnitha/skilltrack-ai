import React from 'react';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { useAuth } from '../../context/AuthContext';

export const EmployerEmployees = () => {
  const { employeesList, verifyEmployee } = useAuth();

  const columns = [
    { label: 'Name', accessor: 'name', render: (row) => <span className="font-bold text-slate-900">{row.name}</span> },
    { label: 'Employee ID', accessor: 'id', render: (row) => <span className="font-mono text-slate-500">{row.id}</span> },
    { label: 'Job Role', accessor: 'jobRole' },
    { label: 'Department', accessor: 'department' },
    { label: 'Joined Date', accessor: 'joinedDate' },
    { label: 'Status', accessor: 'employmentStatus', render: (row) => <StatusBadge status={row.employmentStatus} size="sm" /> },
    { label: 'Skill Match', accessor: 'skillMatch', render: (row) => <span className="font-bold text-indigo-600">{row.skillMatch}</span> },
    { label: 'Verification', accessor: 'verification', render: (row) => <StatusBadge status={row.verification} size="sm" /> },
    {
      label: 'Action',
      accessor: 'action',
      render: (row) => row.verification === 'Pending' ? (
        <button
          onClick={() => verifyEmployee(row.id)}
          className="px-2.5 py-1 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
        >
          Verify
        </button>
      ) : (
        <span className="text-xs font-semibold text-emerald-600">✓ Done</span>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">Corporate Employee Roster</h1>
        <p className="text-xs text-slate-500 mt-1">
          Complete registry of vocational trainees hired through accredited Skill India institutions.
        </p>
      </div>

      <DataTable
        title="Active Trainee Workforce"
        subtitle="Searchable and exportable corporate employment registry."
        columns={columns}
        data={employeesList}
        searchKey="name"
        pageSize={8}
      />
    </div>
  );
};

export default EmployerEmployees;
