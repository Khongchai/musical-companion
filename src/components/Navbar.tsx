import {
  Box,
  Button,
  Flex,
  useColorMode,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { Cart } from "./Cart";
import Link from "next/link";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#6D6D6D", "white");
  const bgFlip = useColorModeValue("white", "#6D6D6D");

  return (
    <Flex
      align="center"
      p={["1rem 1rem", null, null, "1rem 5rem"]}
      justifyContent="space-between"
      bg={bg}
    >
      <Link href="/">
        <Flex cursor="pointer">
          <Image
            alt="khong-icon"
            src="/khong-icon.png"
            width="60px"
            height="60px"
          />
        </Flex>
      </Link>
      <Flex align="center" css={{ "> *": { marginLeft: "1.565rem" } }}>
        <Box mr={["1rem", null, null, "0"]}>
          <Cart />
        </Box>
        <Flex
          css={{ "> *": { marginLeft: "inherit" } }}
          display={["none", null, null, "flex"]}
          align="center"
        >
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
          <Button onClick={toggleColorMode} bg={bgFlip} color={bg}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
