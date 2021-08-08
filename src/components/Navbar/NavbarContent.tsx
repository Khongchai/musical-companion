import { Flex } from "@chakra-ui/react";
import React from "react";

export const NavbarContent: React.FC = ({ children }) => {
  return (
    <Flex
      css={{ "> *": { marginLeft: "inherit" } }}
      display={["none", null, null, "flex"]}
      align="center"
    >
      {children}
    </Flex>
  );
};
