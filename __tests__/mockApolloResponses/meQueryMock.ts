import meQuery from "../../src/graphql/queries/meQuery.graphql";
import { MockedResponse } from "@apollo/client/utilities/testing/mocking/mockLink";

export const meQueryMock: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: meQuery,
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
