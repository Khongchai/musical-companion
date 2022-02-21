import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

interface KhongLogoLinkProps {}

const KhongLogoLink: React.FC<KhongLogoLinkProps> = ({}) => {
  return (
    <Link href="/" borderRadius="50%">
      <Flex cursor="pointer">
        <Image
          alt="khong-icon"
          src="/khong-icon.png"
          width="60px"
          height="60px"
        />
        <h5>Test Version: 0.5.2</h5>
      </Flex>
    </Link>
  );
};

export default KhongLogoLink;
