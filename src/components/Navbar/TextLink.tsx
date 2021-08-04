import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface TextLinkProps {
  text: string;
  color: string;
  href: string;
}

export const TextLink: React.FC<TextLinkProps> = ({ text, color, href }) => {
  return (
    <Link href={href}>
      <Text
        cursor="pointer"
        fontWeight="normal"
        fontSize="14px"
        color={color}
        size="md"
        textTransform="capitalize"
      >
        {text}
      </Text>
    </Link>
  );
};
