import { Flex } from "@chakra-ui/react";
import React from "react";

interface NavbarRightProps {}

export const NavbarRight: React.FC<NavbarRightProps> = ({ children }) => {
  return (
    <Flex align="center" css={{ "> *": { marginLeft: "1.565rem" } }}>
      {children}
    </Flex>
  );
};
