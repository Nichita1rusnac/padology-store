import { useLanguageStore } from '@/shared/store/language';

export const AboutSection = () => {
  const { t } = useLanguageStore();

  return (
    <section id="about" className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8">
          {t.aboutTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-3xl aspect-[4/3]" />
          <div className="bg-card rounded-3xl p-8 flex flex-col justify-center">
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mt-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
