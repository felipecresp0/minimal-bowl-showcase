import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import bowlSage from '@/assets/bowl-sage.jpg';
import bowlBeige from '@/assets/bowl-beige.jpg';
import bowlWhite from '@/assets/bowl-set-white.jpg';
import bowlOrange from '@/assets/bowl-orange.jpg';
import bowlBlue from '@/assets/bowl-blue.jpg';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  features: string[];
  isPromo?: boolean;
}

const Products = () => {
  const { t } = useLanguage();

  const products: Product[] = [
    {
      id: '1',
      name: 'Sage Collection Bowl',
      price: 24.99,
      originalPrice: 29.99,
      image: bowlSage,
      description: 'Elegante bowl en color salvia, perfecto para ensaladas',
      features: ['foodGrade', 'microwaveSafe', 'ovenSafe'],
      isPromo: true,
    },
    {
      id: '2',
      name: 'Classic Beige Set',
      price: 34.99,
      image: bowlBeige,
      description: 'Set de bowls en tono beige cálido y natural',
      features: ['foodGrade', 'dishwasherSafe', 'ovenSafe'],
    },
    {
      id: '3',
      name: 'Pure White Collection',
      price: 19.99,
      image: bowlWhite,
      description: 'Conjunto de bowls blancos minimalistas',
      features: ['foodGrade', 'microwaveSafe', 'dishwasherSafe'],
    },
    {
      id: '4',
      name: 'Terracotta Duo',
      price: 27.99,
      image: bowlOrange,
      description: 'Bowls en terracota para un toque mediterráneo',
      features: ['foodGrade', 'ovenSafe'],
    },
    {
      id: '5',
      name: 'Ocean Blue Set',
      price: 31.99,
      image: bowlBlue,
      description: 'Bowls azul océano para mesa moderna',
      features: ['foodGrade', 'microwaveSafe', 'dishwasherSafe'],
    },
  ];

  return (
    <section id="products" className="bowl-section bg-bowl-warm-white">
      <div className="bowl-container">
        <div className="text-center mb-16">
          <h2 className="bowl-heading text-foreground mb-6">
            {t('productsTitle')}
          </h2>
          <p className="bowl-subheading text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección cuidadosamente curada de bowls artesanales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bowl-card group">
              <div className="aspect-square overflow-hidden bg-background">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Badge 
                      key={feature} 
                      variant="secondary"
                      className="text-xs bg-bowl-sage-light text-bowl-charcoal"
                    >
                      {t(feature)}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-light text-foreground">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.isPromo && (
                      <div className="text-xs text-primary font-medium">
                        {t('specialWeekend')} - 15{t('off')}
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {t('viewDetails')}
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

export default Products;