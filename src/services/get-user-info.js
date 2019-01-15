import Api from './index'

export default {
  searchUser(params) {
    return Api().get('/search/users', {
      params
    })
  },
  getUnserInfo(params) {
    return Api().get(`/users/${params}`)
  }
}