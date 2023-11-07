import React from 'react';
import { useStateValue } from './StateProvider';

const CheckOutProduct = ({id , title,image, price}) => {

  const [{basket} , dispatch] = useStateValue()

  const handleDelete =()=>{
    
    dispatch({
      type:"REMOVE_FROM_CART",
      id:id
    })
  }

  return (
  <>
  <div className='d-flex mb-3'>
    <div style={{width:"200"}}>
        <img src={`Images/${image}`} className='w-100 h-75'  alt="image" />
    </div>
    <div className='ms-4 d-flex flex-column mt-4'>
        <h4>{title}</h4>
        <span><strong>${price}</strong></span> 
        <button className='btn btn-warning w-auto' onClick={handleDelete}>Remove from Cart</button>
    </div>
    </div>
  </>
  )
}

export default CheckOutProduct