import React from "react";
import { AccompanimentSection } from "../components/AccompanimentSection";
import { BeforeYouProceed } from "../components/BeforeYouProceed";
import { WelcomeSection } from "../components/WelcomeSection";
import { MainContainer } from "../Elements/MainContainer";

export default function Home() {
  const textSize = ["16px", null, null, "20px"];
  const headerSize = ["36px", null, "48px"];

  return (
    <MainContainer>
      <WelcomeSection textSize={textSize} headerSize={headerSize} />
      <BeforeYouProceed textSize={textSize} headerSize={headerSize} />
      <AccompanimentSection textSize={textSize} headerSize={headerSize} />
    </MainContainer>
  );
}
