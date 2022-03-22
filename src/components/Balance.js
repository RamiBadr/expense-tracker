import React, { useContext } from 'react';
import { currencyFormatter } from '../helpers/currencyFormatter';
import { removeNegativeSign } from '../helpers/removeNegative';
import { globalContext } from '../store/GlobalContext';


const Balance = () => {
  const {transactions} = useContext(globalContext);
  const balance = transactions.reduce((totalAmount, currentTransaction) => {
    return totalAmount + currentTransaction.amount;
  }, 0);

  console.log(balance);
  
  return (
    <div>
        <h3>Balance</h3>
        <h1>{balance > 0? `E£ ${removeNegativeSign(currencyFormatter(balance))}` : 'E£ 0'}</h1>
    </div>
  )
}

export default Balance