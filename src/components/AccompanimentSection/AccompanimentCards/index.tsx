import { Box, Grid, Text, useColorMode } from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  ProductType,
  useAllProductsInfoQuery,
} from "../../../generated/graphql";
import useStore from "../../../globalStates";
import useAlreadyPurchasedProducts from "../../../utils-hooks/useAlreadyPurchasedProducts";
import useUserData from "../../../utils-hooks/useUserData";
import Loader from "../../Shared/Loader";
import PageSelector from "../../Shared/PageSelector";
import AccompanimentSkeletonLoader from "./AccompanimentSkeletonLoader";
import { Card } from "./Card";
import CardsContainer from "./CardsContainer";

const AccompanimentCards: React.FC<{
  searchVal: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ searchVal, page, setPage }) => {
  const { loading: allProductsLoading, data: allProductsData } =
    useAllProductsInfoQuery({
      variables: {
        limit: 8,
        page: page,
        search: searchVal,
      },
    });

  const { purchasedProductMap } = useAlreadyPurchasedProducts();

  const { colorMode } = useColorMode();

  const { isAuthenticated, isStudent } = useUserData(true);

  //This will keep the selector bar from falling back to the placeholder everytime the user switch page.
  const totalPage = allProductsData?.allProductsInfo?.pagePosition.of;
  const totalPagesMemoized = useMemo(() => totalPage, [totalPage]);

  const itemsInCart = useStore((state) => state.itemsInCart);

  return (
    <Box>
      {totalPagesMemoized ? (
        <PageSelector
          setPage={setPage}
          currentPage={page}
          totalPages={totalPagesMemoized}
        />
      ) : (
        <PageSelector asPlaceHolder />
      )}
      {/* add exclamation mark to test loader: !allProductsLoading ? ... */}
      {allProductsLoading ? (
        <CardsContainer>
          <AccompanimentSkeletonLoader />
        </CardsContainer>
      ) : (
        <CardsContainer>
          {allProductsData?.allProductsInfo?.products &&
          allProductsData.allProductsInfo.products.length > 0 ? (
            (allProductsData?.allProductsInfo.products as ProductType[]).map(
              (product) => (
                <Card
                  key={product.composition.name}
                  isStudent={isStudent}
                  product={product}
                  itemsInCart={itemsInCart}
                  colorMode={colorMode}
                  isAuthenticated={isAuthenticated}
                  userAlreadyPurchasedThis={
                    product.composition?.name
                      ? !!purchasedProductMap[product.composition.name]
                      : false
                  }
                />
              )
            )
          ) : (
            <Text
              position="absolute"
              left="50%"
              textAlign="center"
              transform="translateX(-50%)"
            >
              No data found
            </Text>
          )}
        </CardsContainer>
      )}
    </Box>
  );
};

export default AccompanimentCards;
