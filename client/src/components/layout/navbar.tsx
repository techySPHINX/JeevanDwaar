import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { useLanguage } from '@/lib/language-context';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('home'), href: '/', key: 'home' },
    { name: t('policies'), href: '/policy-explainer', key: 'policies' },
    { name: t('education'), href: '/education', key: 'education' },
    { name: t('mitra'), href: '/mitra', key: 'mitra' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="text-primary-foreground text-lg" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Jeevan Dwaar</h1>
              <p className="text-xs text-muted-foreground">SBI Life Insurance</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-foreground hover:text-primary transition-colors ${
                  location === item.href ? 'text-primary font-medium' : ''
                }`}
                data-testid={`nav-${item.key}`}
              >
                {item.name}
              </Link>
            ))}
            
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    location === item.href 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground hover:text-primary hover:bg-accent'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.key}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
