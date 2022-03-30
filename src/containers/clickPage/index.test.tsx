import React from "react";
import { render } from "@testing-library/react";
// import { MockedProvider } from "@apollo/client/testing";
// import { InMemoryCache } from "@apollo/client";
import ClickPageContainer from ".";
// import { GET_CITY_BY_NAME } from "../../modules/queries";

// const mocks = [
//   {
//     request: {
//       query: GET_CITY_BY_NAME,
//       variables: {
//         name: "New York"
//       }
//     },
//     result: {
//       data: {
//         country: { name: "US" }
//       }
//     }
//   }
// ];

describe("clickPage", () => {
  it("must have click in the button", async () => {
    // const cache = new InMemoryCache();

    render(
      // <MockedProvider cache={cache} mocks={mocks} addTypename={false}>
      <ClickPageContainer />
      // </MockedProvider>
    );
  });
});
