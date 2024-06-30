import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

type HeaderProps = {
  theme?: string;
  handleThemeSwitchClick: () => void;
  lang?: string;
  handleLangSwitchClick: () => void;
};

const Header = ({ theme, handleThemeSwitchClick, lang, handleLangSwitchClick }: HeaderProps) => {
  return (
    <header className={`${theme}`}>
      <div className='headerLogo'>
        <img
          src={theme === 'light' ? 'assets\\LogoMSzuran.png' : 'assets\\LogoMSzuranLight.png'}
          alt='logo'
          className={`navimage ${theme}`}
        />
        <div className='logoName'>
          <p className='websiteTitle'>Marta</p>
          <p className='websiteTitle'>Szuran</p>
        </div>
      </div>
      <div className='switchesContainer'>
        <div className='switchContainer'>
          <input type='checkbox' id='language-toggle' className={`${theme}`} />
          <label
            htmlFor='language-toggle'
            className={`${theme}-reverse`}
            onClick={() => handleLangSwitchClick()}
          >
            {lang === 'pl' ? (
              <span className='plLang'>Pl</span>
            ) : (
              <span className='enLang'>En</span>
            )}
          </label>
        </div>
        <div className='switchContainer'>
          <input type='checkbox' id='darkmode-toggle' className={`${theme}`} />
          <label
            htmlFor='darkmode-toggle'
            className={`${theme}-reverse`}
            onClick={() => handleThemeSwitchClick()}
          >
            {theme === 'dark' ? (
              <BedtimeIcon
                sx={{
                  fontSize: '15px',
                  position: 'absolute',
                  left: '16px',
                  zIndex: '9',
                  color: '#656565',
                  top: '0.5px',
                }}
              />
            ) : (
              <WbSunnyIcon
                sx={{
                  fontSize: '15px',
                  position: 'absolute',
                  zIndex: '9',
                  color: '#656565',
                  top: '0.5px',
                }}
              />
            )}
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
