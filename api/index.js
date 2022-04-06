import axios from "axios";

const API_KEY = "563492ad6f91700001000001d8e30e5a76444c43bf4e3be9cfa053e8";

const instanceAxios = axios.create({
  baseURL: "http://192.168.43.215:8080/api",
  // headers: {
  //   common: {
  //     Authorization: API_KEY,
  //   },
  // },
});

export const signUpAxios = async (data) => {
  try {
    const res = await instanceAxios.post(`/auth/register`, data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, error: error };
  }
};
