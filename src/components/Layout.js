import React from "react";

import Header from "./header";
import Navbar from "./NavBar";
import Footer from "./footer";



export const Layout = ({ children }) => {
  return (
    <main className="layout">
      <div className="containMenus">
        <Header />
        <Navbar />
      </div>
        {children}
      <Footer />
    </main>
  );
};