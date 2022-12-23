import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CartContextProvider } from './context/cartContext'

import {router} from "./router";
import {RouterProvider} from "react-router-dom"

import reportWebVitals from './reportWebVitals';

//Librerias
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROYECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router}/>      
    </CartContextProvider>
  </React.StrictMode>
);


reportWebVitals();
