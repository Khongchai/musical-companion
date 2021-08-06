import { Box, Grid } from "@chakra-ui/react";
import React from "react";

interface FormContainerProps {}

export const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <Grid p="1rem" placeItems="center" w="100%" h="100vh">
      <Box w="min(80%, 350px)">{children}</Box>
    </Grid>
  );
};
