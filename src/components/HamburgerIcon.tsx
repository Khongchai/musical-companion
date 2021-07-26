import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface HamburgerIconProps {
  onClickFunction: () => void;
}

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  onClickFunction,
}) => {
  const color = useColorModeValue("white", "black");
  return (
    <Flex
      flexDir="column"
      cursor="pointer"
      justifyContent="space-between"
      w="30px"
      h="20px"
      onClick={() => onClickFunction()}
    >
      <Box flex="0.15" bg={color} />
      <Box flex="0.15" bg={color} />
      <Box flex="0.15" bg={color} />
    </Flex>
  );
};
