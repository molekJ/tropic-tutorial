import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const Booknow = () => {
  useScrollToTop();
  return (
    <>
      <Hero isDynamic>Book Now</Hero>
    </>
  );
};

export default Booknow;
