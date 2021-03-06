import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  ProductType,
  useAddOrRemoveCartItemMutation,
} from "../../../generated/graphql";
import useStore from "../../../globalStates";
import checkForApolloMutationErrors from "../../../utils/checkForApolloMutationErrrors";
import Loader from "../../Shared/Loader";

interface AccompanimentImageProps {
  src: string;
  productId: number;
  alreadyAddedToCart?: boolean;
  youtubeLink?: string | null;
  imageAlt: string;
}

const AccompanimentImageAndOverlay: React.FC<AccompanimentImageProps> = ({
  src,
  productId,
  alreadyAddedToCart,
  youtubeLink,
  imageAlt,
}) => {
  const [removeFromCart, { loading }] = useAddOrRemoveCartItemMutation();
  const setItemsToCart = useStore((state) => state.setItemsToCart);

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
          alt={imageAlt}
        />
      </ComposerImageContainer>
      {youtubeLink ? (
        <YoutubeLink>
          <Link
            _hover={{ userSelect: "none" }}
            href={youtubeLink}
            target="_blank"
          >
            <Button bg="white" color="black" _hover={{ opacity: 0.7 }}>
              YouTube
            </Button>
          </Link>
        </YoutubeLink>
      ) : null}
      <AddedToCartOverlayAndRemoveButton
        alreadyAddedToCart={alreadyAddedToCart}
      >
        {loading ? (
          <>
            <ItemInCartStatus>Removing</ItemInCartStatus>
            <Loader />
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

export default AccompanimentImageAndOverlay;

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
      color="white"
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

function YoutubeLink({ children }: any) {
  return (
    <Box pos="absolute" bottom="10px" right="10px">
      {children}
    </Box>
  );
}
