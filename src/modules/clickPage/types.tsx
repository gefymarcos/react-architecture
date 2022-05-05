export type ClickPageProps = {
  value: string;
  city: string;
};

export type City = {
  name: string;
  city: string;
  loaded: boolean;
};

export type CityQuery = {
  getCityByName: {
    country: string;
  };
};
