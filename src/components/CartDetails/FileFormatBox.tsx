import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const FileFormatBox: React.FC = ({ children }) => {
  const bg = useColorModeValue("white", "mainBlack");
  const bgFlip = useColorModeValue("mainBlack", "white");
  return (
    <Box
      p=".1rem .3rem"
      mr="0.5rem"
      mt="0.5rem"
      fontSize="14px"
      bgColor={bg}
      borderRadius="4px"
      color={bgFlip}
      border={`1px solid var(--chakra-colors-${bgFlip})`}
    >
      {children}
    </Box>
  );
};

export default FileFormatBox;
