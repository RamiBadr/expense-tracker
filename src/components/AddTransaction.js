import React, { useContext, useState } from 'react'
import { globalContext } from '../store/GlobalContext'

const AddTransaction = () => {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState(0);
  const {add} = useContext(globalContext);

  const addHandler = (e) => {
    e.preventDefault();
    if(/[a-z0-9]/ig.test(label) && amount !== 0) {
      const type = 'ADD';
      const transaction = {
          id: Math.floor(Math.random() * 10000).toString(),
          label,
          amount: +amount
      }

      setLabel('');
      setAmount(0);

      add(type, transaction)
      }
  }
  return (
    <>
        <h3>Add New Transaction</h3>
        <form onSubmit={addHandler}>
            <div className='form-control'>
                <label htmlFor='label'>Label</label>
                <input 
                type='text' 
                id='label' 
                placeholder='Enter Label...'
                onChange={e => setLabel(e.target.value)}
                value={label}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>
                    (<b>-</b>/<b>+</b>)Amount &nbsp; &nbsp; 
                    [-expense, +income]
                </label>
                <input 
                type='number' 
                id='amount' 
                placeholder='Enter Amount...' 
                onChange={e => setAmount(e.target.value)}
                value={amount}
                />
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction