import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

type HeaderProps = {
  theme?: string;
  handleThemeSwitchClick: () => void;
};

const Header = ({ theme = 'dark', handleThemeSwitchClick }: HeaderProps) => {
  return (
    <header className={`${theme}-reverse`}>
      <img
        src={theme === 'dark' ? 'assets\\LogoMSzuran.png' : 'assets\\LogoMSzuranLight.png'}
        alt='logo'
        className={`navimage ${theme}-reverse`}
      />
      <nav>my nav</nav>
      <div className='switchContainer'>
        <input type='checkbox' id='darkmode-toggle' className={`${theme}`} />
        <label
          htmlFor='darkmode-toggle'
          className={`${theme}`}
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
    </header>
  );
};

export default Header;
