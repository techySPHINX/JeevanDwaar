import { useLanguage } from '@/lib/language-context';
import { Button } from './button';

const languages = [
  { code: 'hindi' as const, label: 'हिंदी', labelEn: 'Hindi' },
  { code: 'english' as const, label: 'English', labelEn: 'English' },
  { code: 'telugu' as const, label: 'తెలుగు', labelEn: 'Telugu' },
  { code: 'bengali' as const, label: 'বাংলা', labelEn: 'Bengali' },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-accent rounded-lg p-1">
      {languages.slice(0, 2).map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={language === lang.code ? "bg-primary text-primary-foreground" : "text-accent-foreground"}
          data-testid={`language-${lang.code}`}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="space-y-3">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "outline"}
          className={`w-full p-3 text-left justify-start ${
            language === lang.code 
              ? "bg-primary text-primary-foreground" 
              : "border-border text-foreground hover:bg-accent"
          }`}
          onClick={() => setLanguage(lang.code)}
          data-testid={`language-selector-${lang.code}`}
        >
          {lang.label} - {lang.labelEn}
        </Button>
      ))}
    </div>
  );
}
