import React from 'react';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { adminData } from '../../data/mockData';

export const InstituteStudents = () => {
  const columns = [
    { label: 'Trainee ID', accessor: 'id', render: (row) => <span className="font-mono text-slate-500">{row.id}</span> },
    { label: 'Name', accessor: 'name', render: (row) => <span className="font-bold text-slate-900">{row.name}</span> },
    { label: 'Enrolled Course', accessor: 'course' },
    { label: 'Assigned Employer', accessor: 'employer' },
    { label: 'Status', accessor: 'status', render: (row) => <StatusBadge status={row.status} size="sm" /> },
    { label: 'Verification', accessor: 'verification', render: (row) => <StatusBadge status={row.verification} size="sm" /> },
    { label: 'Salary', accessor: 'salary', render: (row) => <span className="font-bold text-emerald-600">{row.salary}</span> }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">Institute Trainee Directory</h1>
        <p className="text-xs text-slate-500 mt-1">
          Tracking 500 enrolled students across current training batches and alumni placement verification.
        </p>
      </div>

      <DataTable
        title="Active Student Cohorts"
        subtitle="Searchable trainee records with live employment outcomes."
        columns={columns}
        data={adminData.traineeRegistry}
        searchKey="name"
        pageSize={8}
      />
    </div>
  );
};

export default InstituteStudents;
