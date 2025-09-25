import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  es: Record<string, string>;
  en: Record<string, string>;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  es: {
    // Navigation
    home: 'Home',
    products: 'Productos',
    collections: 'Colecciones',
    buyNow: 'Comprar ahora',
    getInTouch: 'Contactar',
    
    // Hero
    heroTitle: 'Bowl Collection',
    heroDescription: 'Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.',
    exploreCollection: 'Explorar Colección',
    
    // Products
    productsTitle: 'Productos',
    viewDetails: 'Ver detalles',
    startFrom: 'Desde',
    specialWeekend: 'Fin de semana especial',
    off: '% off',
    
    // Collections
    collectionsTitle: 'Colecciones',
    minimalistCollection: 'Minimalistas',
    colorfulCollection: 'Coloridos',
    classicCollection: 'Clásicos',
    minimalistDesc: 'Diseños limpios y elegantes para mesas modernas',
    colorfulDesc: 'Bowls vibrantes que alegran cualquier comida',
    classicDesc: 'Estilos atemporales que nunca pasan de moda',
    
    // Features
    foodGrade: 'Apto para alimentos',
    microwaveSafe: 'Apto microondas',
    ovenSafe: 'Apto horno',
    dishwasherSafe: 'Apto lavavajillas',
    
    // Footer
    contact: 'Contacto',
    followUs: 'Síguenos',
    rights: 'Todos los derechos reservados',
  },
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    collections: 'Collections',
    buyNow: 'Buy now',
    getInTouch: 'Get in touch',
    
    // Hero
    heroTitle: 'Bowl Collection',
    heroDescription: 'Explore our collection of bowls that combines style and practicality, perfect for any table.',
    exploreCollection: 'Explore Collection',
    
    // Products
    productsTitle: 'Products',
    viewDetails: 'View details',
    startFrom: 'Start from',
    specialWeekend: 'Special weekend',
    off: '% off',
    
    // Collections
    collectionsTitle: 'Collections',
    minimalistCollection: 'Minimalist',
    colorfulCollection: 'Colorful',
    classicCollection: 'Classic',
    minimalistDesc: 'Clean and elegant designs for modern tables',
    colorfulDesc: 'Vibrant bowls that brighten any meal',
    classicDesc: 'Timeless styles that never go out of fashion',
    
    // Features
    foodGrade: 'Food grade',
    microwaveSafe: 'Microwave safe',
    ovenSafe: 'Oven safe',
    dishwasherSafe: 'Dishwasher safe',
    
    // Footer
    contact: 'Contact',
    followUs: 'Follow us',
    rights: 'All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};