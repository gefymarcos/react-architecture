import reducer from "../reducer";
import { Users } from "../enums";

describe("payment reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: Users.REQUEST })).toEqual({
      users: {
        loading: true
      }
    });
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: Users.REQUEST })).toEqual({
      users: {
        loading: true
      }
    });
  });

  it("should return the initial state", () => {
    expect(
      reducer(undefined, {
        type: Users.FULL_FILLED,
        payload: { name: "my user" }
      })
    ).toEqual({
      users: {
        loading: false,
        data: { name: "my user" }
      }
    });
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: Users.REJECTED })).toEqual({
      users: {
        loading: false,
        error: "Erro ao carregar usuário!"
      }
    });
  });
});
