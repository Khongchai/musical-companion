import { Flex } from "@chakra-ui/react";
import React from "react";

interface AccompanimentDetailsProps {
  alreadyAddedToCart: boolean;
}

export const AccompanimentDetails: React.FC<AccompanimentDetailsProps> = ({
  alreadyAddedToCart,
  children,
}) => {
  const stylings = alreadyAddedToCart
    ? { pointerEvents: "none", filter: "brightness(0.5)", userSelect: "none" }
    : {};

  return (
    <Flex align="center" {...(stylings as any)}>
      {children}
    </Flex>
  );
};
