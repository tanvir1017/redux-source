import axios from "../../utils/axios";

export const getVideos = async ({ tags, searchText, pageNumber }) => {
  const limit = 8;
  let searchQuery = "";

  if (tags.length > 0) {
    searchQuery += tags.map((tag) => `title_like=${tag}`).join("&");
  }

  if (searchText !== "") {
    searchQuery += `&q=${searchText}`;
  }

  // const response = await axios.get(`/videos?_page=${number}&_limit=8`);
  const response = await axios.get(
    `/videos?${searchQuery}&_page=${pageNumber}&_limit=${limit}`
  );
  return response.data;
};
