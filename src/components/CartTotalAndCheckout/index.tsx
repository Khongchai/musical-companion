import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useAddDataAfterPurchaseToUserAfterCheckoutMutation } from "../../generated/graphql";
import useStore from "../../globalStates.ts";
import checkForApolloMutationErrors from "../../utils/checkForApolloMutationErrrors";

interface CartTotalProps {}

const CartTotal: React.FC<CartTotalProps> = ({}) => {
  const total = useStore((state) => state.priceOfItemsInCart);
  const [attachDataToUser, { loading }] =
    useAddDataAfterPurchaseToUserAfterCheckoutMutation();

  return (
    <Box width="100%" pb="5rem">
      <Heading ml="auto" w="fit-content">
        Total: ${total}
      </Heading>
      <Button
        onClick={async () => {
          const result = await attachDataToUser();

          checkForApolloMutationErrors(result);
        }}
        display="block"
        mt="1.5rem"
        ml="auto"
      >
        Temp Checkout Button
      </Button>
    </Box>
  );
};

export default CartTotal;
