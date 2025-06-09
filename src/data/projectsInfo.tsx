export interface ProjectInfo {
    id: number;
    title: string;
    description: string;
    image: string;
    gitLink: string;
    liveLink: string;
    Skills: string[];
  }
  
  export const projectsInfo: ProjectInfo[] = [
    {
        id: 1,
        title: "Lieux",
        description: "minimalist social platform for users to share their favorite places 🌆🏞️, engage with others' choices, discover new locations",
        image: "/uploads/Lieux.png",
        gitLink: "https://github.com/saivenkat98/Lieux",
        liveLink: "https://lieux-xi.vercel.app/auth",
        Skills: ["Javascript","ReactJs", "NodeJs","ExpressJs","MongoDB","Google Cloud Storage"]
    },
    {
        id: 2,
        title: "TurboGuido",
        description: "A car rental platform replica giving users a first had use and feel of such platforms. I have built it using NextJS, React and Typescript.",
        gitLink: "https://github.com/saivenkat98/TurboGuido",
        liveLink: "https://turbo-guido.vercel.app/",
        image: "/uploads/TurboGuido.png",
        Skills: ["Typescript","ReactJs", "TailwindCSS", "NextJs","REST API"]
    },
    {
        id: 3,
        title: "My Portfolio",
        description: "My journey as a software engineer, told through this digital diary, You're already in it! — built with TypeScript and Next.js",
        gitLink: "https://github.com/saivenkat98/SaiVenkat",
        liveLink: "https://sai-venkat.vercel.app/",
        image: "/uploads/PortfolioImage.png",
        Skills: ["Typescript","ReactJs", "NextJs","TailwindCSS", "EmailJs"]
    },
    {
        id: 4,
        title: "Patient Referral Dashboard",
        description: "A freelance Proof of Concept (POC) project for Wekare.ai, demonstrating the intended functionality of a patient referral dashboard.",
        gitLink: "https://github.com/saivenkat98/wekare360_Patient_Referal_dashboard",
        liveLink: "",
        image: "/uploads/PatientReferralDashboard.png",
        Skills: ["Javascript","ReactJs", "HTML","TailwindCSS","JSON Server"]
    },
    {
        id: 5,
        title: "Employee Reimbursement Portal",
        description: "A freelance Proof of Concept (POC) project for University of Iowa, demonstrating my vision for a Employee Reimbursement Portal.",
        gitLink: "https://github.com/saivenkat98/Reimbursement_Portal",
        liveLink: "",
        image: "/uploads/UoI.png",
        Skills: ["C#", ".NET", "Typescript", "AngularJs", "TailwindCSS", "MySQL"]
    },
    {
        id: 6,
        title: "Judge A Book By Its Cover",
        description: "A ML model to help readers find books by predicting genres from covers images, using neural networks and computer vision.",
        gitLink: "https://github.com/saivenkat98/JudgeABookByItsCover",
        liveLink: "",
        image: "/uploads/JudgeABookByItsCover.png",
        Skills: ["Python", "Jupyter Notebook", "neural networks", "Pandas", "Matplotlib", "NumPy"]
    },
    {
        id: 7,
        title: "Personal IMDB",
        description: "A movie review website built with Java, ReactJS, and Bootstrap, for users to browse movies, view details, and submit reviews.",
        gitLink: "https://github.com/saivenkat98/Personal_IMDB",
        liveLink: "",
        image: "/uploads/PersonalIMDB.png",
        Skills: ["Javascript","ReactJs", "BootstrapCSS", "Java","Springboot","MongoDB"]
    },
    {
        id: 8,
        title: "Medical Research Search Index",
        description: "Aims to provides a searchable index for vast medical research content spanning hundreds of articles.",
        gitLink: "https://github.com/saivenkat98/MedicalResearchSearchIndex",
        liveLink: "",
        image: "/uploads/MRSI.png",
        Skills: ["Javascript","ReactJs", "Java","JSoup"]
    }
  ];
  