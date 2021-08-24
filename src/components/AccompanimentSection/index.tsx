import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Text } from "../../types/text";
import setActionWithDelay from "../../utils/setActionWithDelay";
import { Cart } from "../Cart";
import AccompanimentCards from "./AccompanimentCards";

interface AccompanimentSectionProps extends Text {}

const AccompanimentSection: React.FC<AccompanimentSectionProps> = ({
  headerSize,
  textSize: _,
}) => {
  const [page, setPage] = useState(1);

  const [searchVal, setSearchVal] = useState("");
  const inputRef = useRef(null);
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
          fontSize={("26px", null, null, headerSize)}
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
            <Input
              placeholder="Search"
              onChange={(e) => {
                setPage(1);
                setActionWithDelay(() => setSearchVal(e.target.value), 0.3);
              }}
              ref={inputRef}
            />
            <InputRightAddon
              cursor="pointer"
              onClick={() => {
                inputRef.current &&
                  (inputRef.current as unknown as HTMLElement).focus();
              }}
              children={<SearchIcon />}
            />
          </InputGroup>
          <Cart flipColorMode />
        </Flex>
      </Flex>
      <AccompanimentCards page={page} setPage={setPage} searchVal={searchVal} />
    </Box>
  );
};

export default AccompanimentSection;
