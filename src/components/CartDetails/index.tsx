import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import useCartStore from "../../globalState";
import RemoveItemButton from "../RemoveItemButton";
import { ComposersName } from "./ComposersName";
import { CompositionName } from "./CompositionName";
import { Details } from "./Details";
import FileFormatBox from "./FileFormatBox";
import { FileFormats } from "./FileFormats";
import { Item } from "./Item";
import { Price } from "./Price";

const CartDetails: React.FC = () => {
  const itemsInCartMap = useCartStore((state) => state.itemsInCart);
  const itemKeys = Object.keys(itemsInCartMap);

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
                  <FileFormats>
                    <Text>Available formats:</Text>
                    <Flex flexWrap="wrap" ml="0.5rem">
                      {itemsInCartMap[key].composition?.links?.flacLink && (
                        <FileFormatBox>FLAC</FileFormatBox>
                      )}
                      {itemsInCartMap[key].composition?.links?.wavLink && (
                        <FileFormatBox>WAV</FileFormatBox>
                      )}
                      {itemsInCartMap[key].composition?.links?.midiLink && (
                        <FileFormatBox>MIDI</FileFormatBox>
                      )}
                      {itemsInCartMap[key].composition?.links?.pdfLink && (
                        <FileFormatBox>PDF</FileFormatBox>
                      )}
                    </Flex>
                  </FileFormats>
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
