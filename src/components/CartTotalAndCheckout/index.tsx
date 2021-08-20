import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import useCartStore from "../../globalState";

interface CartTotalProps {}

const CartTotal: React.FC<CartTotalProps> = ({}) => {
  const total = useCartStore((state) => state.priceOfItemsInCart);
  return (
    <Box width="100%" pb="5rem">
      <Heading ml="auto" w="fit-content">
        Total: ${total}
      </Heading>
    </Box>
  );
};

export default CartTotal;
