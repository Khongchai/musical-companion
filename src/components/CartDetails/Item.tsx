import { Flex } from "@chakra-ui/react";
import React from "react";

export const Item: React.FC<{ key: any }> = ({ key, children }) => {
  return (
    <Flex key={key} flexDir={["column", null, null, "row"]}>
      {children}
    </Flex>
  );
};
