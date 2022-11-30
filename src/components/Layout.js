import React from "react";

import Header from "./header"
import Navbar from "./NavBar";
import Footer from "./footer"

export const Layout = ({ children }) => {
  return (
    <main className="flex flex-col">
        <Header />
        <Navbar />
        {children}
        <Footer />
    </main>
  );
};