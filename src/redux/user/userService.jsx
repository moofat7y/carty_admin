import api from "../../utils/api";

const getUserInfo = async () => {
  const response = await api.get("/seller/profile/show");

  return response.data;
};

const verifyEmail = async (code) => {
  const response = await api.post("/seller/verification/email", code);

  return response.data;
};

const createStore = async (data) => {
  const response = await api.post("/seller/stores", data);
  return response.data;
};

const userService = { getUserInfo, verifyEmail, createStore };

export default userService;
