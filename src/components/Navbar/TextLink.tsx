import {
  Button,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type TextLinkProps = {
  text: string;
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
  href,
  onClickFunction,
}) => {
  const bgFlip = useColorModeValue("white", "mainBlack");
  const buttonStylings = {
    bg: bgFlip,
    fontWeight: "normal",
  };

  return href ? (
    <Link href={href}>
      <Button {...buttonStylings} _hover={{ opacity: 0.7 }}>
        {text.toUpperCase()}
      </Button>
    </Link>
  ) : (
    <Button
      onClick={onClickFunction && (() => onClickFunction())}
      _hover={{ opacity: 0.7 }}
      {...buttonStylings}
    >
      {text.toUpperCase()}
    </Button>
  );
};
