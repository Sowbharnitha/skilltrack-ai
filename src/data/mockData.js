// SkillTrack AI - Master Mock Data Store (SIH26135)
// Realistically modeled on MoSDE, NCVET, NSDC, and PMKVY 4.0 skilling ecosystem

export const systemMeta = {
  problemStatement: "SIH26135",
  title: "SkillTrack AI",
  subtitle: "AI-Powered Employment Outcome Tracking & Career Intelligence",
  edition: "Smart India Hackathon 2026",
  ministry: "Ministry of Skill Development & Entrepreneurship",
  version: "v2.6.4"
};

// ==================== 1. STUDENT DATA (Arun Kumar) ====================
export const studentData = {
  profile: {
    id: "TR-2026-8942",
    name: "Arun Kumar",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    email: "arun.kumar@alumni.skilltrack.gov.in",
    phone: "+91 98452 31089",
    trainingInstitute: "National Skill Training Institute (NSTI), Bengaluru",
    batch: "PMKVY-4.0 Data Analytics Cohort 14",
    completionDate: "15 May 2026",
    nsqfLevel: "Level 6 (Specialized Data Operations)",
    targetJob: "Data Analyst",
    currentJob: "Junior Data Analyst",
    company: "ABC Technologies Pvt Ltd",
    location: "Bengaluru, Karnataka",
    uanNumber: "100984712034",
    joiningDate: "12 June 2026",
    employmentType: "Full-Time Permanent",
    employmentStatus: "Employed",
    verificationStatus: "Highly Verified",
    verificationScore: 92,
    skillMatchPercentage: 78,
    careerProgressPercentage: 72,
    nextFollowupDate: "15 Sep 2026",
    currentCtc: "₹3,24,000 / annum"
  },

  kpiCards: {
    employmentStatus: {
      title: "Employment Status",
      value: "Employed",
      status: "Verified",
      subtext: "Verified via EPFO & Employer Portal"
    },
    skillMatch: {
      title: "Skill Match",
      value: "78%",
      status: "+6% this quarter",
      subtext: "Compared to Junior Data Analyst roles"
    },
    careerProgress: {
      title: "Career Progress",
      value: "72%",
      status: "On Track",
      subtext: "Towards Senior Analyst trajectory"
    },
    nextFollowup: {
      title: "Next Follow-up",
      value: "15 Sep 2026",
      status: "3-Month Pulse",
      subtext: "Retention & Wage satisfaction review"
    }
  },

  skillsComparison: [
    { skill: "Python", current: 85, required: 80, category: "Programming" },
    { skill: "SQL", current: 75, required: 90, category: "Database" },
    { skill: "Excel", current: 95, required: 75, category: "Analytics" },
    { skill: "Power BI", current: 40, required: 85, category: "Visualization" },
    { skill: "Statistics", current: 65, required: 80, category: "Theory" },
    { skill: "Machine Learning", current: 30, required: 70, category: "Advanced" },
    { skill: "Data Cleaning", current: 80, required: 85, category: "Data Ops" }
  ],

  salaryProgression: [
    { period: "Month 1", salary: 15000, label: "₹15,000 (Probation)" },
    { period: "Month 3", salary: 18000, label: "₹18,000 (Assessment)" },
    { period: "Month 6", salary: 22000, label: "₹22,000 (Confirmation)" },
    { period: "Month 12", salary: 27000, label: "₹27,000 (Projected Base)" }
  ],

  employmentTimeline: [
    {
      id: 1,
      title: "Training Completed",
      date: "15 May 2026",
      status: "Completed",
      organization: "NSTI Bengaluru",
      badge: "Grade A",
      details: "Successfully cleared NCVET Practical & Theory assessments with 88% aggregate."
    },
    {
      id: 2,
      title: "Job Search & Drive",
      date: "20 May 2026",
      status: "Completed",
      organization: "Skill India Rozgar Mela",
      badge: "3 Interviews",
      details: "Profile shortlisted by ABC Technologies, Wipro Digital, and QuantIQ Analytics."
    },
    {
      id: 3,
      title: "Technical Interview",
      date: "28 May 2026",
      status: "Completed",
      organization: "ABC Technologies",
      badge: "Offer Extended",
      details: "Cleared live SQL problem solving and data visualization round."
    },
    {
      id: 4,
      title: "Employment Commenced",
      date: "12 June 2026",
      status: "Completed",
      organization: "ABC Technologies",
      badge: "Employed",
      details: "Onboarded as Junior Data Analyst under Enterprise Analytics BU."
    },
    {
      id: 5,
      title: "Multi-Source Verification",
      date: "20 June 2026",
      status: "Completed",
      organization: "SkillTrack AI Verification Engine",
      badge: "92% Confidence",
      details: "Automated triangulation of Employer Offer Letter, EPFO UAN, and Trainee Consent."
    }
  ],

  missingSkills: [
    {
      name: "Advanced SQL",
      proficiency: 65,
      gap: 25,
      priority: "High",
      courses: "Window functions, partitioning & execution plan optimization",
      hoursRequired: 20
    },
    {
      name: "Power BI",
      proficiency: 40,
      gap: 45,
      priority: "Critical",
      courses: "DAX calculations, interactive dashboards & Power Query",
      hoursRequired: 35
    },
    {
      name: "Cloud Computing",
      proficiency: 25,
      gap: 55,
      priority: "Medium",
      courses: "AWS Athena & S3 cloud data lake fundamentals",
      hoursRequired: 30
    }
  ],

  aiCareerRecommendation: {
    recommendedCareer: "Data Analyst",
    matchPercentage: 87,
    marketDemand: "Very High (+34% YoY in Tech/Logistics)",
    averageEntrySalary: "₹3,50,000 - ₹5,20,000 / yr",
    requiredSkills: ["Python", "SQL", "Power BI", "Statistics"],
    actionPlan: [
      "Complete DAX mastery module on SWAYAM / NSDC e-SkillIndia",
      "Solve 25 advanced SQL business cases on HackerRank",
      "Deploy portfolio dashboard on public Power BI service"
    ],
    alternativeRoles: [
      { role: "Business Intelligence Specialist", match: 81, salary: "₹4.5 LPA" },
      { role: "Junior Data Engineer", match: 74, salary: "₹4.8 LPA" },
      { role: "MIS Executive", match: 92, salary: "₹3.2 LPA" }
    ]
  },

  verificationSources: [
    {
      source: "Student Confirmation",
      verified: true,
      verifiedDate: "12 June 2026",
      method: "Aadhaar OTP Authenticated Trainee Self-Declaration",
      confidenceWeight: 25
    },
    {
      source: "Employer Confirmation",
      verified: true,
      verifiedDate: "15 June 2026",
      method: "Official Corporate HR Portal API (ABC Technologies)",
      confidenceWeight: 35
    },
    {
      source: "Document Proof",
      verified: true,
      verifiedDate: "16 June 2026",
      method: "Offer Letter OCR & DigiLocker Salary Slip verification",
      confidenceWeight: 20
    },
    {
      source: "Follow-up Confirmation",
      verified: true,
      verifiedDate: "12 July 2026",
      method: "Automated 30-day WhatsApp conversational pulse response",
      confidenceWeight: 12
    }
  ],

  followupSchedule: [
    {
      milestone: "1 Month Follow-up",
      dueDate: "12 July 2026",
      status: "Completed",
      score: "Satisfied (4.5/5)",
      notes: "Confirmed active duty, salary credited, supervisor assigned."
    },
    {
      milestone: "3 Month Follow-up",
      dueDate: "15 Sep 2026",
      status: "Pending",
      score: "Scheduled",
      notes: "Upcoming retention pulse, skill application check & wage verification."
    },
    {
      milestone: "6 Month Follow-up",
      dueDate: "12 Dec 2026",
      status: "Upcoming",
      score: "-",
      notes: "Appraisal review, promotion readiness and skill gap re-assessment."
    },
    {
      milestone: "12 Month Follow-up",
      dueDate: "12 June 2027",
      status: "Upcoming",
      score: "-",
      notes: "Annual retention metric, career progression & wage hike tracking."
    }
  ],

  certificates: [
    {
      id: "CERT-NCVET-2026-9081",
      title: "Certificate of Vocational Training - Data Analytics",
      issuer: "National Council for Vocational Education and Training (NCVET)",
      issuedOn: "18 May 2026",
      grade: "Distinction (Grade A)",
      credentialUrl: "https://verify.skilltrack.gov.in/certs/9081",
      status: "Blockchain Anchored"
    },
    {
      id: "CERT-PYTHON-8812",
      title: "Python for Data Processing & ETL Pipelines",
      issuer: "Sector Skill Council (IT-ITeS NASSCOM)",
      issuedOn: "02 May 2026",
      grade: "Verified Master",
      credentialUrl: "https://verify.skilltrack.gov.in/certs/8812",
      status: "Verified"
    }
  ],

  privacySettings: [
    {
      id: "employment_tracking",
      title: "Employment Tracking",
      description: "Permit tracking of job status, employer name, CTC and designation via automated verifications.",
      enabled: true,
      whyCollected: "Mandatory for scheme outcome reporting and subsidy utilization transparency.",
      whoCanAccess: "Authorized Government Evaluators, Institute Placement Officers",
      lastUpdated: "12 June 2026"
    },
    {
      id: "skill_tracking",
      title: "Skill Tracking",
      description: "Allow profiling of skill proficiencies, assessment scores and learning trajectory.",
      enabled: true,
      whyCollected: "Used to detect market skill shortages and suggest targeted upskilling.",
      whoCanAccess: "AI Recommendation Engine, Training Institutes, Verified Employers",
      lastUpdated: "10 June 2026"
    },
    {
      id: "employer_verification",
      title: "Employer Verification",
      description: "Share minimal verification tokens with ABC Technologies to corroborate employment.",
      enabled: true,
      whyCollected: "Prevents fraudulent placement claims by institutions.",
      whoCanAccess: "Registered HR Administrators at current employer",
      lastUpdated: "12 June 2026"
    },
    {
      id: "career_recommendations",
      title: "Career Recommendations",
      description: "Enable AI to analyze profile data for tailored job suggestions and learning paths.",
      enabled: true,
      whyCollected: "Generates high-precision career advancement roadmaps.",
      whoCanAccess: "Personalized AI Subsystem Only",
      lastUpdated: "15 June 2026"
    },
    {
      id: "data_analytics",
      title: "Data Analytics & Research",
      description: "Include anonymized telemetry in national district-level labour market intelligence.",
      enabled: true,
      whyCollected: "Helps policy planners design state skilling budgets and curriculum updates.",
      whoCanAccess: "Ministry Planning Commission, NITI Aayog researchers (Anonymized)",
      lastUpdated: "01 July 2026"
    }
  ]
};

