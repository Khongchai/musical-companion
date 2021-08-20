import React from "react";
import { Text } from "@chakra-ui/react";

interface PriceProps {
  price: number;
}

export const Price: React.FC<PriceProps> = ({ price }) => {
  return price <= 0 ? (
    <Text color="green.400">Free</Text>
  ) : (
    <Text color="mainRed">${price}</Text>
  );
};
