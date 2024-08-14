import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import IndustryPage from "./pages/construction/IndustryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          
          <Route path="/" element={<IndustryPage />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
