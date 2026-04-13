type LocalizedText = {
  en: string;
  it: string;
};

export type Project = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  context?: LocalizedText;
  tech: string[];
  github?: string;
  recursive?: boolean;
};

export const projects: Project[] = [
  {
    id: "selfie",
    title: { en: "Selfie", it: "Selfie" },
    description: {
      en: "Full-stack productivity app with calendar, Pomodoro timer, and Markdown notes.",
      it: "App full-stack di produttivita con calendario, timer Pomodoro e note Markdown.",
    },
    context: { en: "MERN stack project", it: "Progetto con stack MERN" },
    tech: ["react", "ts", "node", "mongodb"],
    github: "https://github.com/leonardo3130/Selfie",
  },
  {
    id: "tradisk",
    title: { en: "Tradisk", it: "Tradisk" },
    description: {
      en: "Web app for EVE Online players to explore in-game financial markets.",
      it: "Web app per giocatori di EVE Online per esplorare i mercati finanziari in-game.",
    },
    context: {
      en: "Built with Agile practices",
      it: "Sviluppato con pratiche Agile",
    },
    tech: ["react", "ts", "python", "fastapi"],
  },
  {
    id: "upandos",
    title: { en: "uPandOS", it: "uPandOS" },
    description: {
      en: "Educational microkernel OS with message-passing synchronization.",
      it: "Sistema operativo microkernel didattico con sincronizzazione via message passing.",
    },
    context: { en: "Operating Systems", it: "Sistemi Operativi" },
    tech: ["c"],
    github: "https://github.com/leonardo3130/MicroPandOS",
  },
  {
    id: "cifar10-overlap",
    title: {
      en: "CIFAR-10 Overlap Classification",
      it: "Classificazione Overlap CIFAR-10",
    },
    description: {
      en: "CNN model to predict labels of 2 overlapping CIFAR-10 images.",
      it: "Modello CNN per predire le etichette di 2 immagini CIFAR-10 sovrapposte.",
    },
    context: { en: "Deep Learning project", it: "Progetto di Deep Learning" },
    tech: ["python", "keras", "pandas", "numpy"],
    github: "https://github.com/leonardo3130/project_AA",
  },
  {
    id: "connectx-ai",
    title: { en: "Connect X AI", it: "Connect X AI" },
    description: {
      en: "AI agent using minimax with heuristics for generalized Connect 4.",
      it: "Agente AI che usa minimax con euristiche per Connect 4 generalizzato.",
    },
    context: { en: "Algorithms course", it: "Corso di Algoritmi" },
    tech: ["java"],
    github: "https://github.com/leonardo3130/connectx",
  },
  {
    id: "1-vs-all-phabet",
    title: { en: "1 vs All-phabet", it: "1 vs All-phabet" },
    description: {
      en: "ASCII graphics game with procedural level generation.",
      it: "Gioco in grafica ASCII con generazione procedurale dei livelli.",
    },
    context: {
      en: "Game development project",
      it: "Progetto di sviluppo giochi",
    },
    tech: ["c++"],
    github: "https://github.com/leonardo3130/1-VS-All-phabet",
  },
  {
    id: "this-website",
    title: { en: "This Website", it: "Questo Sito" },
    description: { en: "I love recursion!!", it: "Adoro la ricorsione!!" },
    tech: ["html", "css", "js", "tailwind"],
    github: "https://github.com/leonardo3130/leonardo3130.github.io",
    recursive: true,
  },
];
