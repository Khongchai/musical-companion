import { Flex } from "@chakra-ui/react";
import React from "react";

interface NavbarWrapperProps {
  backgroundColor: string;
}

const NavbarWrapper: React.FC<NavbarWrapperProps> = ({
  children,
  backgroundColor,
}) => {
  return (
    <Flex
      align="center"
      p={["1rem 1rem", null, null, "1rem 5rem"]}
      justifyContent="space-between"
      bg={backgroundColor}
      width="100%"
      position="absolute"
      top="0"
      left="0"
    >
      {children}
    </Flex>
  );
};

export default NavbarWrapper;
