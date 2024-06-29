import { useState, useEffect, createContext } from 'react';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import en from './translations/en/en.json';
import pl from './translations/pl/pl.json';
import './styles/_main.scss';

interface Language {
  subheaderTitle: string;
  subheaderParagraph: string;
  contactmeButton: string;
  benefitClient: string;
  benefitBusinessCard: string;
  benefitTimesaver: string;
}

export const ThemeContext = createContext('dark');
export const LanguageContext = createContext<Language[]>([]);

function App() {
  const [theme, setTheme] = useState<string>('dark');
  const [lang, setLang] = useState<string>('pl');
  const [langArrey, setLangArrey] = useState<Language[]>([
    {
      subheaderTitle: 'Stworzę Twoją wymarzoną stronę bądź aplikację internetową!',
      subheaderParagraph:
        'Jestem profesjonalnym fullstack developerem który wprowadzi w życie Twój pomysł.',
      contactmeButton: 'ROZPOCZNIJ WSPÓŁPRACĘ',
      benefitClient: 'Więcej klientów',
      benefitBusinessCard: 'Nowoczesna wizytówka',
      benefitTimesaver: 'Oszczędność czasu',
    },
  ]);

  useEffect(() => {
    if (lang === 'pl') {
      setLangArrey(pl);
    } else {
      setLangArrey(en);
    }
  }, [lang]);

  const handleThemeSwitchClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleLangSwitchClick = () => {
    if (lang === 'pl') {
      setLang('en');
    } else {
      setLang('pl');
    }
  };

  return (
    <LanguageContext.Provider value={langArrey}>
      <ThemeContext.Provider value={theme}>
        <div className={`theme ${theme}`}>
          <Header
            theme={theme}
            handleThemeSwitchClick={handleThemeSwitchClick}
            lang={lang}
            handleLangSwitchClick={handleLangSwitchClick}
          />
          <main>
            <SubHeader />
            <BenefitsSection />
          </main>
          <footer></footer>
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
