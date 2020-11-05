import { useContext } from 'react';
import './App.scss';
import AccountPicker from './component/AccountPicker';
import useAccountFetcher from './hooks/useAccountFetcher';
import { ThemeContext } from './context/theme/ThemeContext';

function App() {
  const { fetchAccounts } = useAccountFetcher();
  const { theme } = useContext(ThemeContext);

  return (
      <div className={`app ${theme}`}>
        <AccountPicker accounts={fetchAccounts('abc')} />
      </div>
  );
}

export default App;
