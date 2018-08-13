import router from '@/router'

export function goMovieDetail (movieId) {
  sessionStorage.removeItem('currentMovie')
  router.push({
    name: 'movieDetail',
    param: {
      movieId: movieId
    }
  })
  sessionStorage.setItem('currentMovie', movieId)
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
