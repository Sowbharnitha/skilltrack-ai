import React, { createContext, useContext, useState, useEffect } from 'react';
import { studentData, employerData, instituteData, adminData } from '../data/mockData';

const AuthContext = createContext();

export const roleProfiles = {
  student: {
    role: 'student',
    displayName: 'Arun Kumar',
    roleLabel: 'Trainee / Student',
    subLabel: 'PMKVY-4.0 Data Analytics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    baseRoute: '/student'
  },
  employer: {
    role: 'employer',
    displayName: 'Rajesh V. (HR Lead)',
    roleLabel: 'Employer',
    subLabel: 'ABC Technologies Pvt Ltd',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    baseRoute: '/employer'
  },
  institute: {
    role: 'institute',
    displayName: 'Dr. K. S. Sundaram',
    roleLabel: 'Training Institute',
    subLabel: 'NSTI Bengaluru (NCVET Grade A++)',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250',
    baseRoute: '/institute'
  },
  admin: {
    role: 'admin',
    displayName: 'Shri R. Sharma (Director)',
    roleLabel: 'Government Admin',
    subLabel: 'Ministry of Skill Development & Entrepreneurship',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    baseRoute: '/admin'
  }
};

export const AuthProvider = ({ children }) => {
  const [currentRole, setCurrentRole] = useState(() => {
    return localStorage.getItem('skilltrack_role') || 'student';
  });

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "3-Month Pulse Follow-up Due",
      message: "Please submit your retention and wage progress confirmation by 15 Sep 2026.",
      time: "10m ago",
      read: false,
      type: "pulse"
    },
    {
      id: 2,
      title: "Employment Verification Confirmed",
      message: "ABC Technologies corroborated your joining as Junior Data Analyst (92% confidence score).",
      time: "2h ago",
      read: false,
      type: "verification"
    },
    {
      id: 3,
      title: "AI Skill Recommendation Updated",
      message: "High demand detected for Power BI and Advanced SQL in Bengaluru region.",
      time: "1d ago",
      read: true,
      type: "skill"
    }
  ]);

  // Dynamic consent settings state
  const [consents, setConsents] = useState(() => studentData.privacySettings);

  // Dynamic employer employees state (for interactive verification demo)
  const [employeesList, setEmployeesList] = useState(() => employerData.employees);

  const switchRole = (newRole) => {
    if (roleProfiles[newRole]) {
      setCurrentRole(newRole);
      localStorage.setItem('skilltrack_role', newRole);
    }
  };

  const toggleConsent = (consentId) => {
    setConsents((prev) =>
      prev.map((item) =>
        item.id === consentId ? { ...item, enabled: !item.enabled, lastUpdated: 'Just now' } : item
      )
    );
  };

  const withdrawAllConsents = () => {
    setConsents((prev) =>
      prev.map((item) => ({ ...item, enabled: false, lastUpdated: 'Just now' }))
    );
  };

  const verifyEmployee = (employeeId) => {
    setEmployeesList((prev) =>
      prev.map((emp) =>
        emp.id === employeeId ? { ...emp, verification: 'Verified' } : emp
      )
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const currentUser = roleProfiles[currentRole] || roleProfiles.student;

  return (
    <AuthContext.Provider
      value={{
        currentRole,
        currentUser,
        roleProfiles,
        switchRole,
        notifications,
        markAllNotificationsRead,
        consents,
        toggleConsent,
        withdrawAllConsents,
        employeesList,
        verifyEmployee
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
