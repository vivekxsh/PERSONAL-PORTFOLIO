import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const ACHIEVEMENT = [
  {
    year: "Oct 2025",
    position: "Successfully Completed Hacktoberfest 2025",
    description:
      "Delivered 5 merged pull requests (PRs) across 3 distinct repositories during Hacktoberfest 2025.",
    link: "https://github.com/vivekxsh",
    language: ["Open Source", "GitHub", "Hacktoberfest", "Pull Requests"]
  },
  {
    year: "Sep 2024",
    position: "Won 3rd Place",
    description:
      "IDEA SPARK Software Hackathon conducted by ACM at Kalasalingam University.",
    language: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Gemini API",
      "MERN"
    ]
  },
  {
    year: "Sep 2023",
    position: "Secured 8th Position",
    description:
      "Coding contest organized by HackerRank at Kalasalingam University.",
    language: ["Java"]
  }
];

export const OPEN_SOURCE_CONTRIBUTIONS = {
  title: "Open Source & Hacktoberfest 2025 Contributions",
  duration: "Oct 2025 – Nov 2025",

  github: {
    text: "vivekxsh Contributions",
    link: "https://github.com/vivekxsh"
  },

  summary:
    "Successfully completed Hacktoberfest 2025 by delivering 5 merged pull requests across 3 different repositories.",

  achievements: [
    {
      project: "Enhanced User Experience (Movie Website)",
      issue: "#16 Added 'Back to Top' Button in Movie App",
      issueLink: "https://github.com/champst2004/browse-movies/pull/23",
      description:
        "Enhanced user experience by implementing a smooth 'Back to Top' button feature."
    },

    {
      project: "Enhanced Image to Text Project (Image to Text Website)",
      issue: "#3 UI/UX Refinements and Translation Logic Fix for OCR Tool",
      issueLink: "https://github.com/bsgautam/Image_to_text_converter/pull/24",
      description:
        "Improved UI/UX with a new animated header, enhanced action feedback, improved copy button styling, and download utility enhancements."
    },

    {
      project: "Search and Utility Optimization (Medicine Recommender Website)",
      issue:
        "#1 Add Functionality to Send Prescription via Email After Video Chat Completion",
      issueLink: "https://github.com/YADAVAJAVAJITHIPPESWAMY/MEDICINE-RECOMMENDER/pull/2",
      description:
        "Implemented email-sharing functionality for prescriptions after video consultation completion."
    },

    {
      project: "Foodie Website",
      issue: "#150 Bug: Google Signup and Login Not Working",
      issueLink: "https://github.com/janavipandole/Foodie/pull/219",
      description:
        "Fixed authentication issues related to Google Signup and Login functionality to improve user accessibility and account management."
    },

    {
      project: "Medicine Recommendation Website",
      issue: "#3 Added Autocomplete Suggestions for Symptoms in Search Bar",
      issueLink: "https://github.com/YADAVAJAVAJITHIPPESWAMY/MEDICINE-RECOMMENDER/pull/4",
      description:
        "Implemented autocomplete search suggestions for symptoms to enhance search experience and improve usability."
    }
  ]
};

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Present",
    role: "GFG Student Member",
    description: `As a member of GeeksforGeeks, I have deepened my programming skills in languages like Python, Java, and C++. I've engaged in discussions and workshops on data structures, algorithms, web development, and machine learning, gaining hands-on experience through practical challenges. Participating in competitive programming has sharpened my problem-solving abilities and prepared me for coding interviews.`,
    technologies: ["Java", "C++", "DSA", "AIML"],
  },
  {
    year: "Apr 2023 - Jan 2024",
    role: "GDSC Member",
    description: `As a member of the Google Developer Student Club (GDSC), I actively engage with a vibrant community of developers and tech enthusiasts. This experience has allowed me to collaborate on various projects, enhancing my teamwork and problem-solving skills. I’ve attended workshops focused on technologies such as web development, mobile app development, machine learning, and cloud computing. Participating in hackathons enabled me to apply my skills in real-world scenarios and contribute to innovative solutions.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "GCP"],
  },

];


export const PROJECTS = [
  {
    title: "Graph Visualizer",
    image: project1,
    GitUrl: "https://github.com/vivekxsh/graph_visualizer",
    websiteUrl: "https://vivekxsh.github.io/graph_visualizer/",
    description:
      "A web-based tool to visualize complex graphs interactively and in real-time. Built using **HTML**, **CSS**, and **JavaScript**, this project allows you to input graph data and instantly see the corresponding graph visualization. You can also download your graph as a PNG image.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Smart Attendence System",
    image: project2,
    GitUrl: "https://github.com/vivekxsh/smart_attendence_system",
    websiteUrl: "https://github.com/vivekxsh/smart_attendence_system",
    description:
      "The Smart Attendance System is built using Face Recognition and OpenCV. The system will facilitate attendance management by recording the attendance live using webcam.",
    technologies: ["Python", "Numpy", "Pandas", "Haar Cascade", "OpenCV"],
  },
  {
    title: "Apple Vision Pro UI Clone",
    image: project3,
    GitUrl: "https://github.com/vivekxsh/Apple-Vision-pro",
    websiteUrl: "https://vivekxsh.github.io/Apple-Vision-pro/",
    description:
      "This project is a clone of the Apple Vision Pro interface, created using HTML, CSS, and JavaScript. Leveraging the power of the GSAP (GreenSock Animation Platform), this interactive application replicates the sleek design and user experience of the original device.",
    technologies: ["HTML", "CSS", "JS", "GSAP"],
  },
  {
    title: "ChatBot Powered by Gemini AI",
    image: project4,
    GitUrl: "https://github.com/vivekxsh/chatbot",
    websiteUrl: "https://vivekxsh.github.io/chatbot/",
    description:
      "The Gemini AI Chatbot is an interactive web application designed to provide users with intelligent conversational capabilities.",
    technologies: ["HTML", "CSS", "JS", "Gemini API"],
  },
  {
    title: "AI Powered Medical Recommedation System",
    image: project5,
    GitUrl: "https://github.com/vivekxsh/MEDICINE-RECOMMENDER",
    websiteUrl: "https://medicine-recommender-eb2e.onrender.com/",
    description:
      "The AI-Powered Medicine Recommendation System is an innovative web application designed to enhance patient care through personalized health recommendations. By simply inputting their symptoms, users receive immediate feedback that includes potential disease names, detailed descriptions, suggested medications, dietary recommendations, and workout plans tailored to their condition.",
    technologies: ["HTML", "CSS", "JS", "Jupiter Notebook", "Python", "WebRTC"],
  },
  {
    title: "Doctor Appointment System",
    image: project6,
    GitUrl: "https://github.com/vivekxsh/DOCTOR-APPOINTMENT",
    websiteUrl: "https://doctor-appointment-ncqn.onrender.com/login",
    description:
      "A Doctor's Appointment Booking System allows individuals to easily book appointments with healthcare professionals from anywhere. Through this system, users can view available slots for doctors, choose a convenient time, and confirm their appointment in just a few clicks it is an online platform that allows patients to easily schedule appointments at specific clinics based on their health needs. Whether it's a health issue, an injury, mental health concerns, or any other medical condition, these systems streamline the process of booking appointments. a Doctor's Appointment a System revolutionizes the healthcare experience by offering seamless, user- friendly appointment scheduling.",
    technologies: ["React.JS", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    title: "Expense Tracker Application",
    image: project7,
    GitUrl: "https://github.com/vivekxsh/EXPENSE-TRACKER",
    websiteUrl: "https://expense-tracker-vivek.netlify.app/",
    description:
      "The Expense Tracker Application is a user-friendly web-based tool designed to help individuals manage their finances effectively. This application enables users to record, categorize, and analyze their expenses, providing valuable insights into spending habits and financial health.",
    technologies: ["React.JS", "Node.js", "Firebase Database", "Firebase Authentication"],
  },
  {
    title: "Food Order UI Clone",
    image: project8,
    GitUrl: "https://github.com/vivekxsh/food-order-ui-clone",
    websiteUrl: "https://vivekxsh.github.io/food-order-ui-clone/",
    description:
      "I built a simple food ordering UI clone using HTML and CSS as a practice project. It helped me improve my skills in layout design, styling, and structuring web pages.",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Markdown (Pre)viewer",
    image: project9,
    GitUrl: "https://github.com/vivekxsh/Markdown_Code_Compiler",
    websiteUrl: "https://markdown-code-compiler.vercel.app/",
    description:
      "Compile and execute your Markdown code effortlessly in this web-based tool. Write Markdown with embedded code blocks, see the output live, copy results to your clipboard, or download your compiled files—all in one place. Designed for developers and writers who want a seamless way to combine documentation with runnable code.",
    technologies: ["HTML", "CSS", "React.js", "Node.js"],
  },
  
];



export const CONTACT = {
  address: "Patna , Bihar, India ",
  phoneNo: "+91 6205969859 ",
  email: "vivekkumar07sharma@gmail.com",
};












