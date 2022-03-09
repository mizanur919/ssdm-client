import "./App.css";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "../src/Pages/Home/Home";
import FHPayroll from "./Pages/FHPayroll/FHPayroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import SoftwareInstallResources from "./Pages/SoftwareInstallResources/SoftwareInstallResources";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fhpayroll" element={<FHPayroll />}></Route>
          <Route
            path="/softwareInstallResources"
            element={<SoftwareInstallResources />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
