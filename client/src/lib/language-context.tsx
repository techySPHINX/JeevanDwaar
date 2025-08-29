import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'hindi' | 'english' | 'telugu' | 'bengali';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('hindi');

  useEffect(() => {
    const saved = localStorage.getItem('preferred-language') as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  // Simple translation function - in a real app, this would use proper i18n
  const translate = (key: string): string => {
    const translations: Record<Language, Record<string, string>> = {
      hindi: {
        'home': 'होम',
        'policies': 'पॉलिसी',
        'education': 'शिक्षा',
        'mitra': 'मित्र',
        'find_policy': 'मेरी पॉलिसी खोजें',
        'learn_insurance': 'बीमा के बारे में जानें',
        'life_insurance_simple': 'जीवन बीमा सरल बनाया',
        'in_your_language': 'आपकी भाषा में',
        'trusted_transparent': 'विश्वसनीय, पारदर्शी, और समझने योग्य जीवन बीमा',
        'rural_focus': 'ग्रामीण और अर्ध-शहरी परिवारों के लिए विशेष रूप से डिज़ाइन किया गया',
        'satisfied_customers': 'संतुष्ट ग्राहक',
        'minimum_premium': 'न्यूनतम प्रीमियम',
        'customer_service': 'ग्राहक सेवा'
      },
      english: {
        'home': 'Home',
        'policies': 'Policies',
        'education': 'Education',
        'mitra': 'Support',
        'find_policy': 'Find My Policy',
        'learn_insurance': 'Learn About Insurance',
        'life_insurance_simple': 'Life Insurance Made Simple',
        'in_your_language': 'In Your Language',
        'trusted_transparent': 'Trusted, transparent, and understandable life insurance',
        'rural_focus': 'Specially designed for rural and semi-urban families',
        'satisfied_customers': 'Satisfied Customers',
        'minimum_premium': 'Minimum Premium',
        'customer_service': 'Customer Service'
      },
      telugu: {
        'home': 'ముంగిలి',
        'policies': 'పాలసీలు',
        'education': 'విద్య',
        'mitra': 'మిత్రుడు',
        'find_policy': 'నా పాలసీని కనుగొనండి',
        'learn_insurance': 'బీమా గురించి తెలుసుకోండి',
        'life_insurance_simple': 'జీవిత బీమా సులభంగా',
        'in_your_language': 'మీ భాషలో',
        'trusted_transparent': 'నమ్మకమైన, పారదర్శక మరియు అర్థమయ్యే జీవిత బీమా',
        'rural_focus': 'గ్రామీణ మరియు పాక్షిక-పట్టణ కుటుంబాలకు ప్రత్యేకంగా రూపొందించబడింది',
        'satisfied_customers': 'సంతృప్త కస్టమర్లు',
        'minimum_premium': 'కనిష్ట ప్రీమియం',
        'customer_service': 'కస్టమర్ సేవ'
      },
      bengali: {
        'home': 'হোম',
        'policies': 'পলিসি',
        'education': 'শিক্ষা',
        'mitra': 'মিত্র',
        'find_policy': 'আমার পলিসি খুঁজুন',
        'learn_insurance': 'বীমা সম্পর্কে জানুন',
        'life_insurance_simple': 'জীবন বীমা সহজ করা হয়েছে',
        'in_your_language': 'আপনার ভাষায়',
        'trusted_transparent': 'বিশ্বস্ত, স্বচ্ছ এবং বোধগম্য জীবন বীমা',
        'rural_focus': 'গ্রামীণ এবং আধা-শহুরে পরিবারের জন্য বিশেষভাবে ডিজাইন করা',
        'satisfied_customers': 'সন্তুষ্ট গ্রাহক',
        'minimum_premium': 'ন্যূনতম প্রিমিয়াম',
        'customer_service': 'গ্রাহক সেবা'
      }
    };

    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
}
