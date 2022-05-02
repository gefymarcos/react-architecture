import React from "react";
import { render, screen } from "@testing-library/react";

import ClickPageContainer from ".";
import { startMockWith } from "../../config/mockedProvider";

const data = {
  getCityByName: jest.fn().mockResolvedValue({
    country: jest.fn().mockResolvedValue("US")
  })
};

const reactiveVar = {
  city: {
    name: "",
    loaded: false
  }
};

beforeAll(() => {
  startMockWith([{ data, reactiveVar }]);
});

describe("clickPage", () => {
  it("must have click in the button", async () => {
    render(<ClickPageContainer />);

    screen.getByText("US");
  });
});
