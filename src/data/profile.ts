type LocalizedText = {
  en: string;
  it: string;
};

export const profile = {
  name: "Leonardo Po",
  role: {
    en: "CS MSc student at University of Bologna",
    it: "Studente magistrale in Informatica all'Universita di Bologna",
  } as LocalizedText,
  summary: {
    en: "BSc in Computer Science. Interested in software design and development, focused on solving real-world problems through practical, well-crafted software solutions.",
    it: "Laurea triennale in Informatica. Interessato alla progettazione e allo sviluppo software, con focus sulla risoluzione di problemi reali attraverso soluzioni pratiche e curate.",
  } as LocalizedText,
  image: "/assets/imgs/me.jpg",
  socials: [
    {
      id: "github",
      label: { en: "GitHub", it: "GitHub" } as LocalizedText,
      url: "https://github.com/leonardo3130",
    },
    {
      id: "linkedin",
      label: { en: "LinkedIn", it: "LinkedIn" } as LocalizedText,
      url: "https://www.linkedin.com/in/leonardo-po",
    },
    {
      id: "email",
      label: { en: "Email", it: "Email" } as LocalizedText,
      url: "mailto:leonardopo313@gmail.com",
    },
  ],
};
