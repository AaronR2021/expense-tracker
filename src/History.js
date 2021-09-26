import React,{useContext} from 'react'
import {globalContext} from './Context/globalState'

function History() {
    const {transaction}=useContext(globalContext);
    const {deleteTransaction}=useContext(globalContext)
    return (
       <>
       <h2 className='space-none history'>History</h2>
       
        <ul className='list space-none'>
            {
                transaction.map(transaction=><Transaction key={transaction.id} transaction={transaction}/>)
            }
        </ul>
       </>
    )
}

export default History

function Transaction({transaction}) {
    const {deleteTransaction}=useContext(globalContext)
    return (
        <div>
            <li className={transaction.amount>0?'plus li-list':'minus li-list'} >
                {transaction.text}
                <span> {transaction.amount}</span>
                <button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>x</button>
                {
                console.log(transaction,'transaction..')
                }
            </li>
          
        </div>
    )
}

