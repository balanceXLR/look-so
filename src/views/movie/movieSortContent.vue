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
              <img class="movie-cover" :src="info.movie.cover" alt="" @click="_goMovieDetail(info.movie.id)">
          </div>
          <span class="movie-name" @click="_goMovieDetail(info.movie.id)">{{info.movie.name.length > 8 ? info.movie.name.substring(0,7) + '...' : info.movie.name}}</span>
          <span class="movie-score">{{ info.grade === 0 ? '暂无评分' : info.grade}}</span>
        </movie-slot>
        <div v-show="movies.length === 0">暂无数据</div>
      </div>
      <div class="movie-footer">
        <el-pagination
          background
          layout="total, prev, pager, next"
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
import { movieFliter } from '@/js/common'
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
        this.currentSort = res
        this.currentPage = 1
        this._getSortMovies()
      })
    },
    sorting (label) {
      console.log(111)
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
          let date1 = new Date(arr[j].movie.show)
          let date2 = new Date(arr[j + 1].movie.show)
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
          if (arr[j].grade < arr[j + 1].grade) {
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
      this.isLoading = true
      getSortMovies(this.currentSort, this.currentPage).then((res) => {
        if (res.data) {
          this.movies = movieFliter(res.data.list)
          for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].grade === 'NaN') {
              this.movies[i].grade = 0
            }
          }
          this.number = res.data.num
          this.showSorting()
        } else {
          this.movies = []
          this.number = 0
        }
        this.isLoading = false
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
    // justify-content: space-around;
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
