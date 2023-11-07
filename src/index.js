import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './EcommerceWeb/Main';
import Reducer ,  { initialState } from './EcommerceWeb/Reducer';
import { StateProvider } from './EcommerceWeb/StateProvider';
import Crud from './Crud/CrudwithLocal';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

   {/* <Main/> */}

<Crud/>

    {/* <StateProvider initialState={initialState} reducer={Reducer}>
   </StateProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
