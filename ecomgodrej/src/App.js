import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Menspage } from "./Pages/Menspage";
import { WomensPage } from "./Pages/Womenspage";
import { Aboutpage } from "./Pages/Aboutpage";
import { Errorpage } from "./Pages/Errorpage";
import { Cartpage } from "./Pages/Cartpage";
import { Footerpage } from "./Pages/Footerpage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/men" element={<Menspage />} />
        <Route path="/women" element={<WomensPage />} />
        <Route path="/cart" element={<Cartpage/>} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
      <Footerpage/>
    </>
  );
}

export default App;
