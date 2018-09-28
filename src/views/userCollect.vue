<template>
  <div class="user-collect">
      <div class="movie-content" v-loading="isLoading">
        <movie-slot class="movie-info" v-for="(info,index) in movies" :key="index">
          <div class="cover-wrap">
              <img class="movie-cover" :src="info.cover" alt="" @click="_goMovieDetail(info.id)">
          </div>
          <span class="movie-name" @click="_goMovieDetail(info.id)">{{info.name}}</span>
          <!-- <span class="movie-score">{{info.score}}</span> -->
        </movie-slot>
        <no-result v-show="isShow"></no-result>
      </div>
  </div>
</template>

<script>
import MovieSlot from '@/components/movieSlot'
import { mapGetters } from 'vuex'
import { getUserCollect } from '@/js/api'
import { goMovieDetail } from '@/js/router'
import {sliderFliter} from '@/js/common'
import NoResult from '@/components/noResult'
export default {
  components: {
    MovieSlot,
    NoResult
  },
  data () {
    return {
      movies: [],
      isLoading: true,
      isShow: false
    }
  },
  created () {
    this._getUserCollect()
  },
  methods: {
    _getUserCollect () {
      // console.log(this.user.userId)
      getUserCollect(this.user.userId, 1).then(res => {
        if(res.code === '0000') {
          for (let i = 0; i < res.data.length; i++) {
            this.movies.push(res.data[i].movie)
          }
        this.movies = sliderFliter(this.movies)
        } else {
          this.isShow = true
        }
        this.isLoading = false
      })
    },
    _goMovieDetail (movieId) {
      console.log(movieId)
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
