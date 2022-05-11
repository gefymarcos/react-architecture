import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
import { getUsersAction } from "../actions";
import { Users } from "../enums";

enableFetchMocks();

const dataMock = {
  name: "usuarioteste"
};

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe("[payment] Actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("dispatches CONFIG_PAYMENT_FULLFILLED after a successfull load configs", async () => {
    fetchMock.mockResponse(async () => JSON.stringify(dataMock));

    const expectedActions = [
      { type: Users.REQUEST },
      {
        type: Users.FULL_FILLED,
        payload: dataMock
      }
    ];
    return store.dispatch(getUsersAction() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("dispatches CONFIG_PAYMENT_REJECTED after a error load configs", async () => {
    fetchMock.mockRejectedValue({
      status: 500,
      statusText: "internal server error",
      body: "Erro ao carregar!"
    });

    const expectedActions = [
      { type: Users.REQUEST },
      {
        type: Users.REJECTED,
        payload: {
          status: 500,
          statusText: "internal server error",
          body: "Erro ao carregar!"
        }
      }
    ];
    return store.dispatch(getUsersAction() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
