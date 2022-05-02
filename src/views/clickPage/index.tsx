import React from "react";
import { clickApolloButton } from "../../modules/clickPage/actions";
import { ClickPageProps } from "../../modules/clickPage/types";

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
