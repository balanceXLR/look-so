<template>
  <div class="movie-sort-content">
      <div class="movie-radio">
        <el-radio-group v-model="radio" @change="sorting">
          <el-radio label="时间">按时间排序</el-radio>
          <el-radio label="评分">按评分排序</el-radio>
        </el-radio-group>
      </div>
      <div class="movie-content" v-loading="isLoading">
        <movie-slot class="movie-info" v-for="(info,index) in movies" :key="index">
          <div class="cover-wrap">
              <img class="movie-cover" :src="info.movieCover" alt="" @click="_goMovieDetail(info.movieId)">
          </div>
          <span class="movie-name" @click="_goMovieDetail(info.movieId)">{{info.movieName}}</span>
          <span class="movie-score">{{info.reviewScore}}</span>
        </movie-slot>
      </div>
      <div class="movie-footer">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pageSize"
          :total="number"
          :current-page="currentPage"
          @current-change="currentChange">
        </el-pagination>
      </div>
  </div>
</template>

<script>
import MovieSlot from '@/components/movieSlot'
import {getSortMovies} from '@/js/api'
import {goMovieDetail} from '@/js/router'
import bus from '@/js/bus'
export default {
  components: {
    MovieSlot
  },
  data () {
    return {
      radio: '时间',
      movies: [],
      currentSort: '所有',
      currentPage: 1,
      number: 0,
      pageSize: 20,
      isLoading: true
    }
  },
  created () {
    this._getSortMovies()
  },
  mounted () {
    this.initSort()
  },
  methods: {
    initSort () {
      bus.$on('sort', (res) => {
        // console.log(res)
        this.currentSort = res
        this.currentPage = 1
        this._getSortMovies()
      })
    },
    sorting (label) {
      if (label === '时间') {
        this.showSorting()
      } else {
        this.scoreSorting()
      }
    },
    showSorting () {
      let arr = this.movies
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
          let date1 = new Date(arr[j].movieShow)
          let date2 = new Date(arr[j + 1].movieShow)
          if (date1.getTime() < date2.getTime()) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
          }
        }
      }
      for (let i = 0; i < arr.length; i++) {
        this.$set(this.movies, i, arr[i])
      }
    },
    scoreSorting () {
      let arr = this.movies
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
          if (arr[j].reviewScore < arr[j + 1].reviewScore) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
          }
        }
      }
      for (let i = 0; i < arr.length; i++) {
        this.$set(this.movies, i, arr[i])
      }
    },
    currentChange (page) {
      this.currentPage = page
      this._getSortMovies()
    },
    _getSortMovies () {
      // console.log(this.currentSort)
      // console.log(this.currentPage)
      this.isLoading = true
      getSortMovies(this.currentSort, this.currentPage).then((res) => {
        this.movies = res.sortMovies
        this.number = res.number
        this.showSorting()
        this.isLoading = false
        // console.log(this.number)
      })
    },
    _goMovieDetail (movieId) {
      goMovieDetail(movieId)
    }
  },
  computed: {

  }
}

</script>
<style lang="less" scoped>
.movie-sort-content {
  .movie-radio {

  }
  .movie-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 12px;
    .movie-info {
      margin: 0 30px 12px 0;
    }
  }
  .movie-footer {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 100px;
  }
}
</style>
