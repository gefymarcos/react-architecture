import { ClickPage } from "./enums";

export const clickButton = (value: string) => {
  return {
    type: ClickPage.VALUE,
    payload: value
  };
};
