import allApi from "./AllApi";
import { baseUrl } from "./BaseUrl";

export const getData = async () => {
  return await allApi("get", `${baseUrl}/studentDetails`);
};

export const postData = async (data) => {
  return await allApi("post", `${baseUrl}/studentDetails`, data);
};

export const deleteData = async (id) => {
  return await allApi("delete", `${baseUrl}/studentDetails/${id}`);
};

export const editData = async (id, data) => {
  return await allApi("put", `${baseUrl}/studentDetails/${id}`, data);
};
