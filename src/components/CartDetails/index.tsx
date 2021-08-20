import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import useCartStore from "../../globalState";
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
    <Stack spacing="3rem" p="2rem 0">
      {itemKeys.map((key) => (
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
                <CompositionName name={itemsInCartMap[key].composition?.name} />
                <ComposersName
                  composers={itemsInCartMap[key].composition?.composers}
                />
                <Price price={itemsInCartMap[key].priceUsd} />
                <FileFormats>
                  <Text>Available formats:</Text>
                  {itemsInCartMap[key].composition?.links.map((link) => {
                    let list: JSX.Element[] = [];
                    link.flacLink &&
                      list.push(<FileFormatBox>FLAC</FileFormatBox>);
                    link.wavLink &&
                      list.push(<FileFormatBox>WAV</FileFormatBox>);
                    link.midiLink &&
                      list.push(<FileFormatBox>MIDI</FileFormatBox>);
                    link.pdfLink &&
                      list.push(<FileFormatBox>PDF</FileFormatBox>);
                    return (
                      <Flex ml="0.5rem" flexWrap="wrap">
                        {list.map((listItem) => listItem)}
                      </Flex>
                    );
                  })}
                </FileFormats>
              </Box>
            </Details>
            <Box ml={["0", null, null, "auto"]} mt={["1rem", null, null, "0"]}>
              <Button>Remove</Button>
            </Box>
          </Item>
          <hr />
        </>
      ))}
      ;
    </Stack>
  );
};

export default CartDetails;
