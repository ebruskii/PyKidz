"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import PyKidz from "../../assets/pykidz.svg";
import { useLocation } from "react-router-dom";

const Links = [
  { title: "Home", location: "/" },
  { title: "Lessons", location: "/lessons" },
];

const NavLink = (props) => {
  const { children } = props;
  const location = useLocation();
  return (
    <Box
      as="a"
      px={2}
      py={1}
      color={location.pathname === children.location ? "#EF6360" : "black"}
      fontWeight={500}
      fontSize={"lg"}
      borderBottom={
        location.pathname === children.location ? "3px solid" : "0px"
      }
      style={{ transition: "margin 0.2s ease-in-out" }}
      _hover={{
        textDecoration: "none",
        marginTop: -2,
      }}
      href={children.location}
    >
      {children.title}
    </Box>
  );
};

export default function Navbar() {
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <img style={{ width: "50%" }} src={PyKidz} alt="logo" />
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
