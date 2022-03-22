import React, { useContext } from 'react'
import { currencyFormatter } from '../helpers/currencyFormatter';
import { removeNegativeSign } from '../helpers/removeNegative';
import { globalContext } from '../store/GlobalContext'

const IncomeExpense = () => {
  const {transactions} = useContext(globalContext);
  const amounts = transactions.map((transaction) => transaction.amount)
  const income = amounts
                .filter((amount) => amount > 0 )
                .reduce((total, amount) => {
                  return total + amount;
                }, 0);
  
  const expense = amounts
                .filter((amount) => amount < 0 )
                .reduce((total, amount) => {
                  return total + amount;
                }, 0);

  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className='money plus'>+ E£ {currencyFormatter(income)}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>- E£ {removeNegativeSign(currencyFormatter(expense))}</p>
        </div>
    </div>
  )
}

export default IncomeExpense