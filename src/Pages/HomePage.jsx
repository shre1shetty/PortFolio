import React, { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { useLocation, useNavigate } from "react-router-dom";
const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const scrollTo = location.state?.scrollTo;

    if (scrollTo) {
      const el = document.querySelector(scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });

      // 🔥 clear state after scroll
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
