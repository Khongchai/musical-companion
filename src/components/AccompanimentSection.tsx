import { Box } from "@chakra-ui/react";
import React from "react";
import { Text } from "../types/text";

interface AccompanimentSectionProps extends Text {}

export const AccompanimentSection: React.FC<AccompanimentSectionProps> = ({
  headerSize,
  textSize,
}) => {
  return <Box>This is the accompaniment section</Box>;
};
