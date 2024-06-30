import { useState, useEffect, createContext } from 'react';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import ProblemSolutionSection from './components/ProblemSolutionSection/ProblemSolutionSection';
import FAQSection from './components/FAQSection/FAQSection';
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
  problemSolutionHeader: string;
  problemSolutionParagraph: string;
  problemSolutionListTitle: string;
  problemSolutionBullet1: string;
  problemSolutionBullet2: string;
  problemSolutionBullet3: string;
  problemSolutionBullet4: string;
  problemSolutionBullet5: string;
  problemSolutionBullet6: string;
  problemSolutionBullet7: string;
  FAQTitle: string;
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
      problemSolutionHeader: 'Chcesz mieć swoją stronę internetową ale nie wiesz od czego zacząć?',
      problemSolutionParagraph:
        'Obecnie jest wiele możliwości, aby stworzyć swoją stronę internetową, niestety gdy zaczynasz szukać informacji, okazuje się, że jest to bardzo złożony problem! Padną takie słowa jak domena, SEO, wordpress czy HTML. Zawsze można skorzystać z kreatorów stron www, ale często są koszty ukryte i nie ma swobody w designie. Trzeba poświęcić dużo czasu, żeby zrozumieć jak są pozycjonowane strony internetowe przez wyszukiwarki, które strony przyciągają więcej klientów i dlaczego, lub co to responsywność... Nie martw się pomogę Ci!',
      problemSolutionListTitle: 'Dzięki wspólpracy ze mną uzyskasz stronę internetową:',
      problemSolutionBullet1: 'zbudowaną według najnowszych trendów designerskich',
      problemSolutionBullet2: 'funkcjonalną dla Twojego klienta',
      problemSolutionBullet3:
        'zawierającą najnowsze techniki psychologiczne w celu utrzymania klienta i zwiększenia szansy na skontaktowanie się właśnie z Tobą',
      problemSolutionBullet4: 'wyglądającą dokładnie tak jak chcesz',
      problemSolutionBullet5: 'w kilku językach',
      problemSolutionBullet6: 'w trybie ciemnym i jasnym',
      problemSolutionBullet7: 'dostępną dla osób z niepełnosprawnościami',
      FAQTitle: 'Często zadawane pytania',
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
            <ProblemSolutionSection />
            <FAQSection />
          </main>
          <footer></footer>
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
