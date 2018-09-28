import {baseUrl} from '@/js/api'
export function doAlert (which, type, message) {
  which.$message({
    type: type,
    message: message
  })
}
export function level (number) {
  switch (number) {
    case 0 :
      return '影评小白'
      break
    case 1 :
      return '影评高手'
      break
    case 2 :
      return '影评大师'
      break
    case 3 :
      return '资深影评专家'
      break
  }
}

export function sex (number) {
  if (number === 0) {
    return '男'
  } else if (number === 1) {
    return '女'
  }
}
export function movieFliter (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].movie.hasOwnProperty('cover')) {
      arr[i].movie.cover = baseUrl + arr[i].movie.cover
    }
  }
  return arr
}
export function sliderFliter (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty('slider')) {
      arr[i].slider = baseUrl + arr[i].slider
    }
    if (arr[i].hasOwnProperty('cover')) {
      arr[i].cover = baseUrl + arr[i].cover
    }
  }
  return arr
}
export function userFliter (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty('head')) {
      arr[i].head = baseUrl + arr[i].head
    }
    if (arr[i].hasOwnProperty('level')) {
      switch (arr[i].level) {
        case 0 :
          arr[i].level = '影评小白'
          break
        case 1 :
          arr[i].level = '影评高手'
          break
        case 2 :
          arr[i].level = '影评大师'
          break
        case 3 :
          arr[i].level = '资深影评专家'
          break
      }
    }
    if (arr[i].hasOwnProperty('sex')) {
      switch (arr[i].sex) {
        case 0 :
          arr[i].sex = '男'
          break
        case 1:
          arr[i].sex = '女'
          break
      }
    }
    if (arr[i].hasOwnProperty('time')) {
      arr[i].time = arr[i].time.substring(0, 19)
    }
  }
  return arr
}
export function detailFliter (obj) {
  if (obj.hasOwnProperty('cover')) {
    console.log(1)
    obj.cover = baseUrl + obj.cover
  }
  return obj
}

export function dateFtt (fmt, date) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return fmt
}
