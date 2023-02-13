import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "https://docstream-server.onrender.com/api/v1/video";

// const getAllPublicPosts = () => {
//   return axios.get(API_URL + "/public");
// };

const getAllVideos = () => {
  return axios.get(API_URL , { headers: authHeader() });
};

const postService = {
  getAllVideos,
};

export default postService;