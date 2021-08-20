import { Button, Text } from "@chakra-ui/react";
import React from "react";
import {
  ProductType,
  useAddOrRemoveCartItemMutation,
} from "../generated/graphql";
import useCartStore from "../globalState";
import checkForApolloMutationErrors from "../utils/checkForApolloMutationErrrors";

export default function RemoveItemButton({
  productToBeRemovedId,
}: {
  productToBeRemovedId: number;
}) {
  const [removeFromCart, { loading }] = useAddOrRemoveCartItemMutation();
  const setItemsToCart = useCartStore((state) => state.setItemsToCart);

  return (
    <Button
      onClick={async () => {
        const result = await removeFromCart({
          variables: { operation: "remove", productId: productToBeRemovedId },
        });

        checkForApolloMutationErrors(result);

        const newItemsInCartList =
          result.data?.addOrRemoveCartItem?.productsInCart;
        newItemsInCartList &&
          setItemsToCart(newItemsInCartList as ProductType[]);
      }}
      color="white"
      bgColor="mainRed"
      _hover={{ opacity: 0.8 }}
    >
      <Text mb="3px">Remove</Text>
    </Button>
  );
}
