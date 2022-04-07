import axios from "axios";

const access_token = "563492ad6f9170000100000147198ae5390d40f88e40b39bd8282f8f";

const instanceAxios = axios.create({
  baseURL: "https://instander-app.herokuapp.com",
  headers: {
    common: {
      Authorization: access_token,
    },
  },
});

export const signUpAxios = async (data) => {
  try {
    const res = await instanceAxios.post(`/api/auth/register`, data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, error: error };
  }
};
export const signInAxios = (data) => {
  instanceAxios
    .post("/api/auth/login", data)
    .then((resp) => {
      console.log("resp", resp);
    })
    .catch((error) => console.log(error));
};
