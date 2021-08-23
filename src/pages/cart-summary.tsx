import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import CartDetails from "../components/CartDetails";
import CartTotalAndCheckout from "../components/CartTotalAndCheckout";
import { MainContainer } from "../Elements/MainContainer";

const cartSummary = ({}) => {
  return (
    <MainContainer>
      <Heading mt="3.5rem">Your cart</Heading>
      <Box minHeight="50vh">
        <Text>Cart Details</Text>
        <hr />
        <CartDetails />
        <CartTotalAndCheckout />
      </Box>
    </MainContainer>
  );
};

export default cartSummary;
