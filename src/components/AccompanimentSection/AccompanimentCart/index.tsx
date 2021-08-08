import { Box, Grid, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useAllProductsInfoQuery } from "../../../generated/graphql";
import { AccompanimentDetails } from "./AccompanimentDetails";
import AccompanimentImage from "./AccompanimentImage";
import AddToCartButton from "./AddToCartButton";

const AccompanimentCards = () => {
  const { loading, data } = useAllProductsInfoQuery();
  const { colorMode } = useColorMode();
  const responsiveGridColumns = [
    "1fr 1fr",
    null,
    "1fr 1fr 1fr",
    null,
    "1fr 1fr 1fr 1fr ",
  ];
  return (
    <Grid gridTemplateColumns={responsiveGridColumns} gap="19px">
      {!loading && data
        ? data.allProductsInfo?.map((product) => (
            <Box mb="1rem">
              <AccompanimentImage src={product?.imageLink as string} />
              <AccompanimentDetails>
                <Text textTransform="uppercase">{product?.name}</Text>
                <AddToCartButton colorMode={colorMode} />
              </AccompanimentDetails>
            </Box>
          ))
        : null}
    </Grid>
  );
};

export default AccompanimentCards;
