import { ApolloQueryResult, FetchResult } from "@apollo/client";
import apolloClient from "../../../config/apollo";
import {
  HttpGraphqlClient,
  HttpMutationParams,
  HttpQueryParams
} from "../protocols/graphql-client";

export class HttpClient implements HttpGraphqlClient<any, any> {
  async query<T>({ query, variables }: HttpQueryParams<T>) {
    const { data }: ApolloQueryResult<T> = await apolloClient.query({
      query,
      variables
    });

    return data;
  }

  async mutation<T>({ mutation, variables }: HttpMutationParams<T>) {
    const mutationResult: FetchResult<
      T,
      Record<string, T>,
      Record<string, T>
    > = await apolloClient.mutate({
      mutation,
      variables
    });

    return mutationResult;
  }
}
