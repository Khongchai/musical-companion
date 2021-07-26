import { Box } from "@chakra-ui/react";
import React from "react";
import { useAllProductsInfoQuery } from "../generated/graphql";
import { Text } from "../types/text";

interface AccompanimentSectionProps extends Text {}

export const AccompanimentSection: React.FC<AccompanimentSectionProps> = ({
  headerSize,
  textSize,
}) => {
  const { fetching, data } = useAllProductsInfoQuery();
  return <Box>{data?.allProductsInfo?.map((product) => product?.name)}</Box>;
};
