import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  ProductType,
  useAddOrRemoveCartItemMutation,
} from "../../../generated/graphql";
import useCartStore from "../../../globalState";

interface AccompanimentImageProps {
  src: string;
  productId: number;
  alreadyAddedToCart?: boolean;
}

const AccompanimentImage: React.FC<AccompanimentImageProps> = ({
  src,
  productId,
  alreadyAddedToCart,
}) => {
  const [removeFromCart] = useAddOrRemoveCartItemMutation();
  const setItemsToCart = useCartStore((state) => state.setItemsToCart);

  return (
    <Box pos="relative">
      <Box
        key={src}
        gridColumn="auto"
        paddingBottom="100%"
        backgroundSize="cover"
        bgImage={src}
        cursor={alreadyAddedToCart ? "auto" : "pointer"}
        mb="1rem"
        bgPos="center top"
        transition="filter .3s"
        filter={alreadyAddedToCart ? "brightness(0.3)" : "unset"}
      />
      <Box
        pos="absolute"
        left="50%"
        top="50%"
        transform="translateX(-50%) translateY(-50%)"
        transition="opacity .3s"
        opacity={alreadyAddedToCart ? "1" : "0"}
        w="fit-content"
        display="grid"
        placeItems="center"
      >
        <Text color="white" mb="1rem">
          Added to Cart
        </Text>
        <Button
          onClick={async () => {
            const result = await removeFromCart({
              variables: { operation: "remove", productId },
            });
            result.errors &&
              alert(`
                We're sorry, something went wrong, please contact the admin. 
                Error message: ${result.errors}
            `);
            const newItemsInCartList =
              result.data?.addOrRemoveCartItem?.productsInCart;
            newItemsInCartList &&
              setItemsToCart(newItemsInCartList as ProductType[]);
          }}
          bgColor="#D2042D"
          _hover={{ opacity: 0.8 }}
        >
          <Text mb="3px">Remove</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default AccompanimentImage;
