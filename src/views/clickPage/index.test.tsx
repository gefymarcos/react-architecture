import React from "react";
import { render } from "@testing-library/react";
import ClickPage from ".";
import { clickApolloButton } from "../../modules/actions";

jest.mock("../../modules/actions", () => {
  return {
    clickApolloButton: jest.fn()
  };
});

describe("clickPage", () => {
  it("must have click in the button", async () => {
    const component = render(<ClickPage value="teste" />);
    const button = await component.findByRole("button");

    await button.click();

    expect(clickApolloButton).toHaveBeenCalledWith("clicou");
  });
});
