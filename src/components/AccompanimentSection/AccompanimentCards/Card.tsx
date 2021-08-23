import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { ProductType } from "../../../generated/graphql";
import { AccompanimentDetails } from "./AccompanimentDetails";
import AccompanimentImage from "./AccompanimentImage";
import AddToCartButton from "./AddToCartButton";

interface CardProps {
  product: ProductType;
  itemsInCart: Record<string, ProductType>;
  isAuthenticated: boolean;
  colorMode: "dark" | "light";
  userAlreadyPurchasedThis: boolean;
}

export const Card: React.FC<CardProps> = ({
  product,
  itemsInCart,
  isAuthenticated,
  colorMode,
  userAlreadyPurchasedThis,
}) => {
  return (
    <Box mb="1rem" key={product.composition?.name} pos="relative">
      <AccompanimentImage
        src={product.imageLink as string}
        productId={parseInt(product.id)}
        alreadyAddedToCart={!!itemsInCart[product.id]}
      />
      <AccompanimentDetails alreadyAddedToCart={!!itemsInCart[product.id]}>
        <Text maxW="250px" textTransform="uppercase">
          {product.composition?.name}
        </Text>
        <AddToCartButton
          isAuthenticated={isAuthenticated}
          productId={parseInt(product.id)}
          colorMode={colorMode}
        />
      </AccompanimentDetails>
      {userAlreadyPurchasedThis && <AlreadyPurchasedOverlay />}
    </Box>
  );
};

function AlreadyPurchasedOverlay() {
  return (
    <Box
      pos="absolute"
      top="0"
      left="0"
      background="rgba(0,0,0,0.7)"
      width="100%"
      height="100%"
    >
      <Box display="grid" w="100%" h="100%" placeItems="center">
        <Text
          color="white"
          transform="rotateZ(45deg)"
          fontSize={["1rem", null, "1.5rem", null, "2rem"]}
        >
          Already purchased
        </Text>
      </Box>
    </Box>
  );
}
