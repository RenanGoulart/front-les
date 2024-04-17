import axios, { AxiosError } from "axios";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const errorToast = (message: string) => {
  return toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

const successToast = (message: string) => {
  return toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

const handleError = (err: AxiosError | string | Error | unknown) => {
  if (axios.isAxiosError(err)) {
    return errorToast(
      err.response?.data?.message ||
        "Houve um imprevisto, tente novamente mais tarde",
    );
  }
  if (err instanceof Error) {
    return errorToast(err.message);
  }
  if (typeof err === "string") {
    return errorToast(err);
  }
};

const handleSuccess = (message: string): void => {
  successToast(message);
};

export { handleError, handleSuccess };
