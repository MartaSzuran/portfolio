import { useContext } from 'react';
import { LanguageContext } from '../../App';
import { ThemeContext } from '../../App';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const BenefitsSection = () => {
  const lang = useContext(LanguageContext);
  const theme = useContext(ThemeContext);

  return (
    <section className={`benefitscontainer ${theme}`}>
      <div className='benefitsItem'>
        <CheckRoundedIcon sx={{ color: '#59dd59', fontSize: '25px' }} />
        <p>{lang[0].benefitClient}</p>
      </div>
      <div className='benefitsItem'>
        <CheckRoundedIcon sx={{ color: '#59dd59', fontSize: '25px' }} />
        <p>{lang[0].benefitBusinessCard}</p>
      </div>
      <div className='benefitsItem'>
        <CheckRoundedIcon sx={{ color: '#59dd59', fontSize: '25px' }} />
        <p>{lang[0].benefitTimesaver}</p>
      </div>
    </section>
  );
};

export default BenefitsSection;
