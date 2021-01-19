import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

export default function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
}
