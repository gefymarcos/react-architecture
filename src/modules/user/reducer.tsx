import { Reducer } from "redux";
import { Users } from "./enums";

export type UserPageProps = {
  users: any;
};

export type UserPageAction = {
  payload?: any;
  type: Users;
};

export type UserPageReducer = Reducer<UserPageProps, UserPageAction>;

const initialState: UserPageProps = {
  users: {
    loading: false,
    data: null,
    error: ""
  }
};

const UserReducer: UserPageReducer = (
  state = initialState,
  action: UserPageAction
) => {
  const { type, payload } = action;

  switch (type) {
    case Users.REQUEST:
      return {
        users: {
          loading: true
        }
      };
    case Users.FULL_FILLED:
      return {
        users: {
          loading: false,
          data: { ...payload }
        }
      };
    case Users.REJECTED:
      return {
        users: {
          loading: false,
          error: "Erro ao carregar usuário!"
        }
      };
    default:
      return state;
  }
};

export default UserReducer;
