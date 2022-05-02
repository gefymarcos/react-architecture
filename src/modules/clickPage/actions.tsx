import { ClickPage } from "./enums";
import loadCountryByCity from "../../data/usecases/loadCountryBy/loadCountryByCity";
import { citiesVar } from "./vars";

export const clickButton = (value: string) => {
  return {
    type: ClickPage.VALUE,
    payload: value
  };
};

export const getCityByName = async (name: string) =>
  citiesVar({
    ...citiesVar(),
    name: await loadCountryByCity({ name }),
    loaded: true
  });

export const clickApolloButton = (value: string) =>
  citiesVar({ ...citiesVar(), name: value, loaded: true });
