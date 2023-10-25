import { toast } from "react-hot-toast";

export const notifySuccess = (message) => {
  toast.success(message, {
    iconTheme: {
      primary: "#805ad5",
      secondary: "#fff",
    },
    duration: 2000,
  });
};

export const notifyError = (message) => {
  toast.error(message, {
    duration: 2000,
  });
};
