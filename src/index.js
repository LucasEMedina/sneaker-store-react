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
  apiKey: "AIzaSyCZakFPT1IbRi1nlwJh_bwlPdj9LKF7s8I",
  authDomain: "sneaker-store-5d2f5.firebaseapp.com",
  projectId: "sneaker-store-5d2f5",
  storageBucket: "sneaker-store-5d2f5.appspot.com",
  messagingSenderId: "513929947634",
  appId: "1:513929947634:web:b4b4e0e166906bc07e236b"
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
