import Navbar from "./assets/components/navbar/navbar.jsx";
import Footer from "./assets/components/footer/footer.jsx";
import Home from "./assets/pages/home/home.jsx";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Aboutus from "./assets/pages/about-us/Aboutus.jsx";
import Apply from "./assets/pages/apply/Apply.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
