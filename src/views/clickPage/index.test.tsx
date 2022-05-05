import React from "react";
import { render } from "@testing-library/react";
import ClickPage from ".";
import { clickApolloButton } from "../../modules/clickPage/actions";

jest.mock("../../modules/clickPage/actions", () => {
  return {
    clickApolloButton: jest.fn()
  };
});

describe("clickPage", () => {
  it("must have click in the button", async () => {
    const component = render(<ClickPage value="teste" city="" />);
    const button = await component.findByRole("button");

    await button.click();

    expect(clickApolloButton).toHaveBeenCalledWith("BR");
  });
});
