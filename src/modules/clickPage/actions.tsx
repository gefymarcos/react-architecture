import loadCountryByCity from "../../data/usecases/loadCountryBy/loadCountryByCity";
import { citiesVar } from "./vars";

export const getCityByName = async (name: string) => {
  const result = await loadCountryByCity({ name });

  citiesVar({
    ...citiesVar(),
    city: result,
    loaded: true
  });
};

export const clickApolloButton = (value: string) =>
  citiesVar({ ...citiesVar(), name: value, loaded: true });
