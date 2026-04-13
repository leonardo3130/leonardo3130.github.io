const iconMap: Record<string, string> = {
  html: "/assets/icons/html.svg",
  css: "/assets/icons/css.svg",
  js: "/assets/icons/javascript.svg",
  ts: "/assets/icons/typescript.svg",
  java: "/assets/icons/java.svg",
  c: "/assets/icons/c.svg",
  "c++": "/assets/icons/c++.svg",
  csharp: "/assets/icons/csharp.svg",
  python: "/assets/icons/python.svg",
  mongodb: "/assets/icons/mongodb.svg",
  mssql: "/assets/icons/mssql.svg",
  fastapi: "/assets/icons/FastAPI.svg",
  aspnet: "/assets/icons/aspnet.svg",
  angular: "/assets/icons/angular.svg",
  node: "/assets/icons/nodejs.svg",
  react: "/assets/icons/react.svg",
  numpy: "/assets/icons/NumPy.svg",
  pandas: "/assets/icons/Pandas.svg",
  tailwind: "/assets/icons/tailwind.svg",
  keras: "/assets/icons/keras.svg",
  git: "/assets/icons/git.svg",
  postgresql: "/assets/icons/postgresql.svg",
  docker: "/assets/icons/docker.svg",
  linux: "/assets/icons/Linux.svg",
  pytorch: "/assets/icons/PyTorch.svg",
  go: "/assets/icons/go.svg",
  github: "/assets/icons/github.svg",
};

type TechIconProps = {
  tech: string;
};

export const TechIcon = ({ tech }: TechIconProps) => {
  const src = iconMap[tech];
  if (!src) {
    return (
      <span className="rounded-full border border-(--border-soft) px-2 py-1 text-xs text-(--text-muted)">
        {tech}
      </span>
    );
  }

  return (
    <img src={src} alt={tech} title={tech} className="h-6 w-6" loading="lazy" />
  );
};
