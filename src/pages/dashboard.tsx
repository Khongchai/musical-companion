import { Box } from "@chakra-ui/react";
import React from "react";
import { MainContainer } from "../Elements/MainContainer";
import { useProductPurchasedByCurrentUserAllDataQuery } from "../generated/graphql";
import useAuthRedirect from "../utils-hooks/useAuthRedirect";

interface dashboardProps {}

const dashboard: React.FC<dashboardProps> = ({}) => {
  useAuthRedirect("toHomeIfNotLoggedIn");
  //TODO design this page
  const { data, loading } = useProductPurchasedByCurrentUserAllDataQuery();

  return (
    <MainContainer>
      <Box marginTop="3.5rem">
        {data?.productsPurchasedByCurrentUser.map((product) => {
          return <div>{product?.composition?.name}</div>;
        })}
      </Box>
    </MainContainer>
  );
};

export default dashboard;
