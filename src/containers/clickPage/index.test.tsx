import React from "react";
import { render } from "@testing-library/react";

import ClickPageContainer from ".";
import { startMockWith } from "../../config/mockedProvider";
import { getCityByName } from "../../modules/clickPage/actions";

const data = {
  getCityByName: jest.fn().mockResolvedValue({
    country: jest.fn().mockResolvedValue("US")
  })
};

jest.mock("../../modules/clickPage/actions", () => {
  return {
    getCityByName: jest.fn()
  };
});

const reactiveVar = {
  city: {
    name: "",
    city: "",
    loaded: false
  }
};

beforeAll(() => {
  startMockWith([{ data, reactiveVar }]);
});

describe("clickPage", () => {
  it("must have click in the button", async () => {
    render(<ClickPageContainer />);

    expect(getCityByName).toHaveBeenCalledWith("New York");
  });
});
