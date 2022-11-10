import React from 'react';
import './App.css';
import Header from './components/header';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Body from './components/body';
import Footer from './components/footer';


function App() {

  return (
    <div className="App">
      <main>
        <Header />
        <NavBar />
        <ItemListContainer greeting={"Best shoes in the world"}/>
        <Body />
        <Footer />
      </main>
    </div>
  );
}

export default App;
