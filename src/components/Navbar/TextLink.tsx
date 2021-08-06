import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type TextLinkProps = {
  text: string;
  color: string;
} & (
  | {
      href?: string;
      onClickFunction?: never;
    }
  | { href?: never; onClickFunction?: () => any }
);

/**
 * Undefined href means you just want to use the stylings.
 */
export const TextLink: React.FC<TextLinkProps> = ({
  text,
  color,
  href,
  onClickFunction,
}) => {
  return href ? (
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
  ) : (
    <Text
      onClick={onClickFunction && (() => onClickFunction())}
      cursor="pointer"
      fontWeight="normal"
      fontSize="14px"
      color={color}
      size="md"
      textTransform="capitalize"
    >
      {text}
    </Text>
  );
};
