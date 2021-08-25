import { Button } from "@chakra-ui/react";
import React from "react";
import { useAddDataAfterPurchaseToUserAfterCheckoutMutation } from "../../generated/graphql";
import addStuffFromCartToUserAfterPurchase from "../../utils/addStuffFromCartToUserAfterPurchase";

interface StudentCheckoutButtonProps {}

export const FreeCheckoutButton: React.FC<StudentCheckoutButtonProps> =
  ({}) => {
    const [attachDataToUser] =
      useAddDataAfterPurchaseToUserAfterCheckoutMutation();
    return (
      <Button
        display="block"
        mt="1.5rem"
        ml="auto"
        onClick={() => {
          addStuffFromCartToUserAfterPurchase(attachDataToUser);
        }}
      >
        GET
      </Button>
    );
  };
