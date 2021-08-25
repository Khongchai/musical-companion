import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import useCheckoutInfo from "../../utils-hooks/useTotalToPay";
import CheckoutButton from "./PaypalCheckoutButton";
import { FreeCheckoutButton } from "./FreeCheckoutButton";

interface CartTotalProps {}

const CartTotal: React.FC<CartTotalProps> = ({}) => {
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
      {thereAreItemsInCart &&
        (isStudent || totalToPay == 0 ? (
          <FreeCheckoutButton />
        ) : (
          <CheckoutButton totalToPay={totalToPay}>
            Temp Checkout Button
          </CheckoutButton>
        ))}
    </Box>
  );
};

export default CartTotal;
