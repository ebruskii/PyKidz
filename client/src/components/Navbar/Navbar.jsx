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
  useBreakpointValue
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
             <MenuItem
             as="a"
             key={sublink.title}
             href={sublink.location}
             _hover={{ bg: "rgba(255, 255, 255, 0.1)" }} // Adjust the alpha value as needed
           >
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
          link.location === "/" 
            ? "3px solid #EF6360"  // Red underline for Home button when on the home page
            : "1px solid transparent"  // Border for non-Home buttons
        }
        style={{ transition: "margin 0.2s ease-in-out",
                 background: "transparent", marginRight: "8px", }
      }
        _hover={{
          textDecoration: "none",
          borderBottom: link.location === "/" ? "3px solid #EF6360" : "1px solid #EF6360", // Adjust color as needed
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
  const location = useLocation();
  const displayNav = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <>
      <Box px={4}>
        <Flex 
          h={16} 
          alignItems={"center"} 
          justifyContent={"space-between"}
          flexWrap="wrap" //wraps to next line
          >
          <HStack spacing={8} alignItems={"center"}>
            <img style={{ width: "50%" }} src={PyKidz} alt="logo" />
          </HStack>
          
          {displayNav && (
            <Flex
              as="nav"
              justify="center"  // Center the navigation links
              align="center"
              flexWrap="wrap"
              mt={{ base: 4, md: 0 }}  // Add top margin on smaller screens
            >
              {Links.map((link) => (
                <NavLink key={link.title} link={link} />
              ))}
            </Flex>
            )}
        </Flex>
      </Box>
    </>
  );
}