import { useContext } from 'react';
import { LanguageContext } from '../../App';

const SubHeader = () => {
  const lang = useContext(LanguageContext);

  return (
    <section className='subheaderSection'>
      <div className='subheaderTitle'>
        <h1>{lang[0].subheaderTitle}</h1>
        <p>{lang[0].subheaderParagraph}</p>
        <button className='contactmeButton'>{lang[0].contactmeButton}</button>
      </div>
      <img
        src='public\assets\joyfullWithComputer.jpg'
        alt='Happy customer image'
        className='subheaderImage'
      />
    </section>
  );
};

export default SubHeader;
