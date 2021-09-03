import { Box } from "@chakra-ui/react";
import React from "react";
import AccompanimentSection from "../components/AccompanimentSection/index";
import { BeforeYouProceed } from "../components/BeforeYouProceed";
import CompositionSection from "../components/CompositionSection";
import SmartSoloistSection from "../components/SmartSoloistSection";
import { WelcomeSection } from "../components/WelcomeSection";
import { ContainerWithPadding } from "../Elements/ContainerWithPadding";

export default function Home() {
  const textSize = ["16px", null, null, "20px"];
  const headerSize = ["36px", null, "48px"];

  return (
    <>
      <ContainerWithPadding>
        <WelcomeSection textSize={textSize} headerSize={headerSize} />
        <BeforeYouProceed textSize={textSize} headerSize={headerSize} />
        <AccompanimentSection textSize={textSize} headerSize={headerSize} />
      </ContainerWithPadding>
      <Box mt="5rem">
        <ContainerWithPadding>
          <SmartSoloistSection />
        </ContainerWithPadding>
      </Box>
      <CompositionSection />
    </>
  );
}
