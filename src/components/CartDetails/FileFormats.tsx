import { Flex } from "@chakra-ui/react";
import React from "react";
import { DataAfterPurchaseType } from "../../generated/graphql";
import FileFormatBox from "./FileFormatBox";

export const FileFormats: React.FC<{
  links: DataAfterPurchaseType | undefined;
}> = ({ links }) => {
  return (
    <Flex flexWrap="wrap">
      {links?.flacLink && <FileFormatBox>FLAC</FileFormatBox>}
      {links?.wavLink && <FileFormatBox>WAV</FileFormatBox>}
      {links?.midiLink && <FileFormatBox>MIDI</FileFormatBox>}
      {links?.pdfLink && <FileFormatBox>PDF</FileFormatBox>}
      {links?.metronomeLink && <FileFormatBox>CLICK</FileFormatBox>}
    </Flex>
  );
};
