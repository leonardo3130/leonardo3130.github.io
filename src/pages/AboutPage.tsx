import { InteractiveCard } from "../components/common/InteractiveCard";
import { profile } from "../data/profile";
import { useLanguage } from "../lib/i18n";

export const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <InteractiveCard
      as="section"
      className="mx-auto grid max-w-4xl gap-6 rounded-3xl p-6 sm:grid-cols-[auto,1fr] sm:p-8"
    >
      <img
        src={profile.image}
        alt={profile.name}
        className="h-28 w-28 rounded-3xl object-cover ring-1 ring-(--border-soft) sm:h-32 sm:w-32"
      />

      <div>
        <h1 className="mb-2 text-3xl font-bold text-(--text-strong) sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mb-4 text-lg text-(--accent-strong)">{t(profile.role)}</p>
        <p className="max-w-2xl text-sm leading-relaxed text-(--text-muted) sm:text-base">
          {t(profile.summary)}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full border border-(--border-soft) bg-(--button-bg) px-4 py-2 text-sm text-(--text-strong) transition hover:bg-(--button-hover-bg)"
            >
              {t(social.label)}
            </a>
          ))}
        </div>
      </div>
    </InteractiveCard>
  );
};
