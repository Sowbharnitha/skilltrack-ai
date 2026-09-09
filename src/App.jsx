import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './components/layout/DashboardLayout';

// Public Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProfile from './pages/student/StudentProfile';
import StudentSkills from './pages/student/StudentSkills';
import StudentEmployment from './pages/student/StudentEmployment';
import StudentSkillGap from './pages/student/StudentSkillGap';
import StudentCareer from './pages/student/StudentCareer';
import StudentFollowups from './pages/student/StudentFollowups';
import StudentCertificates from './pages/student/StudentCertificates';
import StudentPrivacy from './pages/student/StudentPrivacy';

// Employer Pages
import EmployerDashboard from './pages/employer/EmployerDashboard';
import EmployerEmployees from './pages/employer/EmployerEmployees';
import EmployerVerify from './pages/employer/EmployerVerify';
import EmployerJobs from './pages/employer/EmployerJobs';
import EmployerFeedback from './pages/employer/EmployerFeedback';

// Institute Pages
import InstituteDashboard from './pages/institute/InstituteDashboard';
import InstituteStudents from './pages/institute/InstituteStudents';
import InstituteCourses from './pages/institute/InstituteCourses';
import InstituteOutcomes from './pages/institute/InstituteOutcomes';
import InstituteReports from './pages/institute/InstituteReports';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminTrainees from './pages/admin/AdminTrainees';
import AdminEmployment from './pages/admin/AdminEmployment';
import AdminSkillGaps from './pages/admin/AdminSkillGaps';
import AdminDistricts from './pages/admin/AdminDistricts';
import AdminProviders from './pages/admin/AdminProviders';
import AdminImpact from './pages/admin/AdminImpact';
import AdminReports from './pages/admin/AdminReports';
import AdminPrivacy from './pages/admin/AdminPrivacy';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Student Routes */}
          <Route path="/student" element={<DashboardLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="skills" element={<StudentSkills />} />
            <Route path="employment" element={<StudentEmployment />} />
            <Route path="skill-gap" element={<StudentSkillGap />} />
            <Route path="career" element={<StudentCareer />} />
            <Route path="followups" element={<StudentFollowups />} />
            <Route path="certificates" element={<StudentCertificates />} />
            <Route path="privacy" element={<StudentPrivacy />} />
          </Route>

          {/* Employer Routes */}
          <Route path="/employer" element={<DashboardLayout />}>
            <Route index element={<EmployerDashboard />} />
            <Route path="employees" element={<EmployerEmployees />} />
            <Route path="verify" element={<EmployerVerify />} />
            <Route path="jobs" element={<EmployerJobs />} />
            <Route path="skills" element={<EmployerJobs />} />
            <Route path="feedback" element={<EmployerFeedback />} />
          </Route>

          {/* Training Institute Routes */}
          <Route path="/institute" element={<DashboardLayout />}>
            <Route index element={<InstituteDashboard />} />
            <Route path="students" element={<InstituteStudents />} />
            <Route path="courses" element={<InstituteCourses />} />
            <Route path="outcomes" element={<InstituteOutcomes />} />
            <Route path="placement" element={<InstituteOutcomes />} />
            <Route path="skill-gaps" element={<InstituteDashboard />} />
            <Route path="reports" element={<InstituteReports />} />
          </Route>

          {/* Government Admin Routes */}
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="trainees" element={<AdminTrainees />} />
            <Route path="employment" element={<AdminEmployment />} />
            <Route path="skill-gaps" element={<AdminSkillGaps />} />
            <Route path="districts" element={<AdminDistricts />} />
            <Route path="providers" element={<AdminProviders />} />
            <Route path="impact" element={<AdminImpact />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="privacy" element={<AdminPrivacy />} />
          </Route>

          {/* Catch-all Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
