// import { Queue } from "../../lib/queue";

// const queue = new Queue();

type ApolloMock = {
  data: any;
  reactiveVar?: any;
};

export const startMockWith = (apolloMock: ApolloMock[]) => {
  jest.doMock("@apollo/client", () => apolloMock);
};
