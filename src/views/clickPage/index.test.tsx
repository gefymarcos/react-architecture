import React from "react";
import { render } from "@testing-library/react";
import ClickPage from ".";
import { clickButtonAction } from "../../modules/click/actions";

jest.mock("../../modules/click/actions", () => {
  return {
    clickButtonAction: jest.fn()
  };
});

jest.mock("react-redux", () => {
  return {
    useDispatch: () => jest.fn()
  };
});

const userMock = [{ name: "" }];

describe("clickPage", () => {
  it("must have click in the button", async () => {
    const component = render(<ClickPage value="teste" user={userMock} />);
    const button = await component.findByRole("button");

    await button.click();

    expect(clickButtonAction).toHaveBeenCalledWith("clicou");
  });
});
