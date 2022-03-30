import React from "react";
import { clickApolloButton } from "../../modules/actions";
import { ClickPageProps } from "../../modules/types";

function ClickPage({ value }: ClickPageProps) {
  return (
    <>
      <button type="button" onClick={() => clickApolloButton("clicou")}>
        Click aqui!
      </button>
      <p>já clicou?: {value}</p>
    </>
  );
}

export default ClickPage;
