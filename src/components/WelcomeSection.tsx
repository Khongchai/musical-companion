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
        Caution: if you make your purchase without creating an account, your
        purchase history will not be saved and you will not be able to
        redownload your files if they are lost. Should that happen, contact me
        at world1955@hotmail.com along with all the evidence of the purchase(s).
      </Text>
    </Stack>
  );
};
