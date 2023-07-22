import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5ea51a74b5594af5ab2756e2aa95afe0",
  },
});
