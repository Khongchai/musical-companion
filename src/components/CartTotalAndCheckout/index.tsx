import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useAddDataAfterPurchaseToUserAfterCheckoutMutation } from "../../generated/graphql";
import useStore from "../../globalStates";
import checkForApolloMutationErrors from "../../utils/checkForApolloMutationErrrors";
import router, { useRouter } from "next/router";

interface CartTotalProps {}

const CartTotal: React.FC<CartTotalProps> = ({}) => {
  const total = useStore((state) => state.priceOfItemsInCart);
  const [attachDataToUser] =
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

          if (
            result.data?.addDataAfterPurchaseToUserAfterCheckout
              ?.purchaseSuccess
          ) {
            //TODO push to dashboard and refresh
            //This will do two things, refresh info in dashboard and refetch a new cart.
            location.href = "/dashboard";
          } else {
            alert("Something went wrong, please contact the admin.");
          }
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
