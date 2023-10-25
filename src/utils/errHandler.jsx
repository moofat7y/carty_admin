export const errHandler = (err) => {
  // console.log(err);
  // console.log(Object.values(err));
  if (typeof err.response?.data?.error === "object") {
    return Object.values(err.response.data.error).join(" ");
  }
  if (err?.response?.data?.error) {
    return err.response.data.error;
  }
};

export default errHandler;
