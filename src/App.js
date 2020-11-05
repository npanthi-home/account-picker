import { useContext } from 'react';
import './App.scss';
import AccountPicker from './component/AccountPicker';
import { ThemeContext } from './context/theme/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
      <div className={`app ${theme}`}>
        <AccountPicker />
      </div>
  );
}

export default App;
