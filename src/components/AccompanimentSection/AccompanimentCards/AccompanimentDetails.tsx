import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface AccompanimentDetailsProps {
  alreadyAddedToCart: boolean;
  nameAndAddToCartButtonComponents: any;
  priceComponent: any;
}

export const AccompanimentDetails: React.FC<AccompanimentDetailsProps> = ({
  alreadyAddedToCart,
  nameAndAddToCartButtonComponents,
  priceComponent,
}) => {
  const stylings = alreadyAddedToCart
    ? { pointerEvents: "none", filter: "brightness(0.5)", userSelect: "none" }
    : {};

  return (
    <Box>
      <Flex align="center" {...(stylings as any)}>
        {nameAndAddToCartButtonComponents}
      </Flex>
      <Box>{priceComponent}</Box>
    </Box>
  );
};
