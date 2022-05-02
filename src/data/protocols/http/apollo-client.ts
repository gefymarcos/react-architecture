import { DocumentNode } from "graphql";

export type HttpQueryParams<T> = {
  query: DocumentNode;
  variables?: { [key: string]: T };
};

export type HttpMutationParams<T> = {
  mutation: DocumentNode;
  variables?: { [key: string]: T };
};

export interface HttpGraphqlClient<T, R> {
  query: ({ query, variables }: HttpQueryParams<T>) => R;
  mutation: ({ mutation, variables }: HttpMutationParams<T>) => R;
}
