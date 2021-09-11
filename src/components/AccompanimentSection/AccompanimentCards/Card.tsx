import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { DataAfterPurchaseType, ProductType } from "../../../generated/graphql";
import { FileFormats } from "../../CartDetails/FileFormats";
import { AccompanimentDetails } from "./AccompanimentDetails";
import AccompanimentImageAndOverlay from "./AccompanimentImageAndOverlay";
import AddToCartButton from "./AddToCartButton";

interface CardProps {
  product: ProductType;
  itemsInCart: Record<string, ProductType>;
  isStudent?: boolean;
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
  isStudent,
}) => {
  const name = product.composition?.name || "";
  const id = product.id;
  const alreadyAddedToCart = !!itemsInCart[product.id];
  const price: string | number =
    product.priceUsd > 0 && !isStudent ? "$" + product.priceUsd : "free";

  return (
    <Box mb="1rem" key={name} pos="relative">
      <AccompanimentImageAndOverlay
        imageAlt={product.composition.composers[0].name}
        youtubeLink={product.composition.links?.youtubeLink}
        src={product.imageLink as string}
        productId={parseInt(id)}
        alreadyAddedToCart={alreadyAddedToCart}
      />
      <AccompanimentDetails
        alreadyAddedToCart={alreadyAddedToCart}
        nameAndAddToCartButtonComponents={
          <>
            <Text maxW="250px" textTransform="uppercase">
              {product.composition?.name}
            </Text>
            <AddToCartButton
              isAuthenticated={isAuthenticated}
              productId={parseInt(product.id)}
              colorMode={colorMode}
            />
          </>
        }
        priceComponent={
          <Text
            fontWeight="bold"
            color={price === "free" || isStudent ? "green" : "unset"}
          >
            {price}
          </Text>
        }
        availableFormatsComponent={
          <FileFormats
            links={product.composition.links as DataAfterPurchaseType}
          />
        }
      />
      {userAlreadyPurchasedThis && <AlreadyPurchasedOverlay />}
    </Box>
  );
};

function AlreadyPurchasedOverlay() {
  const colorModeFlipped = useColorModeValue("mainBlack", "white");
  const { colorMode } = useColorMode();
  return (
    <Box
      pos="absolute"
      top="0"
      left="0"
      background={colorMode === "light" ? "#ffffffc9" : "#1A202Cc9"}
      width="100%"
      height="100%"
    >
      <Box display="grid" w="100%" h="100%" placeItems="center">
        <Text
          color={colorModeFlipped}
          transform="rotateZ(45deg)"
          fontSize={["1rem", null, "1.5rem", null, "2rem"]}
        >
          Already purchased
        </Text>
      </Box>
    </Box>
  );
}
