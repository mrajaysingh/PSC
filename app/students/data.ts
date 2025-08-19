export interface Student {
  id: number;
  name: string;
  fatherName: string;
  class: string;
  photo: string;
  enrollmentId: string;
  achievements: string[];
  batch: string;
}

export interface StudentsData {
  boys: Student[];
  girls: Student[];
}

export const studentsData: StudentsData = {
  boys: [
    // Class 9 Boys
    {
      id: 1,
      name: "Alisha Varshi",
      fatherName: "Sekhu khan",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024001",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 2,
      name: "Anshika pal",
      fatherName: "Ashok kr pal",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024002",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 3,
      name: "Senha Yadav",
      fatherName: "Munna Yadav",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024003",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 4,
      name: "Priyam kesarwani",
      fatherName: "Sunil kesarwani",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024004",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 5,
      name: "Pravin shukla",
      fatherName: "Krishn chandra shukla",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024005",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 6,
      name: "Shivansh tiwari",
      fatherName: "Gyan datt tiwari",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024006",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 7,
      name: "Zishan siddique",
      fatherName: "Ahmad Ali",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024007",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 8,
      name: "Veer gupta",
      fatherName: "Pankaj Gupta",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024008",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 9,
      name: "Ashutosh Singh",
      fatherName: "Satyendra Singh",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024009",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    // Class 10 Boys
    {
      id: 10,
      name: "Aditya Raj Goswami",
      fatherName: "Rajesh kr Goswami",
      class: "Class 10",
      photo: "/logo.png",
      enrollmentId: "PSC2024010",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 11,
      name: "Adarsh Singh",
      fatherName: "Narendra Singh",
      class: "Class 10",
      photo: "/logo.png",
      enrollmentId: "PSC2024011",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 12,
      name: "Anubhav tripathi",
      fatherName: "Mithila pati Tripathi",
      class: "Class 10",
      photo: "/logo.png",
      enrollmentId: "PSC2024012",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 13,
      name: "Gopal Tiwari",
      fatherName: "Deep Narayan Tiwari",
      class: "Class 10",
      photo: "/logo.png",
      enrollmentId: "PSC2024013",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 14,
      name: "Arth Jaiswal",
      fatherName: "Sandeep Jaiswal",
      class: "Class 10",
      photo: "/logo.png",
      enrollmentId: "PSC2024014",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 15,
      name: "Sudeep Mishra",
      fatherName: "Pradeep Kumar Mishra",
      class: "Class 10",
      photo: "/logo.png",
      enrollmentId: "PSC2024015",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 16,
      name: "Ayush Dwivedi",
      fatherName: "Shantunand Dwivedi",
      class: "Class 10",
      photo: "/logo.png",
      enrollmentId: "PSC2024016",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 17,
      name: "Rudra Pandey",
      fatherName: "Premdut Pandey",
      class: "Class 10",
      photo: "/logo.png",
      enrollmentId: "PSC2024017",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 18,
      name: "Pratham Gupta",
      fatherName: "Manoj Gupta",
      class: "Class 10",
      photo: "/logo.png",
      enrollmentId: "PSC2024018",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 19,
      name: "Adarsh Tiwari",
      fatherName: "Vinod kr Tiwari",
      class: "Class 10",
      photo: "/logo.png",
      enrollmentId: "PSC2024019",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    }
  ],
  girls: [
    // Class 9 Girls
    {
      id: 20,
      name: "Kanak Tripathi",
      fatherName: "Mithila Pati Tripathi",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024020",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 21,
      name: "Prateeksha Soni",
      fatherName: "Dinesh Kumar Soni",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024021",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 22,
      name: "Anushka Tiwari",
      fatherName: "Anoop Tiwari",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024022",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 23,
      name: "Siddhi Dubey",
      fatherName: "Mani shankar dubey",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024023",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 24,
      name: "Suhani bharti",
      fatherName: "Raju bharti",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024024",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 25,
      name: "Samiksha Mishra",
      fatherName: "Santosh Kumar Mishra",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024025",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 26,
      name: "Shikha Gautam",
      fatherName: "Mithilesh Gautam",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024026",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 27,
      name: "Tanu Singh",
      fatherName: "Dharm Raj Singh",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024027",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    },
    {
      id: 28,
      name: "Divyanshi Singh",
      fatherName: "Awadesh pratap singh",
      class: "Class 9",
      photo: "/logo.png",
      enrollmentId: "PSC2024028",
      achievements: ["Academic Excellence"],
      batch: "Morning"
    }
  ]
};

export const stats = [
  { label: "Total Students", value: "28", icon: "Users" },
  { label: "Academic Excellence", value: "95%", icon: "Star" },
  { label: "Success Rate", value: "98%", icon: "Award" },
  { label: "Years of Excellence", value: "8+", icon: "Trophy" }
];
