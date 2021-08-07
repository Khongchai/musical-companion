import {
  Box,
  Text,
  Grid,
  Flex,
  Image,
  Button,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { useAllProductsInfoQuery } from "../../generated/graphql";

export const AccompanimentCards = () => {
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
              <Box
                key={product?.imageLink}
                gridColumn="auto"
                paddingBottom="100%"
                backgroundSize="cover"
                bgImage={product?.imageLink}
                cursor="pointer"
                mb="1rem"
              />
              <Flex align="center">
                <Text textTransform="uppercase">{product?.name}</Text>
                <Button
                  width="50px"
                  height="100%"
                  ml="auto"
                  border="1px solid black"
                  borderRadius="8px"
                  padding="10px"
                  cursor="pointer"
                >
                  <Image
                    alt="add-to-cart-icon"
                    title="Add item to cart"
                    src="/cart.png"
                    filter={colorMode == "dark" ? "invert(1)" : ""}
                  />
                </Button>
              </Flex>
            </Box>
          ))
        : null}
    </Grid>
  );
};
