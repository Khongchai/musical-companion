import { gql } from "@apollo/client";
import { MockedResponse } from "@apollo/client/utilities/testing/mocking/mockLink";

export const addDataAfterPurchaseToUserAfterCheckoutMock: ReadonlyArray<MockedResponse> =
  [
    {
      request: {
        query: gql`
          mutation addDataAfterPurchaseToUserAfterCheckout {
            addDataAfterPurchaseToUserAfterCheckout {
              purchaseSuccess
            }
          }
        `,
      },
      result: {
        data: {
          addDataAfterPurchaseToUserAfterCheckout: {
            purchaseSuccess: true,
          },
        },
      },
    },
  ];
