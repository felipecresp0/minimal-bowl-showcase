import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-bowl-charcoal text-bowl-warm-white">
      <div className="bowl-container">
        <div className="py-16 space-y-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-6 lg:col-span-2">
              <div className="text-3xl font-light tracking-tight">
                Bowl<span className="text-primary">Collection</span>
              </div>
              <p className="text-bowl-soft-gray max-w-md leading-relaxed">
                Creamos bowls que combinan diseño elegante y funcionalidad excepcional, 
                perfectos para elevar tu experiencia culinaria diaria.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-bowl-sage/20 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-bowl-sage/20 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-bowl-sage/20 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Navegación</h3>
              <ul className="space-y-3 text-bowl-soft-gray">
                <li>
                  <a href="#home" className="hover:text-primary transition-colors">
                    {t('home')}
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-primary transition-colors">
                    {t('products')}
                  </a>
                </li>
                <li>
                  <a href="#collections" className="hover:text-primary transition-colors">
                    {t('collections')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium">{t('contact')}</h3>
              <ul className="space-y-4 text-bowl-soft-gray">
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@bowlcollection.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+34 123 456 789</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary mt-1" />
                  <span>Barcelona, España</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-bowl-soft-gray/20"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-bowl-soft-gray text-sm">
            <div>
              © 2024 Bowl Collection. {t('rights')}.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos de servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;