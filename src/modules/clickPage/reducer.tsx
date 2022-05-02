import { Reducer } from "redux";
import { ClickPage } from "./enums";

export type ClickPageProps = {
  value: string;
};

export type ClickPageAction = {
  payload?: any;
  type: ClickPage;
};

export type ClickPageReducer = Reducer<ClickPageProps, ClickPageAction>;

const initialState: ClickPageProps = {
  value: "ainda não"
};

const clickReducer: ClickPageReducer = (
  state = initialState,
  action: ClickPageAction
) => {
  const { type, payload } = action;

  switch (type) {
    case ClickPage.VALUE:
      return {
        ...state,
        value: payload
      };
    default:
      return state;
  }
};

export default clickReducer;