// ==================== 2. EMPLOYER DATA (ABC Technologies) ====================
export const employerData = {
  company: {
    name: "ABC Technologies Pvt Ltd",
    id: "EMP-KA-2024-091",
    sector: "IT & Digital Services",
    location: "Electronic City, Bengaluru",
    contactPerson: "Rajesh V. (Talent Acquisition Lead)",
    email: "careers@abctechnologies.com",
    activePositions: 18
  },

  kpiCards: {
    totalEmployees: {
      title: "Total Tracked Employees",
      value: "148",
      change: "+14 this month",
      subtext: "Hired via Skill India Portal"
    },
    verifiedEmployees: {
      title: "Verified Employees",
      value: "132",
      change: "89.2% rate",
      subtext: "Corroborated by HR records"
    },
    pendingVerification: {
      title: "Pending Verification",
      value: "16",
      change: "Action needed",
      subtext: "New trainees onboarded < 30 days"
    },
    skillMatchAverage: {
      title: "Skill Match Average",
      value: "84%",
      change: "+3.2% vs Q1",
      subtext: "Curriculum alignment index"
    }
  },

  employees: [
    {
      id: "EMP-1092",
      name: "Arun Kumar",
      jobRole: "Data Analyst",
      department: "Enterprise Analytics",
      joinedDate: "12 June 2026",
      employmentStatus: "Full-Time",
      skillMatch: "87%",
      verification: "Verified",
      salary: "₹27,000/mo",
      institute: "NSTI Bengaluru"
    },
    {
      id: "EMP-1093",
      name: "Priya Sharma",
      jobRole: "Frontend Developer",
      department: "Client Engineering",
      joinedDate: "01 July 2026",
      employmentStatus: "Full-Time",
      skillMatch: "91%",
      verification: "Verified",
      salary: "₹28,500/mo",
      institute: "Centurion University Skill Center"
    },
    {
      id: "EMP-1094",
      name: "Rahul Verma",
      jobRole: "Data Analyst",
      department: "BI & Reporting",
      joinedDate: "15 July 2026",
      employmentStatus: "Probation",
      skillMatch: "82%",
      verification: "Pending",
      salary: "₹24,000/mo",
      institute: "NSTI Mumbai"
    },
    {
      id: "EMP-1095",
      name: "Ananya Patel",
      jobRole: "Cloud Associate",
      department: "Cloud Infrastructure",
      joinedDate: "20 July 2026",
      employmentStatus: "Full-Time",
      skillMatch: "79%",
      verification: "Pending",
      salary: "₹29,000/mo",
      institute: "Gujarat Skill Training Academy"
    },
    {
      id: "EMP-1096",
      name: "Vikram Singh",
      jobRole: "Industrial Electrician",
      department: "Data Center Facilities",
      joinedDate: "05 May 2026",
      employmentStatus: "Full-Time",
      skillMatch: "94%",
      verification: "Verified",
      salary: "₹23,500/mo",
      institute: "ITI Pune"
    },
    {
      id: "EMP-1097",
      name: "Sneha Reddy",
      jobRole: "QA Automation Tester",
      department: "Product QA",
      joinedDate: "18 June 2026",
      employmentStatus: "Full-Time",
      skillMatch: "86%",
      verification: "Verified",
      salary: "₹26,000/mo",
      institute: "APSSDC Center of Excellence"
    },
    {
      id: "EMP-1098",
      name: "Karthik R.",
      jobRole: "Data Analyst",
      department: "Risk Analytics",
      joinedDate: "28 July 2026",
      employmentStatus: "Probation",
      skillMatch: "76%",
      verification: "Pending",
      salary: "₹25,000/mo",
      institute: "Tamil Nadu Skill Development Corp"
    }
  ],

  jobRequirements: {
    role: "Data Analyst",
    department: "Enterprise Analytics BU",
    openPositions: 6,
    experienceLevel: "Entry to Mid (0-2 years post-training)",
    skills: [
      { name: "Python", importance: 90, description: "Pandas, NumPy, script automation" },
      { name: "SQL", importance: 95, description: "Complex joins, subqueries, indexing" },
      { name: "Power BI", importance: 85, description: "Dashboard design, DAX, workspace management" },
      { name: "Excel", importance: 75, description: "Pivot tables, advanced lookups, modeling" },
      { name: "Statistics", importance: 80, description: "Hypothesis testing, probability, distributions" }
    ]
  }
};

