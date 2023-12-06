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
  Stack
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import PyKidz from "../../assets/pykidz.svg";
import { useLocation } from "react-router-dom";

const Links = [
  { title: "Home", location: "/" },
  { title: "Lessons", 
    sublinks: [
      {title: "Lesson 1", location: "/lesson1"},
      {title: "Lesson 2", location: "/lesson2" }
    ] },
];
const NavLink = ({ link }) => {
  const location = useLocation();
  if (link.sublinks) {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {link.title}
        </MenuButton>
        <MenuList>
          {link.sublinks.map((sublink) => (
            <MenuItem as="a" key={sublink.title} href={sublink.location}>
              {sublink.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  } else {
    return (
      <Button
        as="a"
        px={2}
        py={1}
        color={location.pathname === link.location ? "#EF6360" : "black"}
        fontWeight={500}
        fontSize={"lg"}
        borderBottom={
          location.pathname === link.location ? "3px solid" : "0px"
        }
        style={{ transition: "margin 0.2s ease-in-out",
                 background: "transparent", }
      }
        _hover={{
          textDecoration: "none",
          marginTop: -2,
        }}
        href={link.location}
      >
        {link.title}
      </Button>
    );
  }
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
              <NavLink key={link.title} link={link} />
            ))}
          </HStack>
        </Flex>
      </Box>
    </>
  );
}