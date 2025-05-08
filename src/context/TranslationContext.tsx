
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Types for our translations
export type Language = 'kk' | 'ru' | 'en';

type TranslationsContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the translations object
const translations = {
  // Common words
  optional: {
    kk: 'міндетті емес',
    ru: 'необязательно',
    en: 'optional'
  },
  
  // Hero section
  hero: {
    title: {
      kk: 'ЖҮРЕКТЕН ЖҮРЕККЕ, ҰРПАҚТАН ҰРПАҚҚА',
      ru: 'ОТ СЕРДЦА К СЕРДЦУ, ОТ ПОКОЛЕНИЯ К ПОКОЛЕНИЮ',
      en: 'FROM HEART TO HEART, FROM GENERATION TO GENERATION',
    },
    subtitle: {
      kk: '«Жүздесу» жобасы — ұрпақтарды жүрек пен сөз арқылы жақындастырып, қазақ тілінің тамырына жан бeретін алтын көпір.',
      ru: 'Проект «Жүздесу» — это золотой мост, который сближает поколения через сердце и слово, вдохновляя новую жизнь в корни казахского языка.',
      en: 'The "Jüzdesu" project is a golden bridge that brings generations closer through heart and conversation, breathing new life into the roots of the Kazakh language.',
    },
    registerButton: {
      kk: 'Тіркелу',
      ru: 'Регистрация',
      en: 'Register',
    },
  },
  
  // How it works section
  howItWorks: {
    title: {
      kk: 'Jüzdesu қалай жұмыс істейді',
      ru: 'Как работает Jüzdesu',
      en: 'How Jüzdesu Works',
    },
    subtitle: {
      kk: 'Біздің қарапайым процесс ұрпақтар арасында маңызды байланыстар жасауды жеңілдетеді.',
      ru: 'Наш простой процесс облегчает формирование значимых связей между поколениями.',
      en: 'Our simple process makes it easy to form meaningful connections across generations.',
    },
    steps: {
      signup: {
        title: {
          kk: 'Тіркелу',
          ru: 'Регистрация',
          en: 'Sign Up',
        },
        description: {
          kk: 'Біздің оңай тіркеу нысанын толтырып, қызығушылықтарыңыз бен қол жетімділігіңіз туралы айтыңыз.',
          ru: 'Заполните нашу простую регистрационную форму и расскажите о своих интересах и доступности.',
          en: 'Fill out our easy registration form and tell us about your interests and availability.',
        },
      },
      matched: {
        title: {
          kk: 'Сәйкестендіру',
          ru: 'Подбор',
          en: 'Get Matched',
        },
        description: {
          kk: 'Біздің жүйе қарт адамдар мен жас ересектерді ортақ қызығушылықтары мен қол жетімділігі негізінде мұқият сәйкестендіреді.',
          ru: 'Наша система тщательно сопоставляет пожилых людей и молодых людей на основе общих интересов и доступности.',
          en: 'Our system carefully matches seniors and young adults based on common interests and availability.',
        },
      },
      connect: {
        title: {
          kk: 'Байланыс',
          ru: 'Связь',
          en: 'Connect',
        },
        description: {
          kk: 'Біздің қауіпсіз платформа арқылы алғашқы виртуалды кездесуіңізді жоспарлап, әңгімеңізді бастаңыз.',
          ru: 'Запланируйте первую виртуальную встречу через нашу безопасную платформу и начните разговор.',
          en: 'Schedule your first virtual meeting through our secure platform and start your conversation.',
        },
      },
      meetings: {
        title: {
          kk: 'Тұрақты кездесулер',
          ru: 'Регулярные встречи',
          en: 'Regular Meetings',
        },
        description: {
          kk: 'Маңызды әңгіме мен байланыс үшін апта сайын немесе екі апта сайын бір сағатқа кездесіңіз.',
          ru: 'Встречайтесь еженедельно или раз в две недели в течение часа для содержательного разговора и общения.',
          en: 'Meet weekly or bi-weekly for an hour of meaningful conversation and connection.',
        },
      },
    },
  },
  
  // Testimonials section
  testimonials: {
    title: {
      kk: 'Байланыс оқиғалары',
      ru: 'Истории связи',
      en: 'Stories of Connection',
    },
    subtitle: {
      kk: 'Ұрпақаралық достықтың қуанышын бастан кешірген қатысушыларды тыңдаңыз.',
      ru: 'Услышьте от участников, которые испытали радость межпоколенческой дружбы.',
      en: 'Hear from participants who have experienced the joy of intergenerational friendship.',
    },
    comingSoon: {
      kk: 'Пікірлер жақында',
      ru: 'Отзывы скоро будут',
      en: 'Reviews Coming Soon',
    },
    stayTuned: {
      kk: 'Біздің қоғамдастық өсуде. Жақында нақты қолданушылардың пікірлерін көре аласыз.',
      ru: 'Наше сообщество растет. Скоро здесь будут представлены реальные отзывы пользователей.',
      en: 'Our community is growing. Real user testimonials will be featured here soon.',
    },
  },
  
  // Join section
  join: {
    title: {
      kk: 'Біздің қауымдастыққа қосылыңыз',
      ru: 'Присоединяйтесь к нашему сообществу',
      en: 'Join Our Community',
    },
    subtitle: {
      kk: 'Маңызды ұрпақаралық байланыстар жасау сапарын бастаңыз.',
      ru: 'Начните свой путь к значимым межпоколенческим связям.',
      en: 'Start your journey towards meaningful intergenerational connections.',
    },
    registration: {
      title: {
        kk: 'Тіркелу',
        ru: 'Регистрация',
        en: 'Registration',
      },
      description: {
        kk: 'Жүздесу қоғамдастығына қосылып, ұрпақтар арасында байланыс орнатыңыз.',
        ru: 'Присоединяйтесь к сообществу Jüzdesu и устанавливайте связи между поколениями.',
        en: 'Join the Jüzdesu community and create connections across generations.',
      },
      fullName: {
        kk: 'Толық аты-жөні',
        ru: 'Полное имя',
        en: 'Full Name',
      },
      whatsapp: {
        kk: 'WhatsApp нөмірі',
        ru: 'Номер WhatsApp',
        en: 'WhatsApp Number',
      },
      age: {
        kk: 'Жас',
        ru: 'Возраст',
        en: 'Age',
      },
      email: {
        kk: 'Электрондық пошта',
        ru: 'Электронная почта',
        en: 'Email',
      },
      register: {
        kk: 'Тіркелу',
        ru: 'Зарегистрироваться',
        en: 'Register',
      },
    },
  },
};

// Create the context
const TranslationsContext = createContext<TranslationsContextType | undefined>(undefined);

// Provider component
export const TranslationsProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('kk'); // Default to Kazakh

  // Function to get a translation by key
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    if (value && value[language]) {
      return value[language];
    }
    
    console.warn(`Translation not available for key: ${key} in ${language}`);
    return key;
  };

  return (
    <TranslationsContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationsContext.Provider>
  );
};

// Custom hook to use the translations context
export const useTranslations = (): TranslationsContextType => {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }
  return context;
};
