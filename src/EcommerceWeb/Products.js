import React from 'react';
import { useStateValue } from './StateProvider';

const Products = ({id , title , image , price}) => {

   const [state , dispatch] = useStateValue()

   function addProduct(){

      dispatch({
         type : "ADD_TO_CART",

         item:{
            id:id,
            title:title,
            image:image,
            price:price
         }
      })

   }

  return (
  <>
 <div className='d-flex align-items-center flex-column'>
 <h4>{title}</h4>
    <strong> ${price}</strong>


<div className='d-flex flex-column align-items-center'>

<img src={`/Images/${image}`} className='w-50 mt-1' alt="jacket" />

   <button onClick={addProduct} className='btn btn-warning w-auto  mt-2'>  <strong>Add Product</strong></button>
</div>
 </div>
  </>
  )
}

export default Products