import {
  Box,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Cart } from "../Cart";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

interface NavbarContentProps {}

export const NavbarContent: React.FC<NavbarContentProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("navbarGrey", "white");
  const bgFlip = useColorModeValue("white", "navbarGrey");

  return (
    <>
      <Box mr={["1rem", null, null, "0"]}>
        <Cart />
      </Box>
      <Link href="/login">
        <Text
          cursor="pointer"
          fontWeight="normal"
          fontSize="14px"
          color={bgFlip}
          size="md"
        >
          LOG IN
        </Text>
      </Link>
      <Link href="/logout">
        <Text
          cursor="pointer"
          fontWeight="normal"
          fontSize="14px"
          color={bgFlip}
          size="md"
        >
          LOG OUT
        </Text>
      </Link>
      <Button onClick={toggleColorMode} bg={bg} color={bgFlip}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
};
