import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import useStore from "../store";

interface CartProps {}

export const Cart: React.FC<CartProps> = ({}) => {
  const itemsInCart = useStore((state) => state.itemsInCart);
  return (
    <Link href="/cart-summary">
      <Box position="relative" width="fit-content" height="fit-content">
        <Flex position="relative" align="center" cursor="pointer">
          <Image src="/cart.png" alt="cart-icon" width="30px" height="30px" />
        </Flex>
        <Box
          w="fit-content"
          h="fit-content"
          p="3.5px 7px"
          borderRadius="50% "
          fontSize="11px"
          bg="red"
          color="white"
          position="absolute"
          top="-14px"
          right="-14px"
        >
          {itemsInCart}
        </Box>
      </Box>
    </Link>
  );
};
