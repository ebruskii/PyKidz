//Landinf.jsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Cards from "../../components/Cards/Cards";
import { Text } from "@chakra-ui/react";

const Landing = () => {
  return (
    <>
      <div style={{ zIndex: -2, backgroundColor: "#FAE6B4" }}>
        <Navbar />
        <Hero />
      </div>
      <div>
        <Text
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          fontWeight={600}
          style={{ textAlign: "center", marginTop: "5vh", marginBottom: "5vh" }}
        >
          How it Works
        </Text>
        <Cards />
      </div>
    </>
  );
};

export default Landing;
