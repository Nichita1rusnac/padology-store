import { useTranslation } from 'react-i18next';
import { Activity, Footprints, Target } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useTranslation('main');

  const differenceItems = t('about.difference.items', { returnObjects: true }) as { title: string; description: string }[];
  
  // Rotating icons for the difference cards
  const icons = [Activity, Footprints];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle Background Watermark */}
      <img 
        src="foot-prints.png" 
        alt="" 
        className="absolute -bottom-24 -left-20 w-96 object-contain mix-blend-multiply opacity-[0.03] pointer-events-none" 
      />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* 1. Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-display text-lg-fluid text-primary font-medium tracking-wide uppercase mb-4 block">
            {t('about.subtitle')}
          </span>
          <h1 className="font-display text-display-lg font-light gradient-text mb-6">
            {t('about.title')}
          </h1>
          <p className="text-muted-foreground font-body text-lg-fluid leading-relaxed">
            {t('about.intro')}
          </p>
        </div>

        {/* 2. "Our Difference" Cards */}
        <div className="mb-20">
          <h2 className="text-center font-display text-display-sm font-light text-foreground mb-12">
            {t('about.difference.heading')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differenceItems.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div 
                  key={item.title} 
                  className="bg-card rounded-3xl p-8 md:p-10 shadow-sm border border-border/40 transition-all hover:shadow-md hover:border-border/80"
                >
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <Icon size={28} strokeWidth={1.5} />
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
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto relative overflow-hidden shadow-lg">
           {/* Gradient overlay for depth */}
           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
           
           <div className="relative z-10">
              <Target className="mx-auto mb-6 opacity-90" size={48} strokeWidth={1.5} />
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
