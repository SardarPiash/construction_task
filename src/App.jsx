import { useRef, useContext, useState } from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import IndustryPage from "./pages/construction/IndustryPage";
import About from "./pages/about/About";
import Employers from "./pages/employers/Employers";
import FindWorkers from "./pages/findWorkers/FindWorkers";
import Resources from "./pages/resources/Resources";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { smoothScroller } from "./contex/SmoothScrollerContex";

export default function App() {
  const ref = useRef(null);
  function handleScroll() {
    console.log("click");
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  }

  return (
    <>
      <BrowserRouter>
          <Navbar scroll={handleScroll} />
          <Routes>
            <Route path="/" element={<IndustryPage scrollFunction={handleScroll} ref={ref}/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Employers" element={<Employers />} />
            <Route path="/FindWorkers" element={<FindWorkers />} />
            <Route path="/Resources" element={<Resources />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}
