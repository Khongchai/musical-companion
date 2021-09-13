import { Stack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Text as TextType } from "../types/text";

interface WelcomeSectionProps extends TextType {}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  textSize,
  headerSize: _,
}) => {
  return (
    <Stack
      spacing="2.2rem"
      m={["8.5rem 0 4rem 0", null, null, "8.5rem 0 7rem 0"]}
      w="100%"
    >
      <Heading
        textAlign="center"
        fontSize={["36px", null, null, "58px"]}
        fontWeight="normal"
      >
        Musical-Companion
      </Heading>
      <Text textAlign="center" fontSize={textSize}>
        This is where you can purchase my accompaniment tracks in flac/wav, or
        midi.
      </Text>
      <Text textAlign="center" fontSize={textSize}>
        If you haven't yet create an account, please do! The process is very
        easy, no need to confirm your email. The purpose of having an account is
        so that you can keep track of what you own.
      </Text>
    </Stack>
  );
};
