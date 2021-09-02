import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MainContainer } from "../../Elements/MainContainer";

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");
  return (
    <Box w="100%" bg={bg} color={bgFlip}>
      <MainContainer overridePadding="5rem 1rem">
        <Flex align="center" flexDir={["column", null, null, "row"]}>
          <Box flex="0.7">
            <Text>© KhongtheFork</Text>
          </Box>
          <Stack
            flex="0.3"
            mt={["2rem", null, null, "0"]}
            as={Flex}
            spacing="1rem"
          >
            <Heading fontSize="25px" fontWeight="normal" mb="0.5rem">
              {" "}
              Contact
            </Heading>
            <Text>
              <b>Email</b>
              <div>
                -{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="mailto: khongchai.musicalcompanion@gmail.com"
                >
                  Khongchai.musicalcompanion@gmail.com
                </a>
              </div>
              <div>
                -{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="mailto: world1955@hotmail.com"
                >
                  World1955@hotmail.com
                </a>
              </div>
            </Text>
            <Text>
              <b>YouTube</b>:{" "}
              <a
                style={{ textDecoration: "underline" }}
                target="_blank"
                href="https://youtube.com/alphaplz"
              >
                KhongtheFork
              </a>
            </Text>
          </Stack>
        </Flex>
      </MainContainer>
    </Box>
  );
};

export default index;
