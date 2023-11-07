import React from 'react'
import { BrowserRouter,  Routes , Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Footer from './Footer'
import SignUp from './SignUp'
import Items from '../Product/Items'
import ProductData from '../Product/ProductData'

import { ToastContainer } from 'react-toastify'
import Updatecrud from '../Crud/Updatecrud'
import Crud from '../Crud/Crud'
const Main = () => {
  return (
   <>
   <ToastContainer></ToastContainer>
    <BrowserRouter>
        {/* <Header/> */}
       <Routes>
       {/* <Route path='/' element={<Home/>}/>
       <Route path='/check' element={<Checkout/>}/>
       <Route path='/signup' element={<SignUp/>}/> */}
       <Route path='/' element={<Items/>}/>
       <Route path='product/:id' element={<ProductData/>}/>
       <Route path='/crud' element={<Crud/>}/>
       <Route path='/updatecrud/:id' element={<Updatecrud/>}/>

       </Routes>
       {/* <Footer/> */}
        
    </BrowserRouter>
   </>
  )
}

export default Main