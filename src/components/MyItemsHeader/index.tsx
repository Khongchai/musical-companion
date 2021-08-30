import { Flex } from "@chakra-ui/react";
import React from "react";

interface MyItemsHeaderProps {}

const MyItemsHeader: React.FC<MyItemsHeaderProps> = ({ children }) => {
  return <Flex>{children}</Flex>;
};

export default MyItemsHeader;
