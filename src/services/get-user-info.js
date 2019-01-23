import Api from './index'

export default {
  searchUser(params) {
    return Api().get('/search/users', {
      params
    })
  },
  getUserInfo(name) {
    return Api().get(`/users/${name}`)
  },
  getRepos(name) {
    return Api().get(`/users/${name}/repos`)
  },
  getFollowers(name) {
    return Api().get(`/users/${name}/followers`)
  }
}