import { useContext, useState } from 'react';
import { LanguageContext } from '../../App';
import { ThemeContext } from '../../App';
import ShapedSectionDividerLight from '../ShapedSectionDividerLight/ShapedSectionDividerLight';
import ShapedSectionDividerDark from '../ShapedSectionDividerDark/ShapedSectionDividerDark';

const FAQSection = () => {
  const lang = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  const [icon1Rotated, setIcon1Rotated] = useState(false);
  const [icon2Rotated, setIcon2Rotated] = useState(false);
  const [icon3Rotated, setIcon3Rotated] = useState(false);
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  const handleIconRotation = (
    e: Event & {
      target: HTMLDivElement;
    },
  ) => {
    const { target } = e;
    if (target.id === 'question1') {
      setIcon1Rotated(!icon1Rotated);
      setShowAnswer1(!showAnswer1);
    } else if (e.target.id === 'question2') {
      setIcon2Rotated(!icon2Rotated);
      setShowAnswer2(!showAnswer2);
    } else {
      setIcon3Rotated(!icon3Rotated);
      setShowAnswer3(!showAnswer3);
    }
  };

  return (
    <section className={`${theme}`}>
      {theme === 'light' ? <ShapedSectionDividerDark /> : <ShapedSectionDividerLight />}
      <div className='FQASection'>
        <h2>{lang[0].FAQTitle}</h2>
        <div
          className={icon1Rotated ? 'questionContainer' : 'questionContainer-collapsed'}
          id='question1'
          data-question='2'
          onClick={(e) => handleIconRotation(e)}
        >
          Ile czasu zajmuje zrobienie strony internetowej?
        </div>

        <div className={showAnswer1 ? 'FQAAnswer isopen' : 'FQAAnswer '}>
          <p className='FQAAnserInner'>
            Obecnie jest wiele możliwości, aby stworzyć swoją stronę internetową, niestety gdy
            zaczynasz szukać informacji, okazuje się, że jest to bardzo złożony problem! Padną takie
            słowa jak domena, SEO czy HTML. Trzeba poświęcić dużo czasu, żeby zrozumieć jak są
            pozycjonowane strony internetowe przez wyszukiwarki, które strony przyciągają więcej
            klientów i dlaczego, lub co to responsywność... Nie martw się pomogę Ci!
          </p>
        </div>

        <div
          className={icon2Rotated ? 'questionContainer' : 'questionContainer-collapsed'}
          id='question2'
          data-question='2'
          onClick={(e) => handleIconRotation(e)}
        >
          Jakich informacji muszę udzielić, abym otrzymał wstępny projekt?
        </div>
        <div className={showAnswer2 ? 'FQAAnswer isopen' : 'FQAAnswer '}>
          <p className='FQAAnserInner'>
            Obecnie jest wiele możliwości, aby stworzyć swoją stronę internetową, niestety gdy
            zaczynasz szukać informacji, okazuje się, że jest to bardzo złożony problem! Padną takie
            słowa jak domena, SEO czy HTML. Trzeba poświęcić dużo czasu, żeby zrozumieć jak są
            pozycjonowane strony internetowe przez wyszukiwarki, które strony przyciągają więcej
            klientów i dlaczego, lub co to responsywność... Nie martw się pomogę Ci!
          </p>
        </div>
        <div
          className={icon3Rotated ? 'questionContainer' : 'questionContainer-collapsed'}
          id='question3'
          onClick={(e) => handleIconRotation(e)}
        >
          Ile mogę wprowadzić poprawek?
        </div>
        <div className={showAnswer3 ? 'FQAAnswer isopen' : 'FQAAnswer'}>
          <p className='FQAAnserInner'>
            Obecnie jest wiele możliwości, aby stworzyć swoją stronę internetową, niestety gdy
            zaczynasz szukać informacji, okazuje się, że jest to bardzo złożony problem! Padną takie
            słowa jak domena, SEO czy HTML. Trzeba poświęcić dużo czasu, żeby zrozumieć jak są
            pozycjonowane strony internetowe przez wyszukiwarki, które strony przyciągają więcej
            klientów i dlaczego, lub co to responsywność... Nie martw się pomogę Ci!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
