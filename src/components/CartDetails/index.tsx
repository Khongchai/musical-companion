import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { DataAfterPurchaseType } from "../../generated/graphql";
import useStore from "../../globalStates";
import RemoveItemButton from "../RemoveItemButton";
import { ComposersName } from "../Shared/ComposersName";
import { CompositionName } from "./CompositionName";
import { Details } from "./Details";
import FileFormatBox from "./FileFormatBox";
import { FileFormats } from "./FileFormats";
import { Item } from "./Item";
import { Price } from "./Price";

const CartDetails: React.FC = () => {
  const itemsInCartMap = useStore((state) => state.itemsInCart);
  const itemKeys = Object.keys(itemsInCartMap);

  if (itemKeys.length == 0) {
    return (
      <div style={{ marginTop: "20px" }}>
        Your cart is empty; add something!
      </div>
    );
  }
  return (
    <Stack spacing="3rem" p="2rem 0" transition=".3s">
      {itemKeys.map((key) => {
        return (
          <>
            <Item key={key}>
              <Details>
                <Image
                  w="120px"
                  h="120px"
                  minH="120px"
                  src={itemsInCartMap[key].imageLink}
                  objectFit="cover"
                  objectPosition="top center"
                  mr="1.5rem"
                />
                <Box>
                  <CompositionName
                    name={itemsInCartMap[key].composition?.name}
                  />
                  <ComposersName
                    composers={itemsInCartMap[key].composition?.composers}
                  />
                  <Price price={itemsInCartMap[key].priceUsd} />
                  <Box>
                    <Text>Available formats:</Text>
                    <FileFormats
                      links={
                        itemsInCartMap[key].composition
                          ?.links as DataAfterPurchaseType
                      }
                    />
                  </Box>
                </Box>
              </Details>
              <Box
                ml={["0", null, null, "auto"]}
                mt={["1rem", null, null, "0"]}
              >
                <RemoveItemButton
                  productToBeRemovedId={parseInt(itemsInCartMap[key].id)}
                />
              </Box>
            </Item>
            <hr />
          </>
        );
      })}
      ;
    </Stack>
  );
};

export default CartDetails;
