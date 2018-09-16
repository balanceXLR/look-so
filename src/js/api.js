import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
// 用户登录
export const baseUrl = 'http://192.168.1.102:8080/lookso'
// const config = {
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   responseType: 'json'
// }
export function login (userName, password) {
  let param = `/user/login.json?name=${userName}&password=${password}`
  return axios.post(param).then((res) => {
    if (res.status === 200) {
      return Promise.resolve(res.data)
    }
  })
}
// 用户注册
export function register (userName, password) {
  let param = `/user/register.json?name=${userName}&password=${password}`
  return axios.post(param).then((res) => {
    if (res.status === 200) {
      return Promise.resolve(res.data)
    }
  })
}
// 获取轮播图 4张
export function getRecommendSlider () {
  // let param = `${baseUrl}/movie/slider.json`
  return axios.post('/movie/slider.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取首页榜单 9部
export function getRecommendRank () {
  return axios.post('/movie/top.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取首页推荐电影 热门，国语，喜剧，科幻，悬疑，爱情，治愈 各6部；其中热门类别的电影是后台处理，并非实际有这个类别
export function getRecommendMovies (sort) {
  return axios.post('/movie/recommend.json?' + qs.stringify({
    sort: sort
  })).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取首页推荐评论 5条
export function getRecommendReviews () {
  return axios.post('/review/hot_comment.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取搜索电影名
export function getAllMovieName () {
  return axios.post(`/movie/similar.json`).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取分类电影 sort为类别 传中文，如：科幻；page为当前页
export function getSortMovies (sort, page) {
  return axios.post('/movie/sort.json?sort=' + sort + '&page=' + page).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取所有评论 type：0为按点赞排行 1为按时间排行
export function getAllReviews (type, page) {
  return axios.post('/review/hot_review.json?' + qs.stringify({
    type: type,
    page: page
  })).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 排行页面获取所有排行
export function getAllRank (page) {
  return axios.post('/movie/ranking.json?' + qs.stringify({
    page: page
  })).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 搜索
export function search (page, keyWord) {
  // 实际用
  return axios.post('/movie/search.json?' + qs.stringify({
    page: page,
    message: keyWord
  })).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取电影详情
export function getMovieDetail (movieId) {
  return axios.post('/movie/information.json?' + qs.stringify({
    id: movieId
  })).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取电影评分和评价人数
export function getMovieScore (id) {
  return axios.post('/review/comment_num.json?' + qs.stringify({
    id: id
  })).then(res => {
    return Promise.resolve(res.data)
  })
}
// 收藏
export function movieCollect (uid, mid) {
  return axios.post('/movie/collect.json?' + qs.stringify({
    uid: uid,
    mid: mid
  })).then(res => {
    return res.data
  })
}
// 取消收藏
export function movieUnCollect (id) {
  return axios.post('/movie/cancel_collect.json?' + qs.stringify({
    id: id
  })).then(res => {
    return res.data
  })
}
// 收藏状态
export function movieCollectState (uid, mid) {
  return axios.post('/movie/iscollect.json?' + qs.stringify({
    uid: uid,
    mid: mid
  })).then(res => {
    return res.data
  })
}
// 获取电影所有影评（每次10条）
export function getMovieAllReviews (movieId, page) {
  return axios.post('/review/comment.json?id=' + movieId).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 写影评 传参如下
// param.append('movieId', this.currentMovie)
// param.append('userId', this.user.userId)
// param.append('reviewScore', this.reviewScore)
// param.append('reviewCont', this.reviewCont)
export function writeReview (param) {
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
}
// 实际用
// return axios.post('/review/writeReview', param).then((res) => {
//   if (res.status === 200) {
//     return Promise.resolve('评论成功')
//   } else {
//     Message({
//       type: 'warning',
//       text: '评论失败'
//     })
//   }
// })
// 获取用户详细信息
export function getUserInfo (userId) {
  return axios.get('/static/json/userInfo.json', {
    params: {
      userId: userId
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

// 修改用户信息 传参如下
// param.append('userId', this.userInfo.userId)
// param.append('userNick', this.userInfo.userNick)
// param.append('userSex', this.userInfo.userSex)
// param.append('userDesc', this.userInfo.userDesc)
export function editUser (userInfo) {
  return axios.post('/user/editUser', userInfo).then(res => {
    return Promise.resolve(res.data)
  })
}
// 获取用户收藏
export function getUserCollect (userId, page) {
  return axios.post('collect/user_collect.json?' + qs.stringify({
    id: userId,
    page: page
  })).then(res => {
    return Promise.resolve(res.data)
  })
}
// 获取用户评论
export function getUserReview (userId, page) {
  return axios.post('/review/user_comment.json?' + qs.stringify({
    id: userId,
    page: page
  })).then(res => {
    return Promise.resolve(res.data)
  })
}
// 管理员上传电影 传参如下
// param.append('cover', xxx)
// param.append('name', xxx)
// param.append('show', xxx)
// param.append('time', xxx)
// param.append('sort', xxx)
// param.append('ctry', xxx)
// param.append('dir', xxx)
// param.append('act', xxx)
// param.append('intro', xxx)
export function uploadMovie (param) {
  return axios.post('/admin/uploadMovie', param).then(res => {
    if (res.status === 200) {
      Message({
        type: 'success',
        text: '上传成功'
      })
    } else {
      Message({
        type: 'warning',
        text: '上传失败'
      })
    }
  })
}
// 管理员获取所有用户
export function getAllUser () {
  return axios.post('/manager/all_user.json').then(res => {
    return Promise.resolve(res.data)
  })
}
// 封禁或恢复用户
export function manageUser (userId) {
  return axios.post('/admin/manageUser').then(res => {
    if (res.status === 200) {
      // data中返回一个status：用户封禁或恢复后的状态（1或2）
      return Promise.resolve(res.data)
    } else {
      Message({
        type: 'warning',
        text: '操作失败'
      })
    }
  })
}
// 管理员获取所有电影
export function getAdminMovie (currentPage) {
  return axios.get('/static/json/adminMovie.json', {
    params: {
      page: currentPage
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// 上架或下架电影
export function manageMovie (userId) {
  return axios.post('/admin/manageMovie').then(res => {
    if (res.status === 200) {
      // data中返回一个status：用户封禁或恢复后的状态（1或2）
      return Promise.resolve(res.data)
    } else {
      Message({
        type: 'warning',
        text: '操作失败'
      })
    }
  })
}
// 管理员删除影评
export function manageReview (movieId) {
  return axios.post('/admin/manageReview').then(res => {
    if (res.status === 200) {
      return Promise.resolve('删除成功')
    } else {
      Message({
        type: 'warning',
        text: '删除失败'
      })
    }
  })
}
