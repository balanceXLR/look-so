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
