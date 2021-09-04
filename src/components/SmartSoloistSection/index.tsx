import { Box, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import About from "./About";

interface SmartSoloistSectionProps {}

const SmartSoloistSection: React.FC<SmartSoloistSectionProps> = ({}) => {
  return (
    <Box>
      <About />
      {/* <Flex width="100%" justify="center">
        <Link
          href="https://smartsoloist.com/"
          _hover={{ transform: "scale(1.02)" }}
          transition=".3s"
          target="_blank"
        >
          <Image
            className="center-smart-soloist-image"
            layout="intrinsic"
            width={`${1388 * 0.5}px`}
            height={`${468 * 0.5}px`}
            src="/logos/smart-soloist.png"
          />
        </Link>
      </Flex> */}
    </Box>
  );
};

export default SmartSoloistSection;
