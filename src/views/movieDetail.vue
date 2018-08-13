<template>
  <div class="movie-detail">
    <div class="detail-left">
      <movie-info :movieInfo="movieInfo" class="movie-info"></movie-info>
      <write-review class="write-review"></write-review>
    </div>
  </div>
</template>

<script>
import {getMovieDetail} from '@/js/api'
import MovieInfo from './movieDetail/movieInfo'
import WriteReview from './movieDetail/writeReview'
export default {
  components: {
    MovieInfo,
    WriteReview
  },
  data () {
    return {
      movieInfo: {},
      hotReviews: []
    }
  },
  created () {
    this._getMovieDetail()
  },
  methods: {
    _getMovieDetail () {
      getMovieDetail(this.movieId).then((res) => {
        this.movieInfo = res.movieInfo
        this.hotReviews = res.hotReviews
        this.allReviews = res.allReviews
      })
    }
  },
  computed: {
    movieId () {
      return JSON.parse(sessionStorage.getItem('currentMovie'))
    },
    score: {
      get: function () { return this.movieInfo.reviewScore / 2 },
      set: function () {}
    }
  }
}

</script>
<style lang="less" scoped>
.movie-detail {
  .detail-left {
    width: 70%;
    .write-review {
      margin-top: 20px;
    }
  }
}
</style>
