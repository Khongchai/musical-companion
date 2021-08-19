import { Button, Image } from "@chakra-ui/react";
import React from "react";

interface AddToCartButtonProps {
  colorMode: "dark" | "light";
  onClickFunction: () => any;
}
{
  /* This button should pull up another interface where 
                  the user can select what type of files they want. 
                */
}
const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  colorMode,
  onClickFunction,
}) => {
  return (
    <Button
      width="50px"
      height="100%"
      ml="auto"
      border="1px solid black"
      borderRadius="8px"
      padding="10px"
      cursor="pointer"
      onClick={() => onClickFunction()}
    >
      <Image
        alt="add-to-cart-icon"
        title="Add item to cart"
        src="/cart.png"
        filter={colorMode == "dark" ? "invert(1)" : ""}
      />
    </Button>
  );
};
export default AddToCartButton;
