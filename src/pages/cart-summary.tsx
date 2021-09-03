import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import CartDetails from "../components/CartDetails";
import CartTotalAndCheckout from "../components/CartTotalAndCheckout";
import { ContainerWithPadding } from "../Elements/ContainerWithPadding";

const cartSummary = ({}) => {
  return (
    <ContainerWithPadding>
      <Heading mt="3.5rem">Your cart</Heading>
      <Box minHeight="50vh">
        <Text>Cart Details</Text>
        <hr />
        <CartDetails />
        <CartTotalAndCheckout />
      </Box>
    </ContainerWithPadding>
  );
};

export default cartSummary;
