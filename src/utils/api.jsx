import axios from "axios";

// const token = JSON.parse(window.localStorage.getItem("token"));
const api = axios.create({
  baseURL: "https://v1.cartyi.com/api/",
});
api.interceptors.request.use(
  (req) => {
    const token = JSON.parse(window.localStorage.getItem("token"));

    token ? (req.headers["Authorization"] = "Bearer " + token) : "";
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    // console.log(err);
    const status = err.response ? err.response.status : null;
    if (
      status === 401 &&
      (err.response.data.error === "رمز التحقق اصبح غير صالح" ||
        err.response.data.error === "الرجاء قم بتسجيل الدخول")
    ) {
      window.localStorage.clear();
      window.location.replace("/auth/signin");
    }
    throw err;
  }
);

export default api;
