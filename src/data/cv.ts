type LocalizedText = {
  en: string;
  it: string;
};

export type Education = {
  title: LocalizedText;
  date: LocalizedText;
  place: LocalizedText;
  score?: LocalizedText;
  logo: string;
};

export type Experience = {
  title: LocalizedText;
  date: LocalizedText;
  place: LocalizedText;
  logo: string;
  bullets: LocalizedText[];
};

export type SkillGroup = {
  name: LocalizedText;
  skills: string[];
};

export const education: Education[] = [
  {
    title: {
      en: "Computer Science MSc",
      it: "Laurea Magistrale in Informatica",
    },
    date: {
      en: "Sep 2025 - 2027 (expected)",
      it: "Set 2025 - 2027 (previsto)",
    },
    place: { en: "University of Bologna", it: "Universita di Bologna" },
    logo: "/assets/imgs/unibo_logo.svg",
  },
  {
    title: {
      en: "Computer Science BSc",
      it: "Laurea Triennale in Informatica",
    },
    date: { en: "Sep 2022 - Jul 2025", it: "Set 2022 - Lug 2025" },
    place: { en: "University of Bologna", it: "Universita di Bologna" },
    score: { en: "110/110", it: "110/110" },
    logo: "/assets/imgs/unibo_logo.svg",
  },
  {
    title: { en: "High School of Science", it: "Liceo Scientifico" },
    date: { en: "Sep 2017 - 2022", it: "Set 2017 - 2022" },
    place: {
      en: "Galileo Galilei Institute, Mirandola",
      it: "Istituto Galileo Galilei, Mirandola",
    },
    score: { en: "95/100", it: "95/100" },
    logo: "/assets/imgs/galileo_logo.png",
  },
];

export const experience: Experience[] = [
  {
    title: {
      en: "FullStack Software Developer",
      it: "Sviluppatore Software FullStack",
    },
    date: { en: "Dec 2025 - Present", it: "Dic 2025 - Presente" },
    place: {
      en: "Applika, Mirandola, Italy",
      it: "Applika, Mirandola, Italia",
    },
    logo: "/assets/imgs/applika_logo.svg",
    bullets: [
      {
        en: "Building and maintaining end-to-end web products in multidisciplinary teams.",
        it: "Sviluppo e manutenzione di prodotti web end-to-end in team multidisciplinari.",
      },
    ],
  },
  {
    title: { en: "Data Analyst Intern", it: "Tirocinante Data Analyst" },
    date: { en: "Dec 2024 - Feb 2025", it: "Dic 2024 - Feb 2025" },
    place: {
      en: "University of Bologna, Bologna, Italy",
      it: "Universita di Bologna, Bologna, Italia",
    },
    logo: "/assets/imgs/unibo_logo.svg",
    bullets: [
      {
        en: "Developed a pipeline leveraging LLMs for analysis of textual medical data.",
        it: "Sviluppata una pipeline basata su LLM per l'analisi di dati medici testuali.",
      },
      {
        en: "Performed data cleaning, standardization, and exploratory analysis on medical datasets.",
        it: "Eseguite attivita di data cleaning, standardizzazione e analisi esplorativa su dataset medici.",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: { en: "Languages", it: "Linguaggi" },
    skills: ["c", "c++", "csharp", "java", "python", "js", "ts", "go"],
  },
  {
    name: { en: "Frameworks", it: "Framework" },
    skills: ["react", "angular", "node", "aspnet", "tailwind", "fastapi"],
  },
  {
    name: { en: "AI/ML", it: "AI/ML" },
    skills: ["numpy", "pandas", "pytorch", "keras"],
  },
  {
    name: { en: "Databases & Tools", it: "Database e Strumenti" },
    skills: ["mongodb", "postgresql", "mssql", "git", "docker", "linux"],
  },
];

export const community = {
  title: { en: "CartaBinaria", it: "CartaBinaria" },
  description: {
    en: "Student community developing tools for CS students at University of Bologna.",
    it: "Community studentesca che sviluppa strumenti per studenti di Informatica all'Universita di Bologna.",
  },
  bullets: [
    {
      en: "Contributed to Telegram bot used by hundreds of students.",
      it: "Contributo al bot Telegram usato da centinaia di studenti.",
    },
    {
      en: "Built WebDAV server for remote filesystem access to resources.",
      it: "Realizzato un server WebDAV per accesso remoto al filesystem delle risorse.",
    },
    {
      en: "Developed a platform for uploading and discussing exams and notes.",
      it: "Sviluppata una piattaforma per caricare e discutere temi d'esame e appunti.",
    },
  ],
};
