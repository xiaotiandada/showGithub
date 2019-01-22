import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://api.github.com",
    timeot: 1000
  });
};
