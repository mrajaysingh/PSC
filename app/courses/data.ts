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
  },
  {
    id: 6,
    title: "ADCA",
    description: "Advanced Diploma in Computer Applications with advanced programming, web development, and database management systems.",
    category: "Computer",
    level: "Intermediate",
    duration: "12 months",
    rating: 4.7,
    students: 920,
    image: "/courses/adca.jpg",
    curriculum: [
      "Advanced Programming Concepts",
      "Web Development",
      "Database Management",
      "Network Administration",
      "Software Development",
      "System Analysis & Design",
      "Project Management",
      "Industry Project"
    ],
    highlights: [
      "Advanced Training",
      "Real Projects",
      "Industry Certification",
      "Placement Support",
      "Expert Mentorship",
      "Modern Infrastructure"
    ],
    prerequisites: [
      "DCA or equivalent",
      "Basic programming knowledge",
      "Understanding of computers",
      "Dedication to learn"
    ],
    instructor: {
      name: "Rahul Sharma",
      role: "Senior Software Developer",
      experience: "12+ years",
      image: "/instructors/rahul-sharma.jpg"
    },
    nextBatch: "10th June 2024",
    fee: "₹25,000"
  },
  {
    id: 7,
    title: "PGDCA",
    description: "Post Graduate Diploma in Computer Applications focusing on advanced computing concepts and professional software development.",
    category: "Computer",
    level: "Advanced",
    duration: "12 months",
    rating: 4.8,
    students: 750,
    image: "/courses/pgdca.jpg",
    curriculum: [
      "Advanced Software Development",
      "Cloud Computing",
      "Big Data Analytics",
      "Mobile App Development",
      "Artificial Intelligence",
      "Cyber Security",
      "Enterprise Solutions",
      "Capstone Project"
    ],
    highlights: [
      "Professional Training",
      "Industry Projects",
      "Advanced Certification",
      "Career Guidance",
      "Industry Experts",
      "Research Opportunities"
    ],
    prerequisites: [
      "Graduation in any discipline",
      "Basic computer knowledge",
      "Analytical thinking",
      "Problem-solving skills"
    ],
    instructor: {
      name: "Dr. Suresh Kumar",
      role: "Technology Director",
      experience: "15+ years",
      image: "/instructors/suresh-kumar.jpg"
    },
    nextBatch: "15th June 2024",
    fee: "₹35,000"
  },
  {
    id: 8,
    title: "Python Programming",
    description: "Learn Python programming from basics to advanced concepts including data structures, algorithms, and practical project development.",
    category: "Programming",
    level: "Beginner to Advanced",
    duration: "4 months",
    rating: 4.9,
    students: 1100,
    image: "/courses/python.jpg",
    curriculum: [
      "Python Basics",
      "Data Structures",
      "Object-Oriented Programming",
      "Web Development with Django",
      "Data Science Basics",
      "GUI Development",
      "Database Integration",
      "Project Development"
    ],
    highlights: [
      "Hands-on Coding",
      "Real Projects",
      "Industry Standards",
      "Job Ready Skills",
      "Expert Guidance",
      "Portfolio Building"
    ],
    prerequisites: [
      "Basic computer knowledge",
      "Logical thinking",
      "Problem-solving aptitude",
      "Dedication to practice"
    ],
    instructor: {
      name: "Vikram Singh",
      role: "Python Developer",
      experience: "8+ years",
      image: "/instructors/vikram-singh.jpg"
    },
    nextBatch: "1st June 2024",
    fee: "₹20,000"
  },
  {
    id: 9,
    title: "Java Programming",
    description: "Comprehensive Java programming course covering core concepts, object-oriented programming, and enterprise application development.",
    category: "Programming",
    level: "Beginner to Advanced",
    duration: "6 months",
    rating: 4.8,
    students: 890,
    image: "/courses/java.jpg",
    curriculum: [
      "Core Java Concepts",
      "Object-Oriented Programming",
      "Collections Framework",
      "Exception Handling",
      "Multithreading",
      "JDBC & Database",
      "Spring Framework",
      "Enterprise Java"
    ],
    highlights: [
      "Practical Training",
      "Enterprise Projects",
      "Industry Certification",
      "Job Assistance",
      "Expert Faculty",
      "Modern Development"
    ],
    prerequisites: [
      "Basic programming concepts",
      "Computer fundamentals",
      "Logical thinking",
      "Regular practice"
    ],
    instructor: {
      name: "Anita Patel",
      role: "Java Architect",
      experience: "10+ years",
      image: "/instructors/anita-patel.jpg"
    },
    nextBatch: "5th June 2024",
    fee: "₹25,000"
  },
  {
    id: 10,
    title: "CCC",
    description: "Course on Computer Concepts providing essential computer literacy skills for modern digital workplace requirements.",
    category: "Computer",
    level: "Beginner",
    duration: "3 months",
    rating: 4.6,
    students: 2100,
    image: "/courses/ccc.jpg",
    curriculum: [
      "Computer Basics",
      "Operating System",
      "Word Processing",
      "Spreadsheets",
      "Presentations",
      "Internet Usage",
      "Email Management",
      "Digital Literacy"
    ],
    highlights: [
      "Basic Training",
      "Practical Sessions",
      "Government Certificate",
      "Career Guidance",
      "Expert Teachers",
      "Modern Facilities"
    ],
    prerequisites: [
      "8th pass or equivalent",
      "Basic reading/writing",
      "Regular attendance",
      "Willingness to learn"
    ],
    instructor: {
      name: "Meena Gupta",
      role: "Computer Trainer",
      experience: "6+ years",
      image: "/instructors/meena-gupta.jpg"
    },
    nextBatch: "1st June 2024",
    fee: "₹5,000"
  },
  {
    id: 11,
    title: "Web Designing",
    description: "Learn modern web design techniques including HTML5, CSS3, JavaScript, responsive design, and UI/UX principles.",
    category: "Web Development",
    level: "Intermediate",
    duration: "4 months",
    rating: 4.7,
    students: 980,
    image: "/courses/webdesign.jpg",
    curriculum: [
      "HTML5 & CSS3",
      "JavaScript Basics",
      "Responsive Design",
      "UI/UX Principles",
      "Web Graphics",
      "Bootstrap Framework",
      "WordPress Basics",
      "Portfolio Projects"
    ],
    highlights: [
      "Design Projects",
      "Modern Techniques",
      "Industry Tools",
      "Portfolio Building",
      "Expert Guidance",
      "Job Assistance"
    ],
    prerequisites: [
      "Basic computer knowledge",
      "Creative mindset",
      "Internet familiarity",
      "Design interest"
    ],
    instructor: {
      name: "Priya Desai",
      role: "Web Designer",
      experience: "7+ years",
      image: "/instructors/priya-desai.jpg"
    },
    nextBatch: "10th June 2024",
    fee: "₹18,000"
  },
  {
    id: 12,
    title: "Typing Master",
    description: "Master touch typing with speed and accuracy. Learn both Hindi and English typing with professional techniques.",
    category: "Skills",
    level: "All Levels",
    duration: "2 months",
    rating: 4.5,
    students: 1600,
    image: "/courses/typing.jpg",
    curriculum: [
      "Keyboard Basics",
      "Touch Typing",
      "Speed Building",
      "Accuracy Training",
      "English Typing",
      "Hindi Typing",
      "Professional Format",
      "Speed Tests"
    ],
    highlights: [
      "Professional Training",
      "Speed Tests",
      "Certification",
      "Practice Sessions",
      "Expert Guidance",
      "Modern Software"
    ],
    prerequisites: [
      "Basic literacy",
      "Regular practice",
      "Dedication",
      "Computer basics"
    ],
    instructor: {
      name: "Rajesh Verma",
      role: "Typing Expert",
      experience: "8+ years",
      image: "/instructors/rajesh-verma.jpg"
    },
    nextBatch: "1st June 2024",
    fee: "₹4,000"
  },
  {
    id: 13,
    title: "Computer Basics",
    description: "Essential computer fundamentals covering hardware, software, operating systems, and basic office applications.",
    category: "Computer",
    level: "Beginner",
    duration: "2 months",
    rating: 4.6,
    students: 2500,
    image: "/courses/basics.jpg",
    curriculum: [
      "Computer Introduction",
      "Hardware Basics",
      "Software Basics",
      "Operating System",
      "File Management",
      "Basic Applications",
      "Internet Basics",
      "Digital Safety"
    ],
    highlights: [
      "Basic Training",
      "Practical Sessions",
      "Foundation Course",
      "Career Guidance",
      "Expert Faculty",
      "Modern Lab"
    ],
    prerequisites: [
      "No prior experience needed",
      "Basic literacy",
      "Regular attendance",
      "Learning attitude"
    ],
    instructor: {
      name: "Sanjay Kumar",
      role: "Computer Trainer",
      experience: "5+ years",
      image: "/instructors/sanjay-kumar.jpg"
    },
    nextBatch: "5th June 2024",
    fee: "₹3,000"
  }
]; 