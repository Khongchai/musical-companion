import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BeforeYouProceed } from "../components/BeforeYouProceed";
import { AccompanimentSection } from "../components/AccompanimentSection";
import { WelcomeSection } from "../components/WelcomeSection";

export default function Home() {
  const textSize = ["16px", null, null, "20px"];
  const headerSize = ["36px", null, "48px"];

  return (
    <Stack spacing="4rem" maxWidth="1400px" ml="auto" mr="auto" p="1rem">
      <WelcomeSection textSize={textSize} headerSize={headerSize} />
      <BeforeYouProceed textSize={textSize} headerSize={headerSize} />
      <AccompanimentSection textSize={textSize} headerSize={headerSize} />
    </Stack>
  );
}
