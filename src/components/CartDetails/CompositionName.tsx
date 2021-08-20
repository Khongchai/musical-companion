import { Heading } from "@chakra-ui/react";
import React from "react";

interface CompositionNameProps {
  name?: string;
}

export const CompositionName: React.FC<CompositionNameProps> = ({ name }) => {
  return (
    <Heading mb=".3rem" size="md" fontFamily="Selawik">
      {name || "unknown"}
    </Heading>
  );
};
