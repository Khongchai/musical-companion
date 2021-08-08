import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import { Text } from "../../types/text";
import { Cart } from "../Cart";
import AccompanimentCards from "./AccompanimentCart";

interface AccompanimentSectionProps extends Text {}

const AccompanimentSection: React.FC<AccompanimentSectionProps> = ({
  headerSize,
  textSize: _,
}) => {
  return (
    <Box width="100%" overflowX="hidden">
      <Flex
        flexDirection={["column", null, null, "row"]}
        align="center"
        mb="2rem"
        p="0.25rem 0"
      >
        <Heading
          mb={["1rem", null, null, "0"]}
          fontSize={headerSize}
          fontWeight="normal"
        >
          Accompaniment
        </Heading>
        <Flex
          margin={["0 auto", null, null, "0 0 0 auto"]}
          align="center"
          pr="2rem"
        >
          <InputGroup w="min(300px, 100%)" mr={["1rem", null, null, "2rem"]}>
            <Input placeholder="Search" />
            <InputRightAddon children={<SearchIcon />} pointerEvents="none" />
          </InputGroup>
          <Cart flipColorMode />
        </Flex>
      </Flex>
      <AccompanimentCards />
    </Box>
  );
};

export default AccompanimentSection;
