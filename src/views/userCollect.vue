<template>
  <div class="user-collect">
      <div class="movie-content" v-loading="isLoading">
        <movie-slot class="movie-info" v-for="(info,index) in movies" :key="index">
          <div class="cover-wrap">
              <img class="movie-cover" :src="info.movieCover" alt="" @click="_goMovieDetail(info.movieId)">
          </div>
          <span class="movie-name" @click="_goMovieDetail(info.movieId)">{{info.movieName}}</span>
          <span class="movie-score">{{info.reviewScore}}</span>
        </movie-slot>
      </div>
  </div>
</template>

<script>
import MovieSlot from '@/components/movieSlot'
import { mapGetters } from 'vuex'
import { getUserCollect } from '@/js/api'
import { goMovieDetail } from '@/js/router'
export default {
  components: {
    MovieSlot
  },
  data () {
    return {
      movies: [],
      isLoading: true
    }
  },
  created () {
    this._getUserCollect()
  },
  methods: {
    _getUserCollect () {
      // console.log(this.user.userId)
      getUserCollect(this.user.userId, 10).then(res => {
        this.movies = res.userCollect
        this.isLoading = false
      })
    },
    _goMovieDetail (movieId) {
      goMovieDetail(movieId)
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}

</script>
<style lang="less" scoped>
.user-collect {
    .movie-content {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    margin-top: 12px;
    .movie-info {
      margin: 0 30px 12px 0;
    }
  }
}
</style>
