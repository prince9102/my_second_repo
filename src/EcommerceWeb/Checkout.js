import React from 'react'
import CheckOutProduct from './CheckOutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'

const Checkout = () => {
const [{basket} , dispatch] = useStateValue()

  return (
<>
<div className='container-fluid'>
    <div className='row mt-3 min-vh-100'>
        <div className='col-9'>
            <img src="/Images/checkout.jpg" className='w-100' style={{height:"300px"}} alt="img" />
            <h2>Your Shopping Cart</h2>

            {basket.map((item)=>{
              return (

            <CheckOutProduct

            id = {item.id}
            title ={item.title}
            image={item.image}
            price={item.price}

            />
              )
            })}
           
        </div>
        <div className='col-3'>
         <Subtotal/>
        </div>
    </div>
</div>

</>
  )
}

export default Checkout