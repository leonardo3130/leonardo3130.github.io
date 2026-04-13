import { InteractiveCard } from "../components/common/InteractiveCard";
import { TechIcon } from "../components/common/TechIcon";
import { community, education, experience, skillGroups } from "../data/cv";
import { useLanguage } from "../lib/i18n";

export const CvPage = () => {
  const { t } = useLanguage();

  return (
    <section className="mx-auto grid max-w-5xl gap-4 sm:gap-6">
      <InteractiveCard className="rounded-2xl p-5 sm:p-6">
        <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-(--accent-soft)">
          {t({ en: "Education", it: "Formazione" })}
        </h2>
        <div className="space-y-4">
          {education.map((entry) => (
            <div key={t(entry.title)} className="flex gap-4">
              <img
                src={entry.logo}
                alt={t(entry.place)}
                className="h-12 w-12 rounded-xl object-contain"
                loading="lazy"
              />
              <div>
                <p className="text-base font-semibold text-(--text-strong)">
                  {t(entry.title)}
                </p>
                <p className="text-sm text-(--text-muted)">
                  {t(entry.date)}
                </p>
                <p className="text-sm text-(--text-muted)">
                  {t(entry.place)}
                  {entry.score ? ` - ${t(entry.score)}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </InteractiveCard>

      <InteractiveCard className="rounded-2xl p-5 sm:p-6">
        <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-(--accent-soft)">
          {t({ en: "Experience", it: "Esperienza" })}
        </h2>
        <div className="space-y-5">
          {experience.map((entry) => (
            <div key={t(entry.title)} className="flex gap-4">
              <img
                src={entry.logo}
                alt={t(entry.place)}
                className="h-14 w-14 rounded-xl object-contain"
                loading="lazy"
              />
              <div>
                <p className="text-base font-semibold text-(--text-strong)">
                  {t(entry.title)}
                </p>
                <p className="text-sm text-(--text-muted)">
                  {t(entry.date)}
                </p>
                <p className="mb-2 text-sm text-(--text-muted)">
                  {t(entry.place)}
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-(--text-muted)">
                  {entry.bullets.map((bullet) => (
                    <li key={t(bullet)}>{t(bullet)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </InteractiveCard>

      <InteractiveCard className="rounded-2xl p-5 sm:p-6">
        <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-(--accent-soft)">
          {t({ en: "Technical Skills", it: "Competenze Tecniche" })}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={t(group.name)}>
              <h3 className="mb-2 text-sm font-semibold text-(--text-strong)">
                {t(group.name)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <TechIcon key={`${t(group.name)}-${skill}`} tech={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </InteractiveCard>

      <InteractiveCard className="rounded-2xl p-5 sm:p-6">
        <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-(--accent-soft)">
          {t({ en: "Community", it: "Community" })}
        </h2>
        <p className="text-base font-semibold text-(--text-strong)">
          {t(community.title)}
        </p>
        <p className="mb-2 text-sm text-(--text-muted)">
          {t(community.description)}
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-(--text-muted)">
          {community.bullets.map((bullet) => (
            <li key={t(bullet)}>{t(bullet)}</li>
          ))}
        </ul>
      </InteractiveCard>
    </section>
  );
};
