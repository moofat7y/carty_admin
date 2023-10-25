import api from "../../utils/api";

const signUp = async (data) => {
  const response = await api.post("/seller/register", data);

  return response.data;
};
const signIn = async (data) => {
  const response = await api.post("/seller/login", data);
  return response.data;
};

const authService = { signUp, signIn };

export default authService;
