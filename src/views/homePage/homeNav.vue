<template>
  <div class="home-nav">
    <div class="nav-left">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <el-menu-item index="recommend" >首页</el-menu-item>
        <el-menu-item index="movie" >所有电影</el-menu-item>
        <el-menu-item index="review" >热门影评</el-menu-item>
        <el-menu-item index="rank" >排行榜</el-menu-item>
      </el-menu>
    </div>
    <div class="nav-right">
      <el-autocomplete
        v-model="searchContent"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect2"></el-autocomplete>
      <el-button icon="el-icon-search" circle type="submit" @click="search"></el-button>
    </div>
  </div>
</template>

<script>
import {getAllMovieName} from '@/js/api'
export default {
  data () {
    return {
      // activeIndex: this.$route.name,
      movies: [],
      restaurants: [],
      tiemout: null,
      searchContent: '',
      resultInfo: {
        resultContent: [
          {
            movieId: 1,
            movieCover: '/static/cover/cover1.png',
            movieName: '我不是药神',
            movieDir: '文牧野',
            movieAct: ' 徐峥 / 王传君 / 周一围 / 谭卓 / 章宇 /',
            movieShow: '2017-07-05',
            movieScore: 9.7
          },
          {
            movieId: 2,
            movieCover: '/static/cover/cover1.png',
            movieName: '我不是药神',
            movieDir: '文牧野',
            movieAct: ' 徐峥 / 王传君 / 周一围 / 谭卓 / 章宇 /',
            movieShow: '2017-07-05',
            movieScore: 5
          }
        ],
        number: 200
      }

    }
  },
  created () {
    this._getAllMovieName()
    // console.log(this.activeIndex)
  },
  methods: {
    search () {
      sessionStorage.removeItem('searchResult')
      // 后台搜索
      // this.$axios.post('/search', {
      //   searchContent: this.searchContent
      // }).then((res) => {
      //   if (res.status === 200) {
      //     this.$router.push('searchResult')
      //     sessionStorage.setItem('searchResult', JSON.stringify(res.resultInfo))
      //   }
      // })

      // 测试搜索
      this.$router.push('searchResult')
      sessionStorage.setItem('searchResult', JSON.stringify(this.resultInfo))
    },
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    querySearchAsync (queryString, cb) {
      var restaurants = this.movies
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect2 (item) {
      // console.log(item)
    },
    _getAllMovieName () {
      getAllMovieName().then((res) => {
        // console.log(res.allMovieName)
        this.movies = res.allMovieName
      })
      // this.restaurants = this.loadAll()
    }
  },
  computed: {
    activeIndex () {
      return this.$route.name
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.home-nav {
  width: 1200px;
  margin: 20px auto 0;
  display: flex;
  .nav-left {
    width: 70%;
  }
  .nav-right {
    width: 28%;
    margin-left: auto;
    .search-text {
      width: 500px;
    }
  }
}
</style>
