import { Flex } from "@chakra-ui/react";
import React from "react";

interface DashboardHeaderProps {}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ children }) => {
  return <Flex>{children}</Flex>;
};

export default DashboardHeader;
