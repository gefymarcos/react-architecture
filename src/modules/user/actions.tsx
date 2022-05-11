import { RequestError } from "../../config/fetch";
import { AppDispatch } from "../../config/store";
import { fetchUsers } from "./endpoints";
import { Users } from "./enums";

const usersRequest = () => {
  return {
    type: Users.REQUEST
  };
};

const usersFullFilled = (payment: any) => {
  return {
    type: Users.FULL_FILLED,
    payload: payment
  };
};

const usersFullRejected = (err: RequestError) => {
  return {
    type: Users.REJECTED,
    payload: err
  };
};

const getUsersAction = () => async (dispatch: AppDispatch) => {
  dispatch(usersRequest());
  try {
    const users = await fetchUsers();
    dispatch(usersFullFilled(users));
  } catch (err) {
    console.warn("err at load user information", err);
    dispatch(usersFullRejected(err));
  }
};

export { getUsersAction };
