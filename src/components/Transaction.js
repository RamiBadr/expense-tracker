import React, { useContext } from 'react';
import { addSign } from '../helpers/addSign';
import { currencyFormatter } from '../helpers/currencyFormatter';
import { removeNegativeSign } from '../helpers/removeNegative';
import { globalContext } from '../store/GlobalContext';


const Transaction = ({id, label, amount}) => {
     const itemClass = amount > 0? "plus" : "minus";
     const {remove} = useContext(globalContext);
     
     const removeHandler = (e) => {
         e.preventDefault();
         remove({type: 'REMOVE', id: id});
     }
  return (
    <> 
                <li className={itemClass}>
                    {label}
                    <span>
                        {addSign(amount)} E£ {removeNegativeSign(currencyFormatter(amount))}
                    </span>
                    <button className='delete-btn' onClick={removeHandler}>x</button>
                </li>
    </>
  )
}

export default Transaction