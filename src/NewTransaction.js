import React, {useState, useContext} from 'react'
import { globalContext } from './Context/globalState';

function NewTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(globalContext);
 
    const onSubmit=()=>{
       const newTransaction={
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
          }
          addTransaction(newTransaction);
       }

     return (
        <div className='newTransaction'>
            <h3>Add New Transaction</h3>
            <from>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income) </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn-submit" onClick={onSubmit}>Add transaction</button>
            </from>
        </div>
    )
}

export default NewTransaction
