
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
  // Hero section
  hero: {
    title: {
      kk: 'Маңызды әңгімелер арқылы ұрпақтарды байланыстыру',
      ru: 'Объединение поколений через значимые разговоры',
      en: 'Connecting Generations Through Meaningful Conversations',
    },
    subtitle: {
      kk: 'Jüzdesu қарт адамдар мен жастарды апта сайын немесе екі апта сайын әңгімелесу үшін біріктіріп, ұрпақтар арасындағы алшақтықты жоятын маңызды қарым-қатынас жасайды.',
      ru: 'Jüzdesu объединяет пожилых людей и молодежь для еженедельных или двухнедельных бесед, создавая значимые отношения, которые преодолевают разрыв между поколениями.',
      en: 'Jüzdesu brings together older adults and young people for weekly or bi-weekly conversations, creating meaningful relationships that bridge generational gaps.',
    },
    seniorButton: {
      kk: 'Мен қарт адаммын',
      ru: 'Я старший',
      en: 'I\'m a Senior',
    },
    youthButton: {
      kk: 'Мен жас адаммын',
      ru: 'Я молодой',
      en: 'I\'m a Young Adult',
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
    seniors: {
      title: {
        kk: 'Қарт адамдарды тіркеу',
        ru: 'Регистрация пожилых людей',
        en: 'Senior Registration',
      },
      description: {
        kk: 'Жас ұрпақпен байланыс орнатып, даналығыңыз бен өмірлік тәжірибеңізбен бөлісіңіз.',
        ru: 'Общайтесь с молодым поколением и делитесь своей мудростью и жизненным опытом.',
        en: 'Connect with younger generations and share your wisdom and life experiences.',
      },
      fullName: {
        kk: 'Толық аты-жөні',
        ru: 'Полное имя',
        en: 'Full Name',
      },
      email: {
        kk: 'Электрондық пошта',
        ru: 'Электронная почта',
        en: 'Email',
      },
      register: {
        kk: 'Қарт адам ретінде тіркелу',
        ru: 'Зарегистрироваться как старший',
        en: 'Register as a Senior',
      },
    },
    youth: {
      title: {
        kk: 'Жас ересектерді тіркеу',
        ru: 'Регистрация молодых людей',
        en: 'Young Adult Registration',
      },
      description: {
        kk: 'Қауымдастығыңыздағы қарт адамдармен байланыс орнату арқылы көзқарас пен даналыққа ие болыңыз.',
        ru: 'Получите перспективу и мудрость, общаясь с пожилыми людьми в вашем сообществе.',
        en: 'Gain perspective and wisdom by connecting with seniors in your community.',
      },
      fullName: {
        kk: 'Толық аты-жөні',
        ru: 'Полное имя',
        en: 'Full Name',
      },
      email: {
        kk: 'Электрондық пошта',
        ru: 'Электронная почта',
        en: 'Email',
      },
      register: {
        kk: 'Жас ересек ретінде тіркелу',
        ru: 'Зарегистрироваться как молодой',
        en: 'Register as a Young Adult',
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
