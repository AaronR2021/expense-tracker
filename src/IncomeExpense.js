import React,{useContext} from 'react';
import {globalContext} from './Context/globalState'

function IncomeExpense() {
    const {transaction}=useContext(globalContext);
    let amount=transaction.map(singleTransaction=>singleTransaction.amount);
    let income=amount.filter(amount=>amount>0).reduce((acc,income)=>(acc+=income),0)
    let expense=Math.abs(amount.filter(amount=>amount<0).reduce((acc,income)=>(acc+=income),0));

    return (
        <div className='box flexbox-row'>
           <div className='income-box'>
               <h3 className='space-none'>Income</h3>
               <p className='space-none income'>${income}</p>
           </div>
            <hr/>
            <div className='expense-box'>
            <h3 className='space-none'>expense</h3>
               <p className='space-none expense'>${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
