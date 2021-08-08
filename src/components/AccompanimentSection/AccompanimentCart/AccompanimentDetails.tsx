import { Flex } from "@chakra-ui/react";
import React from "react";

interface AccompanimentDetailsProps {}

export const AccompanimentDetails: React.FC<AccompanimentDetailsProps> = ({
  children,
}) => {
  return <Flex align="center">{children}</Flex>;
};
