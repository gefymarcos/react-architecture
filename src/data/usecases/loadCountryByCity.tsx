import { ApolloQueryResult } from "@apollo/client";
import apolloClient from "../../config/apollo";
import { GET_CITY_BY_NAME } from "../../modules/clickPage/queries";
import { CityQuery } from "../../modules/clickPage/types";

export default async function loadCountryByCity({
  name
}: {
  name: string;
}): Promise<string> {
  const { data }: ApolloQueryResult<CityQuery> = await apolloClient.query({
    query: GET_CITY_BY_NAME,
    variables: {
      name
    }
  });

  if (data) {
    return data.getCityByName.country;
  }

  return "";
}
