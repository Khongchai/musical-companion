import React from "react";
import { render } from "@testing-library/react";
import { WelcomeSection } from "../src/components/WelcomeSection";

/**
 * This test was created as a basic reference.
 */
describe("Header renders", () => {
  it("renders a heading", () => {
    const { getByRole } = render(
      <WelcomeSection textSize={["25px"]} headerSize={["25px"]} />
    );

    const heading = getByRole("heading", {
      name: /Musical-companion/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
