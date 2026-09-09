import React from 'react';
import { User, Mail, Phone, MapPin, Building2, Award, Calendar, ShieldCheck, FileCheck } from 'lucide-react';
import { studentData } from '../../data/mockData';

export const StudentProfile = () => {
  const { profile } = studentData;

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-soft flex flex-col sm:flex-row items-center gap-6">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-24 h-24 rounded-2xl object-cover ring-4 ring-indigo-50 shadow-md"
        />
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-2xl font-black text-slate-900">{profile.name}</h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              ✓ {profile.verificationStatus}
            </span>
          </div>
          <p className="text-sm font-semibold text-indigo-600 mt-0.5">{profile.currentJob} at {profile.company}</p>
          <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-400" /> {profile.email}</span>
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-slate-400" /> {profile.phone}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {profile.location}</span>
          </div>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vocational Skilling Information */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Award className="w-4 h-4 text-indigo-600" />
            Vocational Skilling Credentials
          </h3>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-slate-50">
              <span className="text-slate-500">Training Institute:</span>
              <span className="font-semibold text-slate-800 text-right">{profile.trainingInstitute}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-50">
              <span className="text-slate-500">Cohort / Batch:</span>
              <span className="font-semibold text-slate-800">{profile.batch}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-50">
              <span className="text-slate-500">NCVET NSQF Level:</span>
              <span className="font-semibold text-indigo-600">{profile.nsqfLevel}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-50">
              <span className="text-slate-500">Date of Completion:</span>
              <span className="font-semibold text-slate-800">{profile.completionDate}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Skill India Registration ID:</span>
              <span className="font-mono font-bold text-slate-800">{profile.id}</span>
            </div>
          </div>
        </div>

        {/* Current Employment Status */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-soft space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Building2 className="w-4 h-4 text-emerald-600" />
            Verified Employment Overview
          </h3>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-slate-50">
              <span className="text-slate-500">Employer Organization:</span>
              <span className="font-semibold text-slate-800">{profile.company}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-50">
              <span className="text-slate-500">Designation:</span>
              <span className="font-semibold text-slate-800">{profile.currentJob}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-50">
              <span className="text-slate-500">Joining Date:</span>
              <span className="font-semibold text-slate-800">{profile.joiningDate}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-50">
              <span className="text-slate-500">EPFO UAN Number:</span>
              <span className="font-mono font-bold text-emerald-600">{profile.uanNumber}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Current Annual Package:</span>
              <span className="font-bold text-indigo-700">{profile.currentCtc}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
