import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-bowl.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center bowl-section">
      <div className="bowl-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="bowl-hero-text text-foreground">
                {t('heroTitle')}
              </h1>
              <p className="bowl-subheading text-muted-foreground max-w-lg leading-relaxed">
                {t('heroDescription')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 rounded-full text-lg"
              >
                {t('exploreCollection')}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-bowl-warm-white">
              <img
                src={heroImage}
                alt="Bowl Collection Hero"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-lg p-4 hidden lg:block">
              <div className="text-sm text-muted-foreground font-medium">
                {t('specialWeekend')}
              </div>
              <div className="text-2xl font-light text-primary">
                15{t('off')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;