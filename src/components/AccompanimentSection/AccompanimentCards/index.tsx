import { Box, Button, Flex, Grid, Text, useColorMode } from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  ProductType,
  useAllProductsInfoQuery,
} from "../../../generated/graphql";
import useStore from "../../../globalStates";
import useAlreadyPurchasedProducts from "../../../utils-hooks/useAlreadyPurchasedProducts";
import useIsAuthenticated from "../../../utils-hooks/useIsAuthenticated";
import extractPagesFromTotalNumberOfPages from "../../../utils/getArrayFromPageNum";
import { Card } from "./Card";

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

  const { isAuthenticated } = useIsAuthenticated(true);

  const responsiveGridColumns = [
    "1fr 1fr",
    null,
    "1fr 1fr 1fr",
    null,
    "1fr 1fr 1fr 1fr ",
  ];
  const totalPages = allProductsData?.allProductsInfo?.pagePosition?.of;
  const pages = useMemo(() => {
    if (totalPages) {
      return extractPagesFromTotalNumberOfPages(totalPages);
    }
    return [];
  }, [totalPages]);

  const itemsInCart = useStore((state) => state.itemsInCart);

  return (
    <Box>
      {allProductsData?.allProductsInfo?.pagePosition ? (
        <Flex padding="2rem" w="100%" justify="center">
          {pages.map((pageNum) => (
            <Button
              key={pageNum}
              ml="1.5rem"
              value={pageNum}
              transform={pageNum === page ? "scale(1.3)" : "scale(1)"}
              onClick={(e) => {
                const requestedPage = parseInt(
                  (e.target as HTMLButtonElement).value
                );
                setPage(requestedPage);
              }}
            >
              {pageNum}
            </Button>
          ))}
        </Flex>
      ) : null}
      {allProductsLoading ? (
        <Box width="fit-content" m="0 auto">
          <div className="lds-dual-ring"></div>
        </Box>
      ) : (
        <Grid
          gridTemplateColumns={responsiveGridColumns}
          gap="19px"
          height="fit-content"
          position="relative"
        >
          {allProductsData?.allProductsInfo?.products &&
          allProductsData.allProductsInfo.products.length > 0 ? (
            (allProductsData?.allProductsInfo.products as ProductType[]).map(
              (product) => (
                <Card
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
        </Grid>
      )}
    </Box>
  );
};

export default AccompanimentCards;
