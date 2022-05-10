import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { getUsersAction } from "../../modules/user/actions";
import ClickPage from "../../views/clickPage";

function ClickPageContainer() {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.click);
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user.users
  );

  useEffect(() => {
    if (!data) {
      dispatch(getUsersAction());
    }
  }, [dispatch, data]);

  return (
    <>
      {loading && <p>loading</p>}
      {data && <ClickPage value={value} user={data} />}
      {error && <p>{error}</p>}
    </>
  );
}

export default ClickPageContainer;
