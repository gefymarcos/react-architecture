import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import ClickPageContainer from ".";
import { clickButtonAction } from "../../modules/click/actions";

jest.mock("../../modules/click/actions", () => {
  return {
    clickButtonAction: jest.fn()
  };
});

jest.mock("react-redux", () => {
  const originalModule = jest.requireActual("react-redux");
  return {
    ...originalModule,
    useDispatch: () => jest.fn()
  };
});

const userMock = {
  users: {
    loading: false,
    data: [{ name: "" }],
    error: ""
  }
};

describe("clickPage", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it("must have click in the button", async () => {
    const store = mockStore({
      user: userMock,
      click: { value: "" }
    });

    const component = render(
      <Provider store={store}>
        <ClickPageContainer />
      </Provider>
    );
    const button = await component.findByRole("button");

    await button.click();

    expect(clickButtonAction).toHaveBeenCalledWith("clicou");
  });
});
