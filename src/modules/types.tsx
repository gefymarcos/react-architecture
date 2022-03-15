export type ClickPageProps = {
  value: string;
};

export type City = {
  name: string;
  loaded: boolean;
};

export type CityQuery = {
  getCityByName: {
    country: string;
  };
};