// ==================== 3. TRAINING INSTITUTE DATA (NSTI Bengaluru) ====================
export const instituteData = {
  institute: {
    name: "National Skill Training Institute (NSTI)",
    centerCode: "NSTI-BLR-04",
    accreditation: "NCVET Grade A++",
    director: "Dr. K. S. Sundaram",
    state: "Karnataka",
    district: "Bengaluru Urban"
  },

  kpiCards: {
    totalStudents: {
      title: "Total Students Enrolled",
      value: "500",
      change: "+50 vs prev cohort",
      subtext: "FY 2025-26 active training"
    },
    courseCompleted: {
      title: "Course Completed",
      value: "450",
      change: "90.0% completion rate",
      subtext: "Cleared final assessment"
    },
    placed: {
      title: "Placed Trainees",
      value: "320",
      change: "Verified employment",
      subtext: "In formal corporate & industrial sectors"
    },
    placementRate: {
      title: "Placement Rate",
      value: "71%",
      change: "+8% above national benchmark",
      subtext: "Target: 75% by Q4"
    }
  },

  courses: [
    {
      course: "Data Analytics",
      students: 120,
      completed: 110,
      placed: 92,
      placementRate: 83.6,
      impactScore: 9.2,
      avgSalary: "₹26,500/mo",
      topHiringCompany: "ABC Technologies, Infosys BPM",
      nsqfLevel: "Level 6"
    },
    {
      course: "Electrician",
      students: 150,
      completed: 140,
      placed: 105,
      placementRate: 75.0,
      impactScore: 8.8,
      avgSalary: "₹22,000/mo",
      topHiringCompany: "Tata Power, Schneider Electric",
      nsqfLevel: "Level 4"
    },
    {
      course: "Web Development",
      students: 130,
      completed: 115,
      placed: 78,
      placementRate: 67.8,
      impactScore: 8.5,
      avgSalary: "₹25,000/mo",
      topHiringCompany: "Tech Mahindra, Cognizant",
      nsqfLevel: "Level 5"
    },
    {
      course: "Mechanical Technician",
      students: 100,
      completed: 85,
      placed: 45,
      placementRate: 52.9,
      impactScore: 7.4,
      avgSalary: "₹19,500/mo",
      topHiringCompany: "Bosch, Toyota Kirloskar",
      nsqfLevel: "Level 4"
    }
  ],

  placementTrend: [
    { month: "Jan", rate: 58 },
    { month: "Feb", rate: 61 },
    { month: "Mar", rate: 64 },
    { month: "Apr", rate: 68 },
    { month: "May", rate: 70 },
    { month: "Jun", rate: 71 }
  ],

  employmentStatusBreakdown: [
    { name: "Full-Time Formal", value: 65, count: 208, color: "#4f46e5" },
    { name: "Apprenticeship (NAPS)", value: 20, count: 64, color: "#06b6d4" },
    { name: "Self-Employed / Freelance", value: 10, count: 32, color: "#10b981" },
    { name: "Seeking Placement", value: 5, count: 16, color: "#f59e0b" }
  ],

  skillGapDistribution: [
    { skill: "Data Analytics", industryNeed: 92, instituteCurriculum: 74, gap: 18 },
    { skill: "Industrial Electrician", industryNeed: 88, instituteCurriculum: 82, gap: 6 },
    { skill: "Web Development", industryNeed: 86, instituteCurriculum: 68, gap: 18 },
    { skill: "Mechanical CNC", industryNeed: 78, industryCurriculum: 58, gap: 20 }
  ]
};

