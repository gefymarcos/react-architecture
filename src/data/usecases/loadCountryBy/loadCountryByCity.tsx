import { ApolloQueryResult } from "@apollo/client";
import { HttpClient } from "../../../infra/http/apollo-client";
import { GET_CITY_BY_NAME } from "../../../modules/clickPage/queries";
import { CityQuery } from "../../../modules/clickPage/types";

export default async function loadCountryByCity({
  name
}: {
  name: string;
}): Promise<string> {
  const { data }: ApolloQueryResult<CityQuery> =
    await new HttpClient().query<any>({
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
