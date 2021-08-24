import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { PurchasedItemListing } from "../components/PurchasedItemListing";
import DownloadBlobButton from "../components/PurchasedItemListing/DownloadBlobButton";
import { DownloadBlobButtonsContainer } from "../components/PurchasedItemListing/DownloadBlobButtonsContainer";
import Meta from "../components/PurchasedItemListing/Meta";
import { ComposersName } from "../components/Shared/ComposersName";
import { MainContainer } from "../Elements/MainContainer";
import {
  ComposerType,
  useProductPurchasedByCurrentUserAllDataQuery,
} from "../generated/graphql";
import useAuthRedirect from "../utils-hooks/useAuthRedirect";

const dashboard: React.FC = () => {
  useAuthRedirect("toHomeIfNotLoggedIn");
  const { data, loading } = useProductPurchasedByCurrentUserAllDataQuery();

  return (
    <MainContainer>
      <Box minHeight="70vh" mt="4.25rem" mb="4.25rem">
        <Heading>Purchased Items</Heading>
        <br />
        <hr />
        <br />
        {loading ? (
          <div>...loading</div>
        ) : (
          data?.productsPurchasedByCurrentUser.map((product) => {
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
  );
};

export default dashboard;
