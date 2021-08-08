import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

interface FlipColorButtonProps {
  bg: "mainGrey" | "white";
  bgFlip: "white" | "mainGrey";
}

export const FlipColorButton: React.FC<FlipColorButtonProps> = ({
  bg,
  bgFlip,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} bg={bg} color={bgFlip}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
