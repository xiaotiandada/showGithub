import Api from "./index";

export default {
  searchUser(params) {
    return Api().get("/search/users", {
      params
    });
  },
  getUserInfo(name) {
    return Api().get(`/users/${name}`);
  },
  getRepos(name, params) {
    return Api().get(`/users/${name}/repos`, {
      params
    });
  },
  getFollowers(name) {
    return Api().get(`/users/${name}/followers`);
  },
  getFollowing(name) {
    return Api().get(`/users/${name}/following`);
  }
};
