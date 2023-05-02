import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menspage } from "./Pages/Menspage";
import { WomensPage } from "./Pages/Womenspage";
import { Aboutpage } from "./Pages/Aboutpage";
import { Errorpage } from "./Pages/Errorpage";
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/men" element={<Menspage />} />
        <Route path="/women" element={<WomensPage />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
