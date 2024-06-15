import { useState } from 'react';
import Header from './components/Header/Header';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import './styles/_main.scss';

function App() {
  const [theme, setTheme] = useState<string>('dark');

  const handleThemeSwitchClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
      <div className={`theme ${theme}`}>
        <Header theme={theme} handleThemeSwitchClick={handleThemeSwitchClick} />
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
