import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://aaebike.com:9090/'
axios.defaults.withCredentials = true

export const get = (url, params) => {
  return axios.get(url + '?' + qs.stringify(params)).then(x => x.data)
}

export const post = (url, params) => {
  return axios.post(url, qs.stringify(params)).then(x => x.data)
}
