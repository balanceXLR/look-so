import axios from 'axios'
import { Message } from 'element-ui'
// 用户登录，前端测试暂时用json返回
export function login (userName, password) {
  // 测试用
  return axios.get('/static/json/user.json', {
    userName: userName,
    password: password
  }).then((res) => {
    if (res.status === 200) {
      // 登录成功返回data的一个user对象，失败返回空对象
      return Promise.resolve(res.data)
    }
  })
  // 实际用
  // return axios.post('user/userLogin', {
  //   userName: userName,
  //   password: password
  // }).then((res) => {
  //   if (res.status === 200) {
  //     return Promise.resolve(res.data)
  //   }
  // })
}
// 用户注册，前端测试暂时用json返回
export function register (userName, password) {
  // 测试用
  return axios.get('/static/json/user.json', {
    userName: userName,
    password: password
  }).then((res) => {
    if (res.status === 200) {
      // 注册成功返回data的一个user对象，失败返回空对象
      return Promise.resolve(res.data)
    }
  })
  // 实际用
  // return axios.post('user/userRegister', {
  //   userName: userName,
  //   password: password
  // }).then((res) => {
  //   if (res.status === 200) {
  //     return Promise.resolve(res.data)
  //   }
  // })
}
// 获取轮播图
export function getRecommendSlider () {
  return axios.get('/static/json/recommendSlider.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取首页榜单
export function getRecommendRank () {
  return axios.get('/static/json/recommendRank.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取首页推荐电影
export function getRecommendMovies () {
  return axios.get('/static/json/recommendMovies.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取首页推荐评论
export function getRecommendReviews () {
  return axios.get('/static/json/recommendReviews.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取搜索电影名
export function getAllMovieName () {
  return axios.get('/static/json/allMovieName.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取分类电影
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
// 获取所有评论
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
// 排行页面获取所有排行
export function getAllRank (page) {
  return axios.get('/static/json/allRank.json', {
    params: {
      page: page
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 搜索
export function search (keyWord) {
  // 实际用
  // return axios.post('search', {
  //   params: keyWord
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // })
  // 测试用
  return axios.get('/static/json/search.json', {
    params: keyWord
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取电影详情
export function getMovieDetail (movieId) {
  return axios.get('/static/json/movieDetail.json', {
    params: {
      movieId: movieId
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取电影所有影评（每次10条）
export function getMovieAllReviews (movieId, page) {
  return axios.get('/static/json/movieAllReviews.json', {
    params: {
      movieId: movieId,
      page: page
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 写影评
export function writeReview (movieId, userId, score, text) {
  // 测试用
  return axios.get('/static/json/user.json').then((res) => {
    if (res.status === 200) {
      // 登录成功返回data的一个user对象，失败返回空对象
      return Promise.resolve('评论成功')
    } else {
      Message({
        type: 'warnring',
        text: '评论失败'
      })
    }
  })
  // 实际用
  // return axios.post('/review/writeReview', {
  //   params: {
  //     movieId: movieId,
  //     userId: userId,
  //     reviewScore: score,
  //     reviewCont: text
  //   }
  // }).then((res) => {
  //   if (res.status === 200) {
  //     return Promise.resolve('评论成功')
  //   } else {
  //     Message({
  //       type: 'warning',
  //       text: '评论失败'
  //     })
  //   }
  // })
}
