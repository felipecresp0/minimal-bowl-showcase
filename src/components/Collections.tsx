import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import bowlWhite from '@/assets/bowl-set-white.jpg';
import bowlOrange from '@/assets/bowl-orange.jpg';
import bowlBeige from '@/assets/bowl-beige.jpg';

interface Collection {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  style: string;
}

const Collections = () => {
  const { t } = useLanguage();

  const collections: Collection[] = [
    {
      id: 'minimalist',
      titleKey: 'minimalistCollection',
      descriptionKey: 'minimalistDesc',
      image: bowlWhite,
      style: 'Minimalista',
    },
    {
      id: 'colorful',
      titleKey: 'colorfulCollection',
      descriptionKey: 'colorfulDesc', 
      image: bowlOrange,
      style: 'Colorido',
    },
    {
      id: 'classic',
      titleKey: 'classicCollection',
      descriptionKey: 'classicDesc',
      image: bowlBeige,
      style: 'Clásico',
    },
  ];

  return (
    <section id="collections" className="bowl-section">
      <div className="bowl-container">
        <div className="text-center mb-16">
          <h2 className="bowl-heading text-foreground mb-6">
            {t('collectionsTitle')}
          </h2>
          <p className="bowl-subheading text-muted-foreground max-w-2xl mx-auto">
            Explora nuestras colecciones temáticas, cada una diseñada para diferentes estilos de vida
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={`space-y-6 ${index === 1 ? 'lg:mt-12' : ''}`}
            >
              <div className="bowl-card overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={t(collection.titleKey)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-primary uppercase tracking-wider">
                      {collection.style}
                    </div>
                    <h3 className="text-2xl font-light text-foreground">
                      {t(collection.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(collection.descriptionKey)}
                    </p>
                  </div>
                  
                  <Button 
                    variant="ghost"
                    className="text-primary hover:text-primary-foreground hover:bg-primary group p-0 h-auto font-medium"
                  >
                    Explorar colección
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;