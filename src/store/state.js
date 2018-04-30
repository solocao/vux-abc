import { db } from 'lib/db'

const state = {
  login: db.get('login').value(),
  demo: '测试'
}
export default state
