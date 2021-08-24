import { Box } from "@chakra-ui/react";
import React from "react";

const FileFormatBox: React.FC = ({ children }) => {
  return (
    <Box
      p=".2rem .5rem"
      mr="0.5rem"
      mt="0.5rem"
      bgColor="blue.600"
      borderRadius="2px"
    >
      {children}
    </Box>
  );
};

export default FileFormatBox;
