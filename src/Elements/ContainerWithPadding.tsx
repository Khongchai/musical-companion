import { Stack } from "@chakra-ui/react";
import React from "react";

interface ContainerWithPadding {
  overridePadding?: string;
}

export const ContainerWithPadding: React.FC<ContainerWithPadding> = ({
  overridePadding,
  children,
}) => {
  return (
    <Stack
      spacing="4rem"
      maxWidth="1400px"
      ml="auto"
      mr="auto"
      p={overridePadding ? overridePadding : "5rem 1rem 0rem 1rem"}
    >
      {children}
    </Stack>
  );
};
