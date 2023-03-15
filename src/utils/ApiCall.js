import axios from "axios";

export const apiCall = async (method, url, data = null, headers = {}) => {
  try {
    const options = {
      method,
      url,
      headers,
    };
    if (data) {
      options.data = data;
    }
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
