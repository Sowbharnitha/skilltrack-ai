import React from 'react';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { adminData } from '../../data/mockData';

export const AdminTrainees = () => {
  const columns = [
    { label: 'Trainee ID', accessor: 'id', render: (row) => <span className="font-mono text-slate-500">{row.id}</span> },
    { label: 'Name', accessor: 'name', render: (row) => <span className="font-bold text-slate-900">{row.name}</span> },
    { label: 'District', accessor: 'district' },
    { label: 'Vocational Course', accessor: 'course' },
    { label: 'Verified Employer', accessor: 'employer' },
    { label: 'Employment Status', accessor: 'status', render: (row) => <StatusBadge status={row.status} size="sm" /> },
    { label: 'Verification', accessor: 'verification', render: (row) => <StatusBadge status={row.verification} size="sm" /> },
    { label: 'Current CTC', accessor: 'salary', render: (row) => <span className="font-bold text-emerald-600">{row.salary}</span> }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900">National Trainee Outcome Registry</h1>
        <p className="text-xs text-slate-500 mt-1">
          De-duplicated database tracking 125,430 certified trainees across PMKVY, DDU-GKY, and NAPS programs.
        </p>
      </div>

      <DataTable
        title="Central Trainee Register"
        subtitle="Filter by name, district, course, or verified employment status."
        columns={columns}
        data={adminData.traineeRegistry}
        searchKey="name"
        pageSize={8}
      />
    </div>
  );
};

export default AdminTrainees;
