import { InteractiveCard } from "../components/common/InteractiveCard";
import { TechIcon } from "../components/common/TechIcon";
import { getIframeLevel } from "../lib/iframeLevel";
import { useLanguage } from "../lib/i18n";
import { projects } from "../data/projects";

const maxIframeLevel = 2;

export const ProjectsPage = () => {
  const level = getIframeLevel();
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-4xl space-y-4">
      {projects.map((project) => {
        const recursiveUrl =
          project.recursive && level < maxIframeLevel
            ? `${window.location.origin}${window.location.pathname}?iframeLevel=${level + 1}`
            : null;

        return (
          <InteractiveCard key={project.id} className="rounded-2xl p-5 sm:p-6">
            {project.recursive && recursiveUrl ? (
              <div className="mb-4 aspect-video overflow-hidden rounded-xl border border-(--border-soft)">
                <iframe
                  src={recursiveUrl}
                  className="h-full w-full"
                  loading="lazy"
                  title={t({
                    en: "Recursive site preview",
                    it: "Anteprima ricorsiva del sito",
                  })}
                />
              </div>
            ) : null}

            {project.recursive && !recursiveUrl ? (
              <p className="mb-3 text-sm text-(--text-muted)">
                {t({
                  en: "Max recursion depth reached.",
                  it: "Raggiunta la profondita massima di ricorsione.",
                })}
              </p>
            ) : null}

            <div className="mb-3 flex items-center gap-2">
              <h2 className="text-lg font-semibold text-(--text-strong)">
                {t(project.title)}
              </h2>
              {project.context ? (
                <span className="text-sm text-(--text-muted)">
                  - {t(project.context)}
                </span>
              ) : null}
            </div>

            <p className="mb-4 text-sm text-(--text-muted) sm:text-base">
              {t(project.description)}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {project.tech.map((tech) => (
                <TechIcon key={`${project.id}-${tech}`} tech={tech} />
              ))}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 rounded-full border border-(--border-soft) bg-(--button-bg) px-3 py-1.5 text-xs text-(--text-strong) transition hover:bg-(--button-hover-bg)"
                >
                  {t({ en: "GitHub", it: "GitHub" })}
                </a>
              ) : null}
            </div>
          </InteractiveCard>
        );
      })}
    </section>
  );
};
