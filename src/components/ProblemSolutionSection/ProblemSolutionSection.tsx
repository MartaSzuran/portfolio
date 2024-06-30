import { useContext } from 'react';
import { LanguageContext } from '../../App';
import { ThemeContext } from '../../App';

const ProblemSolutionSection = () => {
  const lang = useContext(LanguageContext);
  const theme = useContext(ThemeContext);

  return (
    <section className={`${theme}-reverse`}>
      <div className='problemSolutionSection'>
        <h2>{lang[0].problemSolutionHeader}</h2>
        <p>{lang[0].problemSolutionParagraph}</p>
        <h3>{lang[0].problemSolutionListTitle}</h3>
        <ul>
          <li>{lang[0].problemSolutionBullet1}</li>
          <li>{lang[0].problemSolutionBullet2}</li>
          <li>{lang[0].problemSolutionBullet3}</li>
          <li>{lang[0].problemSolutionBullet4}</li>
          <li>{lang[0].problemSolutionBullet5}</li>
          <li>{lang[0].problemSolutionBullet6}</li>
          <li>{lang[0].problemSolutionBullet7}</li>
        </ul>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
