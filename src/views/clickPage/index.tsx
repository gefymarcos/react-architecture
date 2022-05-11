import React from "react";
import { useDispatch } from "react-redux";
import { clickButtonAction } from "../../modules/click/actions";
import { ClickPageProps } from "../../modules/click/types";

function ClickPage({ value, user }: ClickPageProps) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(clickButtonAction("clicou"))}
      >
        Click aqui!
      </button>
      <p>já clicou?: {value}</p>

      <p>user: {user[0].name}</p>
    </>
  );
}

export default ClickPage;
