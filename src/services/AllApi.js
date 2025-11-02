import axios from "axios";

const allApi = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response;
  } catch (error) {
    console.error("API Error:", error);
  }
};

export default allApi;
