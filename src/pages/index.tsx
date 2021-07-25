import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Box maxWidth="1400px" ml="auto" mr="auto" p="1rem">
      <Stack spacing="1rem" m="4rem 0" w="100%">
        <Heading textAlign="center" size="3xl" fontWeight="normal">
          Welcome to My Store!
        </Heading>
        <Text textAlign="center" fontSize="20px">
          This is where you can purchase my accompaniment tracks in flac/wav, or
          midi.
        </Text>
        <Text textAlign="center" fontSize="20px">
          Caution: if you make your purchase without creating an account, your
          purchase history will not be saved and you will not be able to
          redownload your files if they are lost. Should that happen, contact me
          at world1955@hotmail.com along with all the evidence of the
          purchase(s).
        </Text>
      </Stack>
    </Box>
  );
}
