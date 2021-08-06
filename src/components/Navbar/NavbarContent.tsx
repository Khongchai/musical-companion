import {
  Box,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Cart } from "../Cart";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { TextLink } from "./TextLink";
import { useMeQuery } from "../../generated/graphql";
import logout from "../../utils/authentication/logout";

export const NavbarContent: React.FC = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");

  const { data } = useMeQuery();
  useEffect(() => {
    setIsLoggedIn(!!data?.me);
  }, [data?.me]);

  return (
    <>
      <Box mr={["1rem", null, null, "0"]}>
        <Cart />
      </Box>
      {!isLoggedIn ? (
        <>
          <TextLink text="register" href="/register" color={bgFlip} />
          <TextLink text="login" color={bgFlip} href="/login" />
        </>
      ) : (
        <>
          <Text color={bgFlip}>
            Logged in as: {data?.me ? data.me.username : ""}
          </Text>
          <TextLink
            text="logout"
            color={bgFlip}
            onClickFunction={() => logout()}
          />
        </>
      )}

      <Button onClick={toggleColorMode} bg={bg} color={bgFlip}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
};
