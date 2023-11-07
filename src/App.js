import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './Travel Agency/Login'
import Reg from './Travel Agency/Reg'
import Header from './Travel Agency/Header';
import Vehicle from './Travel Agency/Vehicle';
import Dashboard from './Travel Agency/Dashboard';
import VehicleList from './Travel Agency/VehicleList';
import Update from './Travel Agency/Update';
import UserPage from './Travel Agency/UserPage';
import List from './Travel Agency/List';



const App = () => {
  return (
    <>
    <ToastContainer>
    <BrowserRouter>
    <Header/>
      <Routes>
  <Route path='/reg' element={<Reg/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/vehicle' element={<Vehicle/>}/>
      <Route path='/main' element={<Dashboard/>}/>
      <Route path='/vehiclelist' element={<VehicleList/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/user' element={<UserPage/>}/>
      <Route path='/list' element={<List/>}/>
     

      </Routes>
     
    </BrowserRouter>
    </ToastContainer>

    </>
  )
}

export default App