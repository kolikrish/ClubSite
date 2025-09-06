import { FaBrain, FaCode, FaCloud, FaShieldAlt, FaMobile, FaRobot, FaDatabase, FaTrophy } from 'react-icons/fa';

export const domains = [
  {
    id: 1,
    title: "AI/ML",
    description: "Explore artificial intelligence and machine learning algorithms to solve complex problems.",
    icon: FaBrain,
    bgColor: "from-purple-500 to-pink-500",
    techStack: ["TensorFlow", "PyTorch", "Scikit-learn"]
  },
  {
    id: 2,
    title: "Web Development", 
    description: "Build responsive and dynamic web applications using modern frameworks.",
    icon: FaCode,
    bgColor: "from-blue-500 to-cyan-500",
    techStack: ["React", "Next.js", "Node.js"]
  },
  {
    id: 3,
    title: "Cloud Computing",
    description: "Learn to deploy, scale, and manage applications on leading cloud platforms.",
    icon: FaCloud,
    bgColor: "from-green-500 to-emerald-500", 
    techStack: ["AWS", "Azure", "Google Cloud"]
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Understand security principles and protect systems from vulnerabilities.",
    icon: FaShieldAlt,
    bgColor: "from-red-500 to-orange-500",
    techStack: ["Kali Linux", "Wireshark", "Metasploit"]
  },
  {
    id: 5,
    title: "App Development",
    description: "Create native and cross-platform mobile applications for iOS and Android.",
    icon: FaMobile,
    bgColor: "from-indigo-500 to-purple-500",
    techStack: ["Flutter", "React Native", "Swift"]
  },
  {
    id: 6,
    title: "IoT",
    description: "Connect physical devices to the internet and build smart systems.",
    icon: FaRobot,
    bgColor: "from-yellow-500 to-orange-500",
    techStack: ["Arduino", "Raspberry Pi", "MQTT"]
  },
  {
    id: 7,
    title: "Database Management",
    description: "Design, implement, and optimize database systems for various applications.",
    icon: FaDatabase,
    bgColor: "from-teal-500 to-blue-500",
    techStack: ["SQL", "MongoDB", "PostgreSQL"]
  },
  {
    id: 8,
    title: "Competitive Programming",
    description: "Enhance problem-solving skills through algorithmic challenges.",
    icon: FaTrophy,
    bgColor: "from-amber-500 to-yellow-500",
    techStack: ["C++", "Java", "Python"]
  }
];