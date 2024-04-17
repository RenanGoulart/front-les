import axios from "axios";
import { handleError } from "./toastify";

export const baseURL = "http://localhost:3333";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      handleError(
        `Erro ${error.response.status}: ${error.response.data.message}`,
      );
      console.error("Erro de resposta:", error.response.status);
    } else if (error.request) {
      handleError("Erro ao tentar se comunicar com o servidor");
      console.error("Erro de requisição:", error.request);
    } else {
      handleError(
        "Erro ao configurar requisição. Por favor, tente novamente mais tarde.",
      );
      console.error("Erro ao configurar requisição:", error.message);
    }
    return Promise.reject(error);
  },
);

const api = axios.create({
  baseURL,
});

export default api;
