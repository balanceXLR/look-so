export default {
  user: JSON.parse(sessionStorage.getItem('user')) || {},
  isLogin: JSON.parse(sessionStorage.getItem('user')),
  currentMoive: sessionStorage.getItem('currentMovie') || -1,
  searchResult: JSON.parse(sessionStorage.getItem('searchResult')) || []
}
