<template>
  <div class="movie-detail" v-loading="isLoading">
    <div class="detail-left">
      <movie-info class="movie-info" :movieInfo="movieInfo" ></movie-info>
      <write-review class="write-review"></write-review>
      <movie-review class="movie-review"  :movieId="movieId"></movie-review>
    </div>
    <div class="detail-right">
      <movie-map :movieName="movieName"></movie-map>
    </div>
  </div>
</template>

<script>
import {getMovieDetail} from '@/js/api'
import MovieInfo from './movieDetail/movieInfo'
import WriteReview from './movieDetail/writeReview'
import MovieReview from './movieDetail/movieReview'
import MovieMap from './movieDetail/movieMap'
import {detailFliter} from '@/js/common'
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
      allReviews: [],
      isLoading: true,
      movieName: ''
    }
  },
  created () {
    this._getMovieDetail()
  },
  methods: {
    _getMovieDetail () {
      getMovieDetail(sessionStorage.getItem('movieId')).then((res) => {
        this.movieInfo = detailFliter(res.data[0])
        // this.hotReviews = res.hotReviews
        this.isLoading = false
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
  },
  watch: {
    movieInfo (val) {
      this.movieName = val.movieName
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
    margin-left: 50px;
    width: 30%;
  }
}
</style>
