import { ApolloQueryResult } from "@apollo/client";
import apolloClient from "../config/apollo";
import { ClickPage } from "./enums";
import { GET_CITY_BY_NAME } from "./queries";
import { CityQuery } from "./types";
import { citiesVar } from "./vars";

export const clickButton = (value: string) => {
  return {
    type: ClickPage.VALUE,
    payload: value
  };
};

export const getCityByName = async (name: string) => {
  const response: ApolloQueryResult<CityQuery> = await apolloClient.query({
    query: GET_CITY_BY_NAME,
    variables: {
      name
    }
  });

  return citiesVar({
    ...citiesVar(),
    name: response?.data?.getCityByName.country,
    loaded: true
  });
};

export const clickApolloButton = (value: string) =>
  citiesVar({ ...citiesVar(), name: value, loaded: true });
