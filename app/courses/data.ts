export interface Instructor {
  name: string;
  role: string;
  experience: string;
  image: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  students: number;
  image: string;
  curriculum?: string[];
  highlights?: string[];
  prerequisites?: string[];
  instructor?: Instructor;
  nextBatch?: string;
  fee?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "WordPress Development",
    description: "Master website creation and management with WordPress. Learn theme customization, plugin development, and best practices for building professional websites.",
    category: "Web Development",
    level: "Beginner to Advanced",
    duration: "3 months",
    rating: 4.8,
    students: 850,
    image: "/courses/wordpress.jpg",
    curriculum: [
      "Introduction to WordPress",
      "Theme Development and Customization",
      "Plugin Development",
      "WordPress Security",
      "Performance Optimization",
      "E-commerce with WooCommerce",
      "SEO Best Practices",
      "Website Maintenance"
    ],
    highlights: [
      "Hands-on Projects",
      "Live Website Development",
      "Custom Theme Creation",
      "Plugin Development",
      "Portfolio Building",
      "Industry Best Practices"
    ],
    prerequisites: [
      "Basic HTML/CSS knowledge",
      "Basic understanding of web technologies",
      "Computer with internet access",
      "Willingness to learn and practice"
    ],
    instructor: {
      name: "John Smith",
      role: "Senior WordPress Developer",
      experience: "10+ years",
      image: "/instructors/john-smith.jpg"
    },
    nextBatch: "15th May 2024",
    fee: "₹15,000"
  },
  {
    id: 2,
    title: "Tally Prime",
    description: "Complete accounting and business management with Tally Prime. Learn GST, accounting basics, inventory management, and financial reporting.",
    category: "Accounting",
    level: "Beginner",
    duration: "3 months",
    rating: 4.9,
    students: 1200,
    image: "/courses/tally.jpg",
    curriculum: [
      "Introduction to Tally Prime",
      "Basic Accounting Concepts",
      "GST Implementation",
      "Inventory Management",
      "Financial Reports",
      "Banking & Taxation",
      "Payroll Management",
      "Advanced Features"
    ],
    highlights: [
      "Practical Training",
      "Real Business Scenarios",
      "GST Compliance",
      "Financial Analysis",
      "Business Reports",
      "Industry Recognition"
    ],
    prerequisites: [
      "Basic accounting knowledge",
      "Computer literacy",
      "Understanding of business operations",
      "Dedication to learn"
    ],
    instructor: {
      name: "Rajesh Kumar",
      role: "Chartered Accountant",
      experience: "15+ years",
      image: "/instructors/rajesh-kumar.jpg"
    },
    nextBatch: "1st June 2024",
    fee: "₹12,000"
  },
  {
    id: 3,
    title: "English Speaking",
    description: "Enhance your English communication skills with focus on speaking, pronunciation, vocabulary, and confidence building through practical exercises.",
    category: "Language",
    level: "All Levels",
    duration: "4 months",
    rating: 4.7,
    students: 950,
    image: "/courses/english.jpg",
    curriculum: [
      "Basic Grammar & Structure",
      "Pronunciation & Accent",
      "Vocabulary Building",
      "Conversation Practice",
      "Public Speaking",
      "Business English",
      "Interview Skills",
      "Group Discussions"
    ],
    highlights: [
      "Interactive Sessions",
      "Native Speaker Interaction",
      "Role-playing Exercises",
      "Personality Development",
      "Mock Interviews",
      "Regular Assessments"
    ],
    prerequisites: [
      "Basic English understanding",
      "Regular practice commitment",
      "Willingness to participate",
      "Positive learning attitude"
    ],
    instructor: {
      name: "Sarah Wilson",
      role: "English Language Expert",
      experience: "8+ years",
      image: "/instructors/sarah-wilson.jpg"
    },
    nextBatch: "10th May 2024",
    fee: "₹8,000"
  },
  {
    id: 4,
    title: "Chemistry",
    description: "Comprehensive chemistry course covering organic, inorganic, and physical chemistry with practical experiments and problem-solving techniques.",
    category: "Science",
    level: "Intermediate",
    duration: "6 months",
    rating: 4.8,
    students: 680,
    image: "/courses/chemistry.jpg",
    curriculum: [
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "Chemical Bonding",
      "Reaction Mechanisms",
      "Practical Experiments",
      "Problem Solving",
      "Exam Preparation"
    ],
    highlights: [
      "Lab Experiments",
      "Visual Learning",
      "Practice Problems",
      "Regular Tests",
      "Doubt Sessions",
      "Study Materials"
    ],
    prerequisites: [
      "Basic science knowledge",
      "Mathematics fundamentals",
      "Laboratory safety awareness",
      "Interest in chemistry"
    ],
    instructor: {
      name: "Dr. Priya Sharma",
      role: "Chemistry Professor",
      experience: "12+ years",
      image: "/instructors/priya-sharma.jpg"
    },
    nextBatch: "20th May 2024",
    fee: "₹10,000"
  },
  {
    id: 5,
    title: "DCA",
    description: "Diploma in Computer Applications covering fundamental computer concepts, office applications, and basic programming skills.",
    category: "Computer",
    level: "Beginner",
    duration: "6 months",
    rating: 4.6,
    students: 1500,
    image: "/courses/dca.jpg",
    curriculum: [
      "Computer Fundamentals",
      "Operating Systems",
      "MS Office Suite",
      "Internet & Email",
      "Basic Programming",
      "Database Concepts",
      "Computer Networks",
      "Project Work"
    ],
    highlights: [
      "Practical Training",
      "Industry Projects",
      "Certification",
      "Job Assistance",
      "Expert Faculty",
      "Modern Lab"
    ],
    prerequisites: [
      "10th pass or equivalent",
      "Basic computer knowledge",
      "Regular attendance",
      "Practice commitment"
    ],
    instructor: {
      name: "Amit Verma",
      role: "Computer Science Expert",
      experience: "10+ years",
      image: "/instructors/amit-verma.jpg"
    },
    nextBatch: "5th June 2024",
    fee: "₹15,000"
  }
  // Add more courses with detailed information...
]; 