import { gql } from "@apollo/client";
import { MockedResponse } from "@apollo/client/utilities/testing/mocking/mockLink";

export const meQueryAuthenticatedMock: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: gql`
        query me {
          me {
            id
            isStudent
          }
        }
      `,
    },
    result: {
      data: {
        me: {
          id: 1,
          isStudent: false,
        },
      },
    },
  },
];
