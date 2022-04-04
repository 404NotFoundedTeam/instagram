import axios from "axios";

const API_KEY = "563492ad6f91700001000001d8e30e5a76444c43bf4e3be9cfa053e8";

const instanceAxios = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    common: {
      Authorization: API_KEY,
    },
  },
});

export const getImg = async (index) => {
  try {
    const res = await instanceAxios.get(`curated?page=${index}&per_page=30`);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
