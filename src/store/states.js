export default {
  user: JSON.parse(sessionStorage.getItem('user')) || {},
  isLogin: JSON.parse(sessionStorage.getItem('user')),
  currentMoive: ''
}
