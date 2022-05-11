import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { clickButtonAction } from "../actions";
import { ClickPage } from "../enums";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe("[payment] Actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("dispatches [CLICK PAGE] VALUE when click in button", async () => {
    const expectedActions = { type: ClickPage.VALUE, payload: "clicked" };

    expect(clickButtonAction("clicked")).toEqual(expectedActions);
  });
});
