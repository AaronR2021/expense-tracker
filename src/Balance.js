import React,{useContext} from 'react';
import {globalContext} from './Context/globalState'


function Balance() {
    const {transaction}=useContext(globalContext);
    let amount=transaction.map(singleTransaction=>singleTransaction.amount);
    let total=amount.reduce((acc,amount)=>(acc+=amount),0)
    
    return (
        <div className='balance_component'>
           <h3 className='space-none balance'>YOUR BALANCE</h3>
           <h1 className='space-none'> ${total}</h1>
        </div>
    )
}
export default Balance;