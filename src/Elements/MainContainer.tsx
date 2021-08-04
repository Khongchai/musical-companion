import { Stack } from "@chakra-ui/react";
import React from "react";

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Stack
      spacing="4rem"
      maxWidth="1400px"
      ml="auto"
      mr="auto"
      p="5rem 1rem 0rem 1rem"
    >
      {children}
    </Stack>
  );
};
