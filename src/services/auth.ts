import api from "../lib/axios";

export const userAuthenticate = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
