import { Flex } from "@chakra-ui/react";
import React from "react";

export const Item: React.FC<{}> = ({ children }) => {
  return <Flex flexDir={["column", null, null, "row"]}>{children}</Flex>;
};
