import { Box } from "@chakra-ui/react";
import React from "react";

interface AccompanimentImageProps {
  src: string;
}

const AccompanimentImage: React.FC<AccompanimentImageProps> = ({ src }) => {
  return (
    <Box
      key={src}
      gridColumn="auto"
      paddingBottom="100%"
      backgroundSize="cover"
      bgImage={src}
      cursor="pointer"
      mb="1rem"
    />
  );
};

export default AccompanimentImage;
