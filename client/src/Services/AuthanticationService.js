import Api from '@/services/API'

export default {
  register (credentials) {
    return Api().post('users', credentials)
  },

  login (credentials) {
    return Api().get('login', credentials)
  }
}
