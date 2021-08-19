import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  ProductType,
  useAddOrRemoveCartItemMutation,
} from "../../../generated/graphql";
import useCartStore from "../../../globalState";
import checkForApolloMutationErrors from "../../../utils/checkForApolloMutationErrrors";

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
  //Need loading icon
  const [removeFromCart, { loading }] = useAddOrRemoveCartItemMutation();
  const setItemsToCart = useCartStore((state) => state.setItemsToCart);
  return (
    <Box pos="relative">
      <ComposerImageContainer alreadyAddedToCart={alreadyAddedToCart}>
        <Image
          src={src}
          h="100%"
          objectPosition="center top"
          w="100%"
          objectFit="cover"
          pos="absolute"
        />
      </ComposerImageContainer>
      <AddedToCartOverlayAndRemoveButton
        alreadyAddedToCart={alreadyAddedToCart}
      >
        {loading ? (
          <>
            <ItemInCartStatus>Removing</ItemInCartStatus>
            <div className="lds-dual-ring"></div>
          </>
        ) : (
          <>
            <ItemInCartStatus>Added to Cart</ItemInCartStatus>
            <RemoveButton
              onClickFunction={async () => {
                const result = await removeFromCart({
                  variables: { operation: "remove", productId },
                });

                checkForApolloMutationErrors(result);

                const newItemsInCartList =
                  result.data?.addOrRemoveCartItem?.productsInCart;
                newItemsInCartList &&
                  setItemsToCart(newItemsInCartList as ProductType[]);
              }}
            >
              Remove
            </RemoveButton>
          </>
        )}
      </AddedToCartOverlayAndRemoveButton>
    </Box>
  );
};

export default AccompanimentImage;

/************************************************************************************* */

function ComposerImageContainer({
  alreadyAddedToCart,
  children,
}: {
  alreadyAddedToCart?: boolean;
  children: any;
}) {
  return (
    <Box
      gridColumn="auto"
      paddingBottom="100%"
      cursor={alreadyAddedToCart ? "auto" : "pointer"}
      mb="1rem"
      transition="filter .3s"
      filter={alreadyAddedToCart ? "brightness(0.3)" : "unset"}
      pos="relative"
    >
      {children}
    </Box>
  );
}

function AddedToCartOverlayAndRemoveButton({
  children,
  alreadyAddedToCart,
}: {
  children: any;
  alreadyAddedToCart?: boolean;
}) {
  return (
    <Box
      pos="absolute"
      left="50%"
      top="50%"
      transform="translateX(-50%) translateY(-50%)"
      transition="opacity .3s"
      opacity={alreadyAddedToCart ? "1" : "0"}
      pointerEvents={alreadyAddedToCart ? "auto" : "none"}
      w="fit-content"
      display="grid"
      placeItems="center"
    >
      {children}
    </Box>
  );
}

function RemoveButton({
  children,
  onClickFunction,
}: {
  children: any;
  onClickFunction: () => void;
}) {
  return (
    <Button
      onClick={() => {
        onClickFunction();
      }}
      bgColor="mainRed"
      _hover={{ opacity: 0.8 }}
    >
      <Text mb="3px">{children}</Text>
    </Button>
  );
}

function ItemInCartStatus({ children }: any) {
  return (
    <Text color="white" mb="1rem">
      {children}
    </Text>
  );
}
