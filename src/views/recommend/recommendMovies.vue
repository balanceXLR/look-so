<template>
  <div class="recommend-movies">
    <el-tabs type="border-card" @tab-click="isMore" v-loading="isLoading">
        <el-tab-pane v-for="(movie,index) in recommendMovies" :key="index" :label="movie.sort" lazy>
            <div class="info-wrapper">
                <movie-slot class="movie-info" v-for="(info,index) in movie.info" :key="index">
                    <div class="cover-wrap">
                        <img class="movie-cover" :src="info.movieCover" alt="" @click="_goMovieDetail(info.movieId)">
                    </div>
                    <span class="movie-name" @click="_goMovieDetail(info.movieId)">{{info.movieName}}</span>
                    <span class="movie-score">{{info.reviewScore}}</span>
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
const MORE_INDEX = 'tab-7'
export default {
  components: {
    MovieSlot
  },
  data () {
    return {
      recommendMovies: [
        {
          sort: '热门',
          info: []
        },
        {
          sort: '国语',
          info: []
        },
        {
          sort: '喜剧',
          info: []
        },
        {
          sort: '科幻',
          info: []
        },
        {
          sort: '悬疑',
          info: []
        },
        {
          sort: '爱情',
          info: []
        },
        {
          sort: '治愈',
          info: []
        },
        {
          sort: '更多',
          info: []
        }
      ],
      isLoading: true

    }
  },
  created () {
    this._getRecommendMovies()
  },
  methods: {
    isMore (tab, event) {
      if (event.target.getAttribute('id') === MORE_INDEX) {
        goMovie()
      }
    },
    _getRecommendMovies () {
      getRecommendMovies().then((res) => {
        let inner = this.recommendMovies
        let out = res.recommendMovies
        // console.log(out)
        for (let i = 0; i < inner.length; i++) {
          for (let j = 0; j < out.length; j++) {
            if (inner[i].sort === out[j].movieSort) {
              inner[i].info.push(out[j])
            }
          }
        }
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
