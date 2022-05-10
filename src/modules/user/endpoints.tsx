import { get } from "../../config/fetch";

const routes = {
  users: () => "https://gorest.co.in/public/v2/users"
};

const fetchUsers = async (): Promise<any> =>
  get({
    url: routes.users()
  });

export { fetchUsers };
