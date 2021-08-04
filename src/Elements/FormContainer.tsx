import { Box, Grid } from "@chakra-ui/react";
import React from "react";

interface FormContainerProps {}

export const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <Grid placeItems="center" w="100%" h="100vh">
      <Box m="0 auto" w="min(80%, 350px)">
        {children}
      </Box>
    </Grid>
  );
};
