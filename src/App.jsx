import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./components/sections/Project";
import HomePage from "./Pages/HomePage";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)]">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/project"
              element={
                <div className="mt-[84px]">
                  <Project />
                </div>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
