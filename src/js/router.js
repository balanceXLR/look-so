import router from '@/router'

export function goMovieDetail (movieId) {
  router.push({
    name: 'movieDetail',
    params: {
      movieId: movieId
    }
  })
}
export function goRank () {
  router.push({
    name: 'rank'
  })
}
export function goMovie () {
  router.push({
    name: 'movie'
  })
}
export function goReview () {
  router.push({
    name: 'review'
  })
}
export function goUserHome (type) {
  if (type === 0) {
    router.push({
      name: 'userHome'
    })
  } else if (type === 1) {
    router.push({
      name: 'adminHome'
    })
  }
}
export function goMovieHome () {
  router.push({
    name: 'recommend'
  })
}
