import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import MyItemsHeader from "../components/MyItemsHeader";
import { PurchasedItemListing } from "../components/PurchasedItemListing";
import DownloadBlobButton from "../components/PurchasedItemListing/DownloadBlobButton";
import { DownloadBlobButtonsContainer } from "../components/PurchasedItemListing/DownloadBlobButtonsContainer";
import Meta from "../components/PurchasedItemListing/Meta";
import { ToHomeIfNotLoggedIn } from "../components/Shared/AuthCheck";
import { ComposersName } from "../components/Shared/ComposersName";
import PageSelector from "../components/Shared/PageSelector";
import SearchInputBox from "../components/Shared/SearchBox";
import { MainContainer } from "../Elements/MainContainer";
import {
  ComposerType,
  useProductPurchasedByCurrentUserAllDataQuery,
} from "../generated/graphql";

const MyItems: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, loading } = useProductPurchasedByCurrentUserAllDataQuery({
    variables: {
      limit: 5,
      page,
      search,
    },
  });

  const totalPages = useMemo(() => {
    return data?.productsPurchasedByCurrentUser?.pagePosition?.of;
  }, [data]);

  return (
    <ToHomeIfNotLoggedIn>
      <MainContainer>
        <Box minHeight="70vh" mt="4.25rem" mb="4.25rem">
          <MyItemsHeader>
            <Heading>Purchased Items</Heading>
            <Box ml="auto">
              <SearchInputBox setPage={setPage} setSearchVal={setSearch} />
            </Box>
          </MyItemsHeader>
          {totalPages ? (
            <PageSelector
              setPage={setPage}
              totalPages={totalPages}
              currentPage={page}
            />
          ) : null}
          <br />
          <hr />
          <br />
          {loading ? (
            <div>...loading</div>
          ) : totalPages === 0 ? (
            <div>You haven't yet purchased anything.</div>
          ) : (
            data?.productsPurchasedByCurrentUser?.data?.map((product) => {
              const compositionName = product?.composition?.name;
              const composers = product?.composition?.composers;

              return (
                <PurchasedItemListing
                  key={compositionName}
                  compositionName={compositionName || ""}
                >
                  <Meta>
                    {composers && (
                      <ComposersName composers={composers as ComposerType[]} />
                    )}
                    <Text> Download:</Text>

                    {compositionName && (
                      <DownloadBlobButtonsContainer>
                        {product?.flacLink && (
                          <DownloadBlobButton
                            compositionName={compositionName}
                            fileExtension="flac"
                            link={product.flacLink}
                          />
                        )}
                        {product?.wavLink && (
                          <DownloadBlobButton
                            compositionName={compositionName}
                            fileExtension="wav"
                            link={product.wavLink}
                          />
                        )}
                        {product?.midiLink && (
                          <DownloadBlobButton
                            compositionName={product.composition!.name}
                            fileExtension="midi"
                            link={product.midiLink}
                          />
                        )}
                        {product?.pdfLink && (
                          <DownloadBlobButton
                            compositionName={product.composition!.name}
                            fileExtension="pdf"
                            link={product.pdfLink}
                          />
                        )}
                      </DownloadBlobButtonsContainer>
                    )}
                  </Meta>
                </PurchasedItemListing>
              );
            })
          )}
        </Box>
      </MainContainer>
    </ToHomeIfNotLoggedIn>
  );
};

export default MyItems;
