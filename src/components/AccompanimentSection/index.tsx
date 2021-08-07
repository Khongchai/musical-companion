import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { useAllProductsInfoQuery } from "../../generated/graphql";
import { Text } from "../../types/text";
import { AccompanimentCards } from "./AccompanimentCards";

interface AccompanimentSectionProps extends Text {}

const AccompanimentSection: React.FC<AccompanimentSectionProps> = ({
  headerSize,
  textSize,
}) => {
  return (
    <Box width="100%" overflowX="hidden">
      <Heading mb="2rem" fontSize={headerSize} fontWeight="normal">
        Accompaniment
      </Heading>
      <AccompanimentCards />
    </Box>
  );
};

export default AccompanimentSection;
