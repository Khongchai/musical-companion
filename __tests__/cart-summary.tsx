import React from "react";
import { shallow } from "enzyme";
import { MockedProvider } from "@apollo/client/testing";
import CartTotal from "../src/components/CartTotalAndCheckout";
import { meQueryMock } from "./mockApolloResponses/meQueryMock";

describe("Cart total component", () => {
  it("should not render a checkout button if user is not logged in", () => {
    const component = shallow(
      <MockedProvider mocks={meQueryMock}>
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
