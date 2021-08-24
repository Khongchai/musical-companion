import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import {
  ProductType,
  useAddOrRemoveCartItemMutation,
} from "../../../generated/graphql";
import useStore from "../../../globalStates";
import checkForApolloMutationErrors from "../../../utils/checkForApolloMutationErrrors";

interface AddToCartButtonProps {
  colorMode: "dark" | "light";
  productId: number;
  isAuthenticated: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  colorMode,
  productId,
  isAuthenticated,
}) => {
  const [addItemTocart, { loading }] = useAddOrRemoveCartItemMutation();
  const setItemsToCart = useStore((state) => state.setItemsToCart);

  return (
    <Button
      width="50px"
      height="50px"
      ml="auto"
      border="1px solid black"
      borderRadius="8px"
      padding="10px"
      cursor="pointer"
      onClick={async () => {
        if (isAuthenticated) {
          const result = await addItemTocart({
            variables: { operation: "add", productId },
          });

          checkForApolloMutationErrors(result);

          const newItemsInCartList =
            result.data?.addOrRemoveCartItem?.productsInCart;
          newItemsInCartList &&
            setItemsToCart(newItemsInCartList as ProductType[]);
        } else {
          alert("Please create an account before adding an item to the cart.");
        }
      }}
    >
      {loading ? (
        <Box w="40px !important" h="40px !important">
          <Box
            pos="relative"
            width="100%"
            height="100%"
            _after={{
              position: "absolute",
              width: "20px",
              top: "25%",
              left: "17%",
              transform: "translateX(-50%)",
              margin: 0,
              height: "20px",
            }}
            className="lds-dual-ring"
          ></Box>
        </Box>
      ) : (
        <Image
          alt="add-to-cart-icon"
          title="Add item to cart"
          src="/cart.png"
          filter={colorMode == "dark" ? "invert(1)" : ""}
        />
      )}
    </Button>
  );
};
export default AddToCartButton;
