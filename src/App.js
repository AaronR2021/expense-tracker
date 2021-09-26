import './App.css';
import {GlobalProvider} from './Context/globalState';
import Title from './title.js';
import Balance from './Balance.js';
import IncomeExpense from './IncomeExpense.js';
import History from './History.js';
import NewTransaction from './NewTransaction.js';

function App() {
  return (
      <div className='outer_boder'>
            <div className='center-grid' >
      <GlobalProvider>
            <Title/>
            <Balance/>
            <IncomeExpense/>
            <History/>
            <NewTransaction/>
        </GlobalProvider>
    </div>
      </div>
  );
}

export default App;
