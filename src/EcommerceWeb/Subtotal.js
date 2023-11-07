import React from 'react'
import { useStateValue } from './StateProvider';
import { total } from './Reducer';




const Subtotal = () => {
    const [{basket} , dispatch] = useStateValue()
  return (
   <>
    <p>Subtotal ({basket.length} items) : <strong>${total(basket)} </strong> </p>
    <input type="checkbox" /> this order contains a gift  
    <button className='btn btn-warning rounded-0 w-100 mt-2'>Proceed to checkout</button>
   </>
  )
}

export default Subtotal