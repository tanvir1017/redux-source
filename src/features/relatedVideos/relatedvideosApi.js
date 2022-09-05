import axios from "../../utils/axios";

// tags_like=react&tags_like=script&_limit=5&id_ne=6

export const getRelatedVideos = async ({ id, tags }) => {
  const limit = 5;
  let searchQuery =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `&id_ne=${id}&_limit=${limit}`;
  const response = await axios.get(`/videos?${searchQuery}`);
  return response.data;
};
