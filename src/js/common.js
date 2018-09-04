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
