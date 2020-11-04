import './App.css';
import AccountPicker from './component/AccountPicker';
import useAccountFetcher from './hooks/useAccountFetcher';


function App() {
  const { fetchAccounts } = useAccountFetcher();

  return (
    <AccountPicker accounts={fetchAccounts('abc')} />
  );
}

export default App;
