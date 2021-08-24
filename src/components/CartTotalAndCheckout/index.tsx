import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useAddDataAfterPurchaseToUserAfterCheckoutMutation } from "../../generated/graphql";
import useCheckoutInfo from "../../utils-hooks/useTotalToPay";
import checkForApolloMutationErrors from "../../utils/checkForApolloMutationErrrors";
import CheckoutButton from "./CheckoutButton";

interface CartTotalProps {}

const CartTotal: React.FC<CartTotalProps> = ({}) => {
  const [attachDataToUser] =
    useAddDataAfterPurchaseToUserAfterCheckoutMutation();
  const { totalToPay, isStudent, thereAreItemsInCart } = useCheckoutInfo();

  return (
    <Box width="100%" pb="5rem">
      <Heading ml="auto" w="fit-content">
        Total: ${totalToPay}
      </Heading>
      {isStudent && (
        <small
          style={{
            color: "green",
            marginLeft: "auto",
            width: "fit-content",
            display: "block",
          }}
        >
          student discount of 100% is applied
        </small>
      )}
      {thereAreItemsInCart && (
        <CheckoutButton
          onClickFunction={async () => {
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
        >
          Temp Checkout Button
        </CheckoutButton>
      )}
    </Box>
  );
};

export default CartTotal;
