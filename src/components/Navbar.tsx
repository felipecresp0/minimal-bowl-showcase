import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="bowl-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-light tracking-tight text-foreground">
              Bowl<span className="text-primary">Collection</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('home')}
            </a>
            <a 
              href="#products" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('products')}
            </a>
            <a 
              href="#collections" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('collections')}
            </a>
          </div>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">
                {language}
              </span>
            </Button>
            
            <Button 
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              {t('getInTouch')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;