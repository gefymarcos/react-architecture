import { useReactiveVar } from "@apollo/client";
import React, { useEffect } from "react";
import { getCityByName } from "../../modules/clickPage/actions";
import { citiesVar } from "../../modules/clickPage/vars";
import ClickPage from "../../views/clickPage";

function ClickPageContainer() {
  const city = useReactiveVar(citiesVar);

  useEffect(() => {
    if (!city.loaded) {
      getCityByName("New York");
    }
  }, [city]);

  return <ClickPage value={city.name} city={city.city} />;
}

export default ClickPageContainer;
