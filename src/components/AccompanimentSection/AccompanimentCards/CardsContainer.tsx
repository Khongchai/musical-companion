import { Grid } from "@chakra-ui/react";
import React from "react";

const CardsContainer: React.FC = ({ children }) => {
  const responsiveGridColumns = [
    "1fr 1fr",
    null,
    "1fr 1fr 1fr",
    null,
    "1fr 1fr 1fr 1fr ",
  ];
  return (
    <Grid
      gridTemplateColumns={responsiveGridColumns}
      gap="19px"
      height="fit-content"
      position="relative"
    >
      {children}
    </Grid>
  );
};

export default CardsContainer;
