import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { Text } from "../../types/text";
import { Cart } from "../Cart";
import SearchBox from "../Shared/SearchBox";
import AccompanimentCards from "./AccompanimentCards";

interface AccompanimentSectionProps extends Text {}

const AccompanimentSection: React.FC<AccompanimentSectionProps> = ({
  textSize: _,
}) => {
  const [page, setPage] = useState(1);

  const [searchVal, setSearchVal] = useState("");
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
          fontSize={["26px", null, null, "36px"]}
          fontWeight="normal"
        >
          Accompaniment
        </Heading>
        <Flex
          margin={["0 auto", null, null, "0 0 0 auto"]}
          align="center"
          pr="2rem"
        >
          <SearchBox setPage={setPage} setSearchVal={setSearchVal} />
          <Cart flipColorMode />
        </Flex>
      </Flex>
      <AccompanimentCards page={page} setPage={setPage} searchVal={searchVal} />
    </Box>
  );
};

export default AccompanimentSection;
