import Navbar from "./assets/components/navbar/navbar.jsx";
import Footer from "./assets/components/footer/footer.jsx";
import Home from "./assets/pages/home/home.jsx";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Aboutus from "./assets/pages/about-us/Aboutus.jsx";
import Apply from "./assets/pages/apply/Apply.jsx"
import{auth} from './firebaseConfig.js';
import {onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is signed in");
        setUser(user);
      } else {
        console.log("user is signed out");
        setUser(null);
      }
    });
  },[]);
  return (
    <div>
      <Navbar user={user} />
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
