import API from "./API";
const BASE_URL = "https://6312108a19eb631f9d7f06f2.mockapi.io/products";

export const getProductsAPI = async () => {
  const response = await API.HTTP.get(BASE_URL);
  return response.data;
};

export const DetailProductAPI = async (id) => {
  const response = await API.HTTP.get(`${BASE_URL}/${id}`);
  return response.data;
};
