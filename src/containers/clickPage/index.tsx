import { useReactiveVar } from "@apollo/client";
import React, { useEffect } from "react";
import { getCityByName } from "../../modules/actions";
import { citiesVar } from "../../modules/vars";
import ClickPage from "../../views/clickPage";

function ClickPageContainer() {
  const city = useReactiveVar(citiesVar);

  useEffect(() => {
    console.log("city -->> ", city);
    if (!city.loaded) {
      console.log("entrou -->> ", city);
      getCityByName("New York");
    }
  }, [city]);

  return <ClickPage value={city.name} />;
}

export default ClickPageContainer;
