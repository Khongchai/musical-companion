import React from "react";
import { render, shallow } from "enzyme";
import { MockedProvider } from "@apollo/client/testing";
import { meQueryAuthenticatedMock } from "./mockApolloResponses/meQueryMock";
import CartTotal from "../components/CartTotalAndCheckout";

describe("Cart total component", () => {
  it("should render a checkout button if user is not logged in", () => {
    const component = render(
      <MockedProvider addTypename={false} mocks={meQueryAuthenticatedMock}>
        <CartTotal />
      </MockedProvider>
    );
    console.log(component);
  });
});

//-----------------------------------------------

//Given a user who is logged in

//When they enter cart-summary page

//Checkout button should show if there exist some items in the cart
