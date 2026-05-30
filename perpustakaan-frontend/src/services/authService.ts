import api from "./api";

export const loginAdmin = async (
  username: string,
  password: string
) => {

  const response = await api.post(
    "/loginadmin",
    {
      username,
      password,
    }
  );

  return response.data;
};