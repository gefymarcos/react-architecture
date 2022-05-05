import { makeVar, ReactiveVar } from "@apollo/client";
import { City } from "./types";

export const citiesVar: ReactiveVar<City> = makeVar({
  name: "",
  city: "",
  loaded: false
});
