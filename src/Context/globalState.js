import React,{createContext,useReducer} from 'react';
import AppReducer from './appReducer.js';

//initial State
const initialState={
    transaction:[
        {id:1,text:"flowers",amount:-20},
        {id:2,text:"salary",amount:150}
    ]
}

//create context> exported because this is whats used to access transaction value in children component
export const globalContext=createContext(initialState);
//reducer is imported from AppReducer.

//provider Component
export const GlobalProvider=({children})=>{
    //children are the components between <GlobalProvider></GlobalProvider>
    const [state,dispatch]=useReducer(AppReducer,initialState);

    //function to be available to all children
        function deleteTransaction(id){
            dispatch({
                type:'DELETE_TRANSACTION',
                payload:id
            })
        }
        function addTransaction(transaction){
            dispatch({
                type:'ADD_TRANSACTION',
                payload:transaction
            })
        }
    return (
        <globalContext.Provider value={
            {
                transaction:state.transaction,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </globalContext.Provider>
    );
}



export default globalContext
