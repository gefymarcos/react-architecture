import { ClickPage } from "./enums";

const clickButtonAction = (value: string) => {
  return {
    type: ClickPage.VALUE,
    payload: value
  };
};

export { clickButtonAction };
