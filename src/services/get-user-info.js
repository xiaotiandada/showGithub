import Api from './index'

export default {
  searchUser(params) {
    return Api().get('/search/users', {
      params
    })
  }
}