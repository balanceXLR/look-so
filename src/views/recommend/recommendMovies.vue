<template>
  <div class="recommend-movies">
    <el-tabs type="border-card" @tab-click="isMore" >
        <el-tab-pane v-for="(movie,index) in sorts" :key="index" :label="movie" lazy>
            <div class="info-wrapper">
                <movie-slot class="movie-info" v-for="(info,index) in movies" :key="index">
                    <div class="cover-wrap">
                        <img class="movie-cover" :src="info.cover" alt="" @click="_goMovieDetail(info.id)">
                    </div>
                    <span class="movie-name" @click="_goMovieDetail(info.id)">{{info.name.length > 8 ? info.name.substring(0,7) + '...' : info.name}}</span>
                </movie-slot>
            </div>

        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MovieSlot from '@/components/movieSlot'
import {getRecommendMovies} from '@/js/api'
import {goMovie, goMovieDetail} from '@/js/router'
import {sliderFliter} from '@/js/common'
export default {
  components: {
    MovieSlot
  },
  data () {
    return {
      sorts: ['喜剧', '科幻', '悬疑', '爱情', '冒险', '动作', '更多'],
      movies: [],
      isLoading: true
    }
  },
  created () {
    this._getRecommendMovies('喜剧')
  },
  methods: {
    isMore (tab, event) {
      console.log(tab.label)
      if (tab.label === '更多') {
        goMovie()
      } else {
        this._getRecommendMovies(tab.label)
      }
    },
    _getRecommendMovies (sort) {
      getRecommendMovies(sort).then((res) => {
        this.movies = sliderFliter(res.data)
        this.isLoading = false
        // console.log(this.recommendMovies)
      })
    },
    _goMovieDetail (movieId) {
      goMovieDetail(movieId)
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.recommend-movies {
    .info-wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>
