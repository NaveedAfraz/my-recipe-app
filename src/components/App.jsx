import React, { useState } from "react";
import lightStyles from './lightStyles.module.css'; // Light theme
import darkStyles from './darkStyles.module.css'; // Dark theme
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar";
import { Home } from "../pages/Home";
import { Favourites } from "../pages/Favourites";
import { Details } from "../pages/Details";
import Globalcontext from "../context/context";

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Router>
      <Globalcontext>
        <div className={isDarkMode ? darkStyles.container : lightStyles.container}>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
          </Routes>
        </div>
      </Globalcontext>
    </Router>
  );
}
