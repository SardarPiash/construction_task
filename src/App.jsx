import { useRef } from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import IndustryPage from "./pages/construction/IndustryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const ref = useRef(null)
  //console.log(role);
function handleScroll(){
  console.log("click")
ref.current?.scrollIntoView({behaviour : 'smooth'})
}
  return (
    <>
      <BrowserRouter>
      <Navbar scroll={handleScroll}/>
        <Routes>
          
          <Route path="/" element={<IndustryPage scroll={handleScroll}/>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
