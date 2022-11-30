import React from 'react';
import { CartContextProvider } from "./context/cartContext";
import {Layout} from "./components/Layout";
import './App.css';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <CartContextProvider>
      <Layout>
        <ItemListContainer/>
      </Layout>
    </CartContextProvider>
  );
}

export default App;
