import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useCartStore from "../globalState";

export const Cart: React.FC<{
  flipColorMode?: boolean;
}> = ({ flipColorMode }) => {
  const cartColor = useColorModeValue("", "invert(1)");
  const itemsInCart = useCartStore((state) => state.itemsInCart);
  return (
    <Link href="/cart-summary">
      <Box position="relative" width="fit-content" height="fit-content">
        <Flex
          filter={flipColorMode ? cartColor : ""}
          position="relative"
          align="center"
          cursor="pointer"
        >
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
          {Object.keys(itemsInCart).length}
        </Box>
      </Box>
    </Link>
  );
};
