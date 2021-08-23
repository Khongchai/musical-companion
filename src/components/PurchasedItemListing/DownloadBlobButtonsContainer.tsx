import { Flex } from "@chakra-ui/react";
import React from "react";

export const DownloadBlobButtonsContainer: React.FC = ({ children }) => {
  return (
    <Flex
      ml="2rem"
      align="center"
      flexWrap="wrap"
      css={{ "> *": { margin: "1rem" } }}
    >
      {children}
    </Flex>
  );
};
