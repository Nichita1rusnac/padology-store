import { useTranslation } from 'react-i18next';
import { Activity, Footprints, Target } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useTranslation('main');

  const differenceItems = t('about.difference.items', { returnObjects: true }) as { title: string; description: string }[];
  
  // Rotating icons for the difference cards
  const icons = [Activity, Footprints];

  return (
    <section id="about" className="section-y relative overflow-hidden">
      {/* Subtle Background Watermark */}
      <img 
        src="foot-prints.png" 
        alt="Footprints background texture" 
        className="absolute -bottom-24 -left-20 w-[clamp(14rem,34vw,24rem)] object-contain mix-blend-multiply opacity-[0.03] pointer-events-none"
        loading="lazy"
      />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* 1. Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-[clamp(2.5rem,7vw,5rem)]">
          <span className="font-display text-lg-fluid text-primary font-medium tracking-wide uppercase mb-4 block">
            {t('about.subtitle')}
          </span>
          <h2 className="font-display text-display-lg font-light gradient-text mb-6">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground font-body text-lg-fluid leading-relaxed">
            {t('about.intro')}
          </p>
        </div>

        {/* 2. "Our Difference" Cards */}
        <div className="mb-[clamp(2.5rem,7vw,5rem)]">
          <h2 className="text-center font-display text-display-sm font-light text-foreground mb-[clamp(2rem,5vw,3rem)]">
            {t('about.difference.heading')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-[clamp(1rem,3vw,2rem)]">
            {differenceItems.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div 
                  key={item.title} 
                  className="bg-card rounded-3xl p-[clamp(1.25rem,4vw,2.5rem)] shadow-sm border border-border/40 transition-all hover:shadow-md hover:border-border/80"
                >
                  <div className="size-[clamp(3rem,9vw,3.5rem)] rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <Icon className="size-[clamp(1.5rem,5vw,1.75rem)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl-fluid text-card-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-base-fluid leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. The Result Highlight */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-[clamp(1.5rem,5vw,3.5rem)] text-center max-w-4xl mx-auto relative overflow-hidden shadow-lg">
           {/* Gradient overlay for depth */}
           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
           
           <div className="relative z-10">
              <Target className="mx-auto mb-6 opacity-90 size-[clamp(2rem,8vw,3rem)]" strokeWidth={1.5} />
              <h2 className="font-display text-display-sm font-light mb-6">
                {t('about.result.heading')}
              </h2>
              <p className="font-body text-lg-fluid opacity-90 leading-relaxed max-w-2xl mx-auto">
                {t('about.result.description')}
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};
