import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Classes from "./components/Classes";
import InnerMiddle from "./components/InnerMiddle";
import AboutUs from "./components/AboutUs";
import MindInBalance from "./components/MindInBalance";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Classes />
      <InnerMiddle />
      <AboutUs />
      <MindInBalance />
      <Pricing />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
