import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Img from "next/image";
import React from "react";

interface BeforeYouProceedProps {
  textSize: (string | null)[];
  headerSize: (string | null)[];
}

export const BeforeYouProceed: React.FC<BeforeYouProceedProps> = ({
  textSize,
  headerSize,
}) => {
  return (
    <Box>
      <Heading textAlign="left" fontSize={headerSize} fontWeight="normal">
        Before You Proceed
      </Heading>
      <Flex
        flexDir={["column", null, null, "row"]}
        align={["center", null, null, "unset"]}
      >
        <Stack spacing="1rem" flex="1" fontSize={textSize}>
          <Text mt="1.2rem">
            I understand that some of you might be students and are not in the
            financial position to purchase some of these tracks.
          </Text>
          <Text>
            If you fall into that category, I encourage you to create a student
            account, which will grant you access to all tracks on this site for
            free.
          </Text>
          <Text>
            I have no way of proving the identities of all student accounts so
            please, if you can, support me by buying the tracks.
          </Text>
          <Text>
            If you find yourself in a financially difficult position, you may
            also sign up for the student account guilt-free!
          </Text>
        </Stack>
        <Box
          w="min(50vw, 400px)"
          h="min(50vw, 400px)"
          mt={["1rem", null, null, "0"]}
          position="relative"
        >
          <Img layout="fill" src="/banner.png" alt="banner-img" />
        </Box>
      </Flex>
    </Box>
  );
};
