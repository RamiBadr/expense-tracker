import React, { useContext } from 'react'
import Transaction from './Transaction'
import { globalContext } from '../store/GlobalContext'

const TransactionList = () => {
  const {transactions} = useContext(globalContext);
  return (
    <div>
        <h3>History</h3>
        <ul className='list'>
        {transactions.map((transaction) => {
            return (
              <Transaction 
              id={transaction.id}
              label={transaction.label} 
              amount={transaction.amount}
              key={transaction.id}
              />
            )
        })}
        </ul>
    </div>
  )
}

export default TransactionList