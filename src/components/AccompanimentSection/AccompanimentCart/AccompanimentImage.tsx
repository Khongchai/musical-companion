import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

interface AccompanimentImageProps {
  src: string;
  alreadyAddedToCart?: boolean;
}

const AccompanimentImage: React.FC<AccompanimentImageProps> = ({
  src,
  alreadyAddedToCart,
}) => {
  return (
    <Box pos="relative">
      <Box
        key={src}
        gridColumn="auto"
        paddingBottom="100%"
        backgroundSize="cover"
        bgImage={src}
        cursor={alreadyAddedToCart ? "auto" : "pointer"}
        mb="1rem"
        bgPos="center top"
        transition="filter .3s"
        filter={alreadyAddedToCart ? "brightness(0.3)" : "unset"}
      />
      <Box
        pos="absolute"
        left="50%"
        top="50%"
        transform="translateX(-50%) translateY(-50%)"
        transition="opacity .3s"
        opacity={alreadyAddedToCart ? "1" : "0"}
        w="fit-content"
        display="grid"
        placeItems="center"
      >
        <Text color="white" mb="1rem">
          Added to Cart
        </Text>
        <Button bgColor="#D2042D" _hover={{ opacity: 0.8 }}>
          <Text mb="3px">Remove</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default AccompanimentImage;
