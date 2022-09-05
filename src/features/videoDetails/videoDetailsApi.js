import axios from "../../utils/axios";

export const videoDetailsApi = async (videId) => {
  const response = await axios.get(`videos?id=${videId}`);
  return response.data;
};
