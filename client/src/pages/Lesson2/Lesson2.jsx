// Lesson2.jsx
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  Heading,
  Text,
  Stack,
  Container,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";

const Lesson2 = () => {
  return (
    <>
       <div style={{ zIndex: -2, backgroundColor: "#FAE6B4", paddingBottom: 50 }}>
        <Navbar />
        <Heading
          style={{ textAlign: "center", marginTop: 50, marginBottom: 5 }}
          size="3xl"
        >
          Lesson 2
        </Heading>
        <Heading style={{ textAlign: "center" }} color="#EF6360">
          Basic Data Types
        </Heading>
       
      </div>
    </>
  );
};

export default Lesson2;
