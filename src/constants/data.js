import Me from "../assets/me.jpg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import ChessMate from "../assets/ChessMate.png";
import FruitMerge from "../assets/FruitMerge.png";

export const portfolioData = {
  profile: {
    name: "Divy Vasani",
    roles: [
      "Hi, I'm Divy Vasani",
      "Frontend Developer",
      "React Developer",
      "React Native Developer",
    ],
    description: "A creative frontend & mobile app developer passionate about building stunning, responsive web applications and high-performance mobile experiences using React & React Native. Turning ideas into beautiful, user-friendly digital products. Let’s make websites & mobile apps a more beautiful place together.",
    image: Me,
  },
  projects: [
    {
      title: "ChessMate",
      description: "A chess training app with tactical puzzles and interactive gameplay.",
      image: ChessMate,
      link: "https://play.google.com/store/apps/details?id=com.chessmate",
      tech: ["React Native", "JavaScript", "Firebase"],
    },
    {
      title: "FruitMerge",
      description: "A fun and engaging fruit-matching game built with React.",
      image: FruitMerge,
      status: "Currently in Testing Phase",
      tech: ["React Native", "JavaScript", "Firebase"],
    },
    {
      title: "MyChatMX",
      description: "Real-time chat application with messaging & voice calling.",
      image: project3,
      link: "https://github.com/Divy-Vasani-09/MyChatUp",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      title: "Saffron Crown",
      description: "A modern food ordering & table booking website with elegant UI, responsive layouts, and smooth user interactions.",
      image: project1,
      link: "https://github.com/Divy-Vasani-09/Food_Restaurant_Project",
      tech: ["HTML", "CSS", "JavaScript"],
    }
  ],
  experience: [
    {
      company: "CodeNova Technologies",
      role: "React Native Developer",
      period: "June 2025 - March 2026",
      responsibilities: [
        "Developed scalable and responsive web/mobile applications using React, React Native, TypeScript, and Next.js",
        "Built reusable and performance-optimized UI components focused on smooth user experience and clean architecture",
        "Integrated REST APIs and improved state management for interactive and efficient application workflows",
        "Collaborated on live production projects including real-time and game-based applications with optimized performance",
        "Enhanced application responsiveness, debugging, and cross-platform compatibility across multiple devices",
        "Worked with Node.js, Firebase, and MongoDB to support full-stack feature integration and backend connectivity",
      ],
    },
    {
      company: "NIQOX Company",
      role: "Frontend Developer Intern",
      period: "Dec 2024 - Apr 2025",
      responsibilities: [
        "Created beautiful UI components using React and Tailwind",
        "Integrated backend APIs and improved dashboard interactivity",
        "Enhanced mobile responsiveness and optimized performance",
        "Developed real-time chat apps using MERN & Socket.io",
        "Built responsive web pages using React.js & Tailwind CSS",
      ],
    },
  ],
  skills: [
    { skill: "HTML5", level: 5 },
    { skill: "CSS3", level: 4.5 },
    { skill: "Tailwind CSS", level: 4.5 },
    { skill: "JavaScript", level: 5 },
    { skill: "TypeScript", level: 5 },
    { skill: "React", level: 5 },
    { skill: "Next.js", level: 4.5 },
    { skill: "React Native", level: 5 },
    { skill: "Node.js", level: 4 },
    { skill: "MongoDB", level: 4 },
    { skill: "GitHub", level: 4.5 },
  ],
  personalInfo: {
    name: "Divy Vasani",
    contact: "+91 7041083050",
    email: "divyvasani09@gmail.com",
    location: "Surat, Gujarat India",
    hobbies: "Gaming, UI Design, Playing Chess",
  },
  socials: {
    github: "https://github.com/Divy-Vasani905",
    linkedin: "https://www.linkedin.com/in/divy-vasani-371266282",
  },
};
