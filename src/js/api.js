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
      // userType: 1为普通用户，2为管理员
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
// 获取轮播图 4张
export function getRecommendSlider () {
  return axios.get('/static/json/recommendSlider.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取首页榜单 9部
export function getRecommendRank () {
  return axios.get('/static/json/recommendRank.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取首页推荐电影 热门，国语，喜剧，科幻，悬疑，爱情，治愈 各6部；其中热门类别的电影是后台处理，并非实际有这个类别
export function getRecommendMovies () {
  return axios.get('/static/json/recommendMovies.json').then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取首页推荐评论 5条
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
// 获取分类电影 sort为类别 传中文，如：科幻；page为当前页
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
// 获取所有评论 type：'欢迎'为按点赞排行 '最新'为按时间排行
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
  return axios.get('/static/json/userCollect.json', {
    params: {
      userId: userId,
      page: page
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// 获取用户评论
export function getUserReview (userId, page) {
  return axios.get('/static/json/userReview.json', {
    params: {
      userId: userId,
      page: page
    }
  }).then(res => {
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
  return axios.get('/static/json/allUser.json').then(res => {
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
