// test git
import axios from 'axios'
// 用户登录，前端测试暂时用json返回
export function login (userName, password) {
  return axios.get('/static/json/user.json', {
    userName: userName,
    password: password
  }).then((res) => {
    if (res.status === 200) {
      // 登录成功返回data的一个user对象，失败返回空
      return Promise.resolve(res.data)
    }
  })
}
export function getRecommendSlider () {
  return axios.get('/static/json/recommendSlider.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getRecommendRank () {
  return axios.get('/static/json/recommendRank.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getRecommendMovies () {
  return axios.get('/static/json/recommendMovies.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getRecommendReviews () {
  return axios.get('/static/json/recommendReviews.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getAllMovieName () {
  return axios.get('/static/json/allMovieName.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getSortMovies (sort, page) {
  return axios.get('/static/json/sortMovies.json', {
    params: {
      movieSort: sort,
      page: page
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getAllReviews (type, page) {
  return axios.get('/static/json/allReviews.json', {
    params: {
      type: type,
      page: page
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getAllRank (page) {
  return axios.get('/static/json/allRank.json', {
    params: {
      page: page
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getMovieDetail (movieId) {
  return axios.get('/static/json/movieDetail.json', {
    params: {
      movieId: movieId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
