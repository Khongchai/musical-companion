import { Stack } from "@chakra-ui/react";
import React from "react";

interface ContainerWithPadding {
  overridePadding?: string;
}

export const ContainerWithPadding: React.FC<ContainerWithPadding> = ({
  overridePadding,
  children,
}) => {
  const defaultPadding = [
    "5rem 1rem 0rem 1rem",
    null,
    "5rem 3.125rem 0rem 3.125rem",
  ];
  return (
    <Stack
      spacing="4rem"
      maxWidth="1400px"
      ml="auto"
      mr="auto"
      p={overridePadding ? overridePadding : defaultPadding}
    >
      {children}
    </Stack>
  );
};
