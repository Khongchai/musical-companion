import { Stack, Text } from "@chakra-ui/react";
import React from "react";

interface PurchasedItemListingProps {
  compositionName: string;
}

export const PurchasedItemListing: React.FC<PurchasedItemListingProps> = ({
  compositionName,
  children,
}) => {
  return (
    <Stack spacing="1rem" mt="1.5rem" paddingBottom="3rem">
      <Text fontSize="2rem">{compositionName}</Text>
      {children}
    </Stack>
  );
};
