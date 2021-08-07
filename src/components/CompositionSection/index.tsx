import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface indexProps {}

const CompositionSection: React.FC<indexProps> = ({}) => {
  return (
    <Flex
      as={Stack}
      spacing="5rem"
      align="center"
      flexDir="column"
      m="10rem 0 10rem 0"
    >
      <Box textAlign="center">
        <Heading fontWeight="normal" mb="1rem" fontSize="36px">
          Check out my compositions, if you have time
        </Heading>
        <Heading fontSize="24px" fontWeight="normal">
          Now available through major streaming services
        </Heading>
      </Box>
      <Text>Logos shit</Text>
    </Flex>
  );
};

export default CompositionSection;
