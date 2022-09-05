import API from "./API";

const BASE_URL = "https://630333660de3cd918b2fafe0.mockapi.io/cms/class_schedule";

export const getScheduleAPI = async () => {
  const response = await API.HTTP.get(BASE_URL);
  return response.data;
};

export const detailScheduleapi = async (id) => {
  const response = await API.HTTP.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const postScheduleAPI = async (data) => {
  const response = await API.HTTP.post(BASE_URL, data);
  return response.data;
};

export const putScheduleAPI = async (data) => {
  const Datas = {
    day: data.day,
    start_time: data.start_time,
    end_time: data.end_time,
    employee_id: data.employee_id,
    product_id: data.product_id
  };
  const response = await API.HTTP.put(`${BASE_URL}/${data.id}`, Datas);
  return response.data;
};