// ==================== 4. GOVERNMENT ADMIN DATA (Flagship View) ====================
export const adminData = {
  nationalOverview: {
    kpiCards: {
      totalTrainees: {
        title: "Total Trainees",
        value: "125,430",
        change: "+18.4% YoY",
        subtext: "Tracked across all schemes (PMKVY, DDU-GKY, NAPS)"
      },
      employed: {
        title: "Employed",
        value: "82,760",
        change: "Active in workforce",
        subtext: "In formal and regular employment"
      },
      employmentRate: {
        title: "Employment Rate",
        value: "66%",
        change: "+4.2% vs FY25",
        subtext: "National vocational benchmark"
      },
      averageRetention: {
        title: "Average Retention",
        value: "74%",
        change: "At 12 Months",
        subtext: "Sustained employment proof"
      },
      averageSalary: {
        title: "Average Salary",
        value: "₹24,500",
        change: "+12.8% above min wage",
        subtext: "Post-training starting income"
      },
      verifiedEmployment: {
        title: "Verified Employment",
        value: "91%",
        change: "Epfo & OCR validated",
        subtext: "Fraud-resistant data integrity"
      }
    },

    employmentOutcomes: [
      { name: "Employed (Formal)", value: 82760, percentage: 66.0, color: "#4f46e5" },
      { name: "Unemployed / Seeking", value: 18810, percentage: 15.0, color: "#ef4444" },
      { name: "Self-Employed", value: 12540, percentage: 10.0, color: "#10b981" },
      { name: "Apprenticeship", value: 8780, percentage: 7.0, color: "#06b6d4" },
      { name: "Unknown / Unresponsive", value: 2540, percentage: 2.0, color: "#94a3b8" }
    ],

    districtPlacements: [
      { district: "Pune", state: "Maharashtra", placementRate: 78, trainees: 14200, avgSalary: 25800 },
      { district: "Mumbai", state: "Maharashtra", placementRate: 74, trainees: 18900, avgSalary: 27400 },
      { district: "Nashik", state: "Maharashtra", placementRate: 69, trainees: 9400, avgSalary: 22100 },
      { district: "Nagpur", state: "Maharashtra", placementRate: 65, trainees: 8600, avgSalary: 21800 },
      { district: "Erode", state: "Tamil Nadu", placementRate: 72, trainees: 7300, avgSalary: 23500 }
    ],

    skillGapIntelligence: [
      { skill: "Python", demand: 85, talentAvailability: 52, gapScore: 68, sector: "IT & Software" },
      { skill: "Cloud Computing", demand: 92, talentAvailability: 35, gapScore: 82, sector: "Cloud & DevSecOps" },
      { skill: "PLC", demand: 76, talentAvailability: 46, gapScore: 58, sector: "Industrial Automation" },
      { skill: "Data Analytics", demand: 88, talentAvailability: 54, gapScore: 62, sector: "Data Services" },
      { skill: "Cybersecurity", demand: 89, talentAvailability: 31, gapScore: 75, sector: "Security Ops" },
      { skill: "Industrial Automation", demand: 74, talentAvailability: 48, gapScore: 54, sector: "Manufacturing" }
    ],

    wageProgression: [
      { tenure: "3 Months", averageWage: 16800, top20Percentile: 22000, medianWage: 16500 },
      { tenure: "6 Months", averageWage: 20400, top20Percentile: 27500, medianWage: 19800 },
      { tenure: "12 Months", averageWage: 24500, top20Percentile: 34000, medianWage: 23800 }
    ],

    retentionCurve: [
      { tenure: "3 Months", retentionRate: 88, retainedCount: 72800 },
      { tenure: "6 Months", retentionRate: 81, retainedCount: 67000 },
      { tenure: "12 Months", retentionRate: 74, retainedCount: 61240 }
    ],

    aiIntelligencePanel: {
      topSkillGap: "Cloud Computing",
      demandLevel: "High",
      availableTalent: "Medium-Low",
      gapMagnitude: "High (82% shortfall)",
      economicImpact: "Estimated ₹140 Cr wage loss from unfulfilled cloud engineering roles",
      recommendedAction: "Increase Cloud Computing training programmes by 45% in tier-2 industrial clusters (Nashik, Nagpur, Erode). Partner with Hyperscalers (AWS/Azure/GCP) for subsidized certification credits.",
      secondaryAlerts: [
        {
          sector: "Industrial Automation",
          alert: "Rising demand for PLC & SCADA technicians in automotive corridors (Pune-Chakan).",
          action: "Deploy mobile smart automation testbeds in 28 ITIs."
        },
        {
          sector: "Data Analytics",
          alert: "78% placement rate recorded in Bangalore & Pune, but tier-3 students lack SQL fluency.",
          action: "Mandate hands-on sandbox labs before certification clearance."
        }
      ]
    }
  },

  traineeRegistry: [
    { id: "TR-2026-8942", name: "Arun Kumar", district: "Bengaluru", course: "Data Analytics", employer: "ABC Technologies", status: "Employed", verification: "Verified", salary: "₹27,000" },
    { id: "TR-2026-8943", name: "Priya Sharma", district: "Pune", course: "Web Development", employer: "Cognizant", status: "Employed", verification: "Verified", salary: "₹28,500" },
    { id: "TR-2026-8944", name: "Rahul Verma", district: "Mumbai", course: "Data Analytics", employer: "ABC Technologies", status: "Employed", verification: "Pending", salary: "₹24,000" },
    { id: "TR-2026-8945", name: "Ananya Patel", district: "Nashik", course: "Cloud Computing", employer: "Wipro", status: "Employed", verification: "Verified", salary: "₹29,000" },
    { id: "TR-2026-8946", name: "Vikram Singh", district: "Nagpur", course: "Industrial Automation", employer: "Mahindra & Mahindra", status: "Employed", verification: "Verified", salary: "₹23,500" },
    { id: "TR-2026-8947", name: "Sneha Reddy", district: "Erode", course: "Electrician", employer: "L&T Construction", status: "Employed", verification: "Verified", salary: "₹22,000" },
    { id: "TR-2026-8948", name: "Mohammad Farhan", district: "Pune", course: "Cybersecurity", employer: "Quick Heal", status: "Employed", verification: "Verified", salary: "₹31,000" },
    { id: "TR-2026-8949", name: "Deepak Joshi", district: "Mumbai", course: "Mechanical Tech", employer: "Tata Motors", status: "Unemployed", verification: "N/A", salary: "-" }
  ],

  trainingProviders: [
    { id: "TP-01", name: "National Skill Training Institute (NSTI) Bengaluru", trainees: 1850, placementRate: 81.2, qualityRating: 4.8, status: "Grade A++" },
    { id: "TP-02", name: "Government ITI Aundh (Pune)", trainees: 2400, placementRate: 79.5, qualityRating: 4.7, status: "Grade A+" },
    { id: "TP-03", name: "Centurion Center of Excellence (Odisha)", trainees: 1650, placementRate: 76.4, qualityRating: 4.6, status: "Grade A" },
    { id: "TP-04", name: "APSSDC Technical Campus (Tirupati)", trainees: 2100, placementRate: 74.0, qualityRating: 4.5, status: "Grade A" },
    { id: "TP-05", name: "Don Bosco Skill Institute (Mumbai)", trainees: 1300, placementRate: 71.8, qualityRating: 4.3, status: "Grade B+" }
  ]
};

