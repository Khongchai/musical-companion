import { act, renderHook } from "@testing-library/react-hooks";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

describe("Check how a user will have to pay based on the type of the account and what are in the current cart.", () => {
  // const mocks: readonly MockedResponse<Record<string, any>>[] = [
  //     {
  //         request: {
  //             query: MeQuery
  //         }
  //     }
  // ]
  it("Returns $0 if user is a student", () => {
    expect(true).toBe(true);
  });

  it("Returns $0 if all products in the current cart are marked as free regardless of who the user is.", () => {
    expect(true).toBe(true);
  });

  it("Returns $0 if no products in cart.", () => {});

  it("Returns the actual total if the user has at least one not-free product in cart and is not a student.", () => {});
});
