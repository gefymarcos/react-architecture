import reducer from "../reducer";
import { ClickPage } from "../enums";

describe("payment reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: ClickPage.VALUE })).toEqual({
      value: undefined
    });
  });

  it("should return the initial state", () => {
    expect(
      reducer(undefined, { type: ClickPage.VALUE, payload: "clicked" })
    ).toEqual({
      value: "clicked"
    });
  });
});
