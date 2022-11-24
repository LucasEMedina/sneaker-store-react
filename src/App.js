import React from 'react';
import {Layout} from "./components/Layout";
import './App.css';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
      <Layout>
        <ItemListContainer/>
      </Layout>      
  );
}

export default App;
