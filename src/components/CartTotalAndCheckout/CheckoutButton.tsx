import { Button } from "@chakra-ui/react";
import React from "react";

const CheckoutButton: React.FC<{ onClickFunction: () => any }> = ({
  children,
  onClickFunction,
}) => {
  return (
    <Button
      display="block"
      mt="1.5rem"
      ml="auto"
      onClick={async () => onClickFunction()}
    >
      {children}
    </Button>
  );
};

export default CheckoutButton;
