const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      faild: 0,
    },
    tasks: [
      {
        title: "Design Login Page",
        description:
          "Create a responsive login page design for the new company portal.",
        date: "2026-09-18",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
      },
      {
        title: "Fix Navbar Responsiveness",
        description:
          "Fix the navbar layout issues on tablet and mobile screens.",
        date: "2026-09-16",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Update User Documentation",
        description:
          "Update the documentation with the latest user management features.",
        date: "2026-09-12",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Test Authentication Flow",
        description:
          "Test login, logout, and session handling across different browsers.",
        date: "2026-09-10",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
      },
    ],
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@company.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 2,
      faild: 0,
    },
    tasks: [
      {
        title: "Build Dashboard Cards",
        description:
          "Create reusable dashboard cards for displaying employee statistics.",
        date: "2026-09-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
      },
      {
        title: "Prepare Monthly Report",
        description:
          "Prepare the monthly performance report for the development team.",
        date: "2026-09-17",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Review API Documentation",
        description:
          "Review the API documentation and report any missing information.",
        date: "2026-09-14",
        category: "Review",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Database Cleanup",
        description:
          "Remove unused records and organize the existing database entries.",
        date: "2026-09-08",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Fix Profile Page Bug",
        description:
          "Resolve the issue preventing users from updating their profile picture.",
        date: "2026-09-05",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
      },
    ],
  },

  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@company.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 3,
      faild: 0,
    },
    tasks: [
      {
        title: "Create Employee Form",
        description: "Build a form for adding new employees to the system.",
        date: "2026-09-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
      },
      {
        title: "Implement Form Validation",
        description:
          "Add validation for email, password, phone number, and required fields.",
        date: "2026-09-16",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Test Employee Search",
        description:
          "Test employee search functionality with different search queries.",
        date: "2026-09-13",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Update Employee List",
        description:
          "Update the employee list component with the latest employee data.",
        date: "2026-09-09",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Write Testing Notes",
        description:
          "Document the testing process and the issues discovered during testing.",
        date: "2026-09-06",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Fix Search Input",
        description:
          "Fix the search input so that it works correctly on mobile devices.",
        date: "2026-09-03",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
      },
    ],
  },

  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@company.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      faild: 0,
    },
    tasks: [
      {
        title: "Design Landing Page",
        description:
          "Create a modern landing page for the company's new product.",
        date: "2026-09-18",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
      },
      {
        title: "Create Product Banner",
        description:
          "Design promotional banners for the upcoming product launch.",
        date: "2026-09-15",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Optimize Images",
        description:
          "Compress and optimize website images without reducing visual quality.",
        date: "2026-09-11",
        category: "Optimization",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Update Brand Assets",
        description:
          "Replace outdated logos and brand assets across the project.",
        date: "2026-09-07",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
      },
    ],
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@company.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 4,
      faild: 0,
    },
    tasks: [
      {
        title: "Integrate Payment API",
        description:
          "Integrate the payment gateway API into the checkout system.",
        date: "2026-09-18",
        category: "API",
        active: true,
        newTask: true,
        completed: false,
      },
      {
        title: "Handle API Errors",
        description: "Add proper error handling for failed API requests.",
        date: "2026-09-17",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Test Payment Flow",
        description:
          "Test successful, failed, and cancelled payment scenarios.",
        date: "2026-09-14",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Create API Service",
        description: "Create a reusable service for handling API requests.",
        date: "2026-09-10",
        category: "API",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Fix Checkout Bug",
        description:
          "Fix the issue where the checkout button sometimes becomes unresponsive.",
        date: "2026-09-04",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Update API Documentation",
        description: "Document the newly added payment API endpoints.",
        date: "2026-09-01",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Review Security Settings",
        description:
          "Review authentication and payment security configurations.",
        date: "2026-08-28",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 100,
    firstName: "Sanju",
    email: "admin@company.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
