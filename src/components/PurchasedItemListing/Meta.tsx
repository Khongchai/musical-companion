import { Stack } from "@chakra-ui/react";
import React from "react";

interface MetaProps {}

const Meta: React.FC<MetaProps> = ({ children }) => {
  return (
    <Stack spacing="0.5rem" paddingLeft="2rem">
      {children}
    </Stack>
  );
};

export default Meta;
