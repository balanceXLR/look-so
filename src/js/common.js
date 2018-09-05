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
export function resFilter (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty('cover')) {
      arr[i].cover = baseUrl + arr[i].cover
    }
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
  }
}
