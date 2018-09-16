import {baseUrl} from '@/js/api'
export function doAlert (which, type, message) {
  which.$message({
    type: type,
    message: message
  })
}
export function level (number) {
  if (number === 1) {
    return '评论小白'
  } else if (number === 2) {
    return '评论高手'
  } else if (number === 3) {
    return '评论大师'
  } else if (number === 4) {
    return '资深评论专家'
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
