import { act } from "react-dom/test-utils"

export default (state,action)=>{
    console.log(action,'is the action')
    console.log(state,'is the state')


    switch(action.type){
        case 'DELETE_TRANSACTION':return {
            ...state,
            transaction:state.transaction.filter(transaction => transaction.id !== action.payload)
        }
        case 'ADD_TRANSACTION':return {
            ...state,
            transaction:[...state.transaction,action.payload]
        }
        default: return state;
    }
}