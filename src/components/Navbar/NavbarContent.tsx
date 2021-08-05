import {
  Box,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Cart } from "../Cart";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { TextLink } from "./TextLink";
import { useMeQuery } from "../../generated/graphql";

interface NavbarContentProps {}

export const NavbarContent: React.FC<NavbarContentProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");

  const { data } = useMeQuery();

  return (
    <>
      <Box mr={["1rem", null, null, "0"]}>
        <Cart />
      </Box>
      {data?.me ? (
        <TextLink text="login" href="/logout" color={bgFlip} />
      ) : (
        <>
          <TextLink text="register" href="/register" color={bgFlip} />
          <TextLink text="logout" href="/logout" color={bgFlip} />
        </>
      )}

      <Button onClick={toggleColorMode} bg={bg} color={bgFlip}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
};