// ==================== 5. REPORTS MOCK DATA ====================
export const availableReports = [
  {
    id: "REP-01",
    title: "Employment Outcome Report (Q2 2026)",
    type: "Employment Outcome Report",
    scope: "National Consolidated",
    recordsCount: "125,430 Trainees",
    generatedDate: "01 Sep 2026",
    fileSize: "4.8 MB",
    summary: "Complete breakdown of post-training outcomes across formal, informal, apprentice, and self-employed cohorts."
  },
  {
    id: "REP-02",
    title: "National Skill Gap Intelligence Audit",
    type: "Skill Gap Report",
    scope: "Top 20 Industrial Sectors",
    recordsCount: "64 Skill Profiles",
    generatedDate: "28 Aug 2026",
    fileSize: "6.2 MB",
    summary: "Detailed econometric analysis of industrial demand vs talent availability highlighting Cloud, PLC, and AI."
  },
  {
    id: "REP-03",
    title: "District Performance & Placement League",
    type: "District Performance Report",
    scope: "All 766 Districts",
    recordsCount: "766 Districts",
    generatedDate: "25 Aug 2026",
    fileSize: "12.4 MB",
    summary: "Ranked evaluation of district-level skill development missions with placement velocity and employer density."
  },
  {
    id: "REP-04",
    title: "Training Provider Quality Scorecard",
    type: "Training Provider Report",
    scope: "1,420 Accredited Centers",
    recordsCount: "1,420 Providers",
    generatedDate: "20 Aug 2026",
    fileSize: "8.1 MB",
    summary: "Comprehensive provider audit evaluating completion rates, multi-source verification honesty, and employer ratings."
  },
  {
    id: "REP-05",
    title: "Wage Progression & Salary Escalation Trajectory",
    type: "Wage Progression Report",
    scope: "1-Year Longitudinal Study",
    recordsCount: "48,200 Trainees",
    generatedDate: "15 Aug 2026",
    fileSize: "3.9 MB",
    summary: "Evaluation of wage jumps from entry (Month 1) to Month 12 post-training verification."
  },
  {
    id: "REP-06",
    title: "Job Retention & Workforce Stability Index",
    type: "Retention Report",
    scope: "3M / 6M / 12M Cohorts",
    recordsCount: "74% 12-Month Retention",
    generatedDate: "10 Aug 2026",
    fileSize: "5.3 MB",
    summary: "EPFO-linked retention analytics identifying drop-off risks and sectoral retention benchmarks."
  }
];
