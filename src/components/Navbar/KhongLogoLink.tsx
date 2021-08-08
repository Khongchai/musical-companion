import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

interface KhongLogoLinkProps {}

const KhongLogoLink: React.FC<KhongLogoLinkProps> = ({}) => {
  return (
    <Link href="/">
      <Flex cursor="pointer">
        <Image
          alt="khong-icon"
          src="/khong-icon.png"
          width="60px"
          height="60px"
        />
      </Flex>
    </Link>
  );
};

export default KhongLogoLink;
