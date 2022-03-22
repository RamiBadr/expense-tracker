import React, { useReducer } from 'react';
import { globalContext, initTransactions } from './GlobalContext';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD': 
          console.log([...state, action.transaction]);
          return [...state, action.transaction]
        case 'REMOVE':
          const newState = state.filter(transaction => {
            return transaction.id !== action.id;
          })
          return [...newState]
        default:
            return state;
    }
}

const GlobalStore = ({children}) => {
  const add = (type = 'ADD', transaction) => {
    dispatch({
        type: 'ADD', 
        transaction
      })
  }

  const remove = (removeObj) => {
    dispatch(removeObj);
  } 
  const [transactions, dispatch] = useReducer(reducer, initTransactions);
  return (
    <globalContext.Provider value={{transactions, remove, add}}>
        {children}
    </globalContext.Provider>
  )
}

export default GlobalStore