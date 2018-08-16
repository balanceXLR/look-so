<template>
  <div class="movie-detail">
    <div class="detail-left">
      <movie-info class="movie-info" :movieInfo="movieInfo" ></movie-info>
      <write-review class="write-review"></write-review>
      <movie-review class="movie-review" :hotReviews="hotReviews" :movieId="movieId"></movie-review>
    </div>
    <div class="detail-right">
      <movie-map></movie-map>
    </div>
  </div>
</template>

<script>
import {getMovieDetail} from '@/js/api'
import MovieInfo from './movieDetail/movieInfo'
import WriteReview from './movieDetail/writeReview'
import MovieReview from './movieDetail/movieReview'
import MovieMap from './movieDetail/movieMap'
export default {
  components: {
    MovieInfo,
    WriteReview,
    MovieReview,
    MovieMap
  },
  data () {
    return {
      movieInfo: {},
      hotReviews: [],
      allReviews: []
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
      })
    }
  },
  computed: {
    movieId () {
      // console.log(this.$route.params.movieId)
      return this.$route.params.movieId
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
  display: flex;
  .detail-left {
    width: 70%;
    .write-review, .movie-review {
      margin-top: 20px;
    }
  }
  .detail-right {
    width: 30%;
  }
}
</style>
