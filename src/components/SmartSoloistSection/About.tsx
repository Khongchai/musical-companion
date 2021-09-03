import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Stack spacing="1rem" fontSize="1.25rem" flex="0.7">
      <Text>
        As convenient as my orchestral tracks are, I must admit, they do not
        even come close, in many occasions, to real musicians.
      </Text>
      <Text>
        I would like to take this opportunity to recommend to you{" "}
        <i>SmartSoloist</i>. Their proprietary software allows you to adjust the
        tempo to your likings, giving you more control over your own playing.
      </Text>
      <Text>
        Their software is not free, but it's more than worth it if you are
        looking for more immersive practicing sessions.
      </Text>
      <Text>Click the image below for more information.</Text>
    </Stack>
  );
}
