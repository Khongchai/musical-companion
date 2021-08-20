import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import CartDetails from "../components/CartDetails";
import { MainContainer } from "../Elements/MainContainer";

const cartSummary = ({}) => {
  return (
    <MainContainer>
      <Heading mt="3.5rem">Your cart</Heading>
      <Box>
        <Text>Cart Details</Text>
        <hr />
        <CartDetails />
      </Box>
    </MainContainer>
  );
};

export default cartSummary;
