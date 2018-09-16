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
      <el-button icon="el-icon-search" circle type="submit" @click="_search"></el-button>
    </div>
  </div>
</template>

<script>
import {getAllMovieName} from '@/js/api'
import {goSearchResult} from '@/js/router'
import { mapMutations } from 'vuex'
// import event from '@/js/eventVue'
export default {
  data () {
    return {
      movies: [],
      restaurants: [],
      tiemout: null,
      searchContent: '',
      testResult: [
        {
          name: 1
        },
        {
          name: 2
        }
      ]
    }
  },
  created () {
    // console.log(this.activeIndex)
  },
  methods: {
    ...mapMutations(['SEARCH']),
    ...mapMutations(['RESULT']),
    _search () {
      // event.$emit('keyword', this.searchContent)
      // console.log('发送' + this.searchContent)
      sessionStorage.setItem('keyword', this.searchContent)
      goSearchResult()
    },
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    querySearchAsync (queryString, cb) {
      getAllMovieName().then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.movies[i] = {value: res.data[i].name}
        }
        var results = queryString ? this.movies.filter(this.createStateFilter(queryString)) : this.movies
        cb(results)
      })
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect2 (item) {
      // console.log(item)
    },
    handleClear () {
      console.log(1)
      this.searchContent = ''
    },
    _getAllMovieName () {
      getAllMovieName().then((res) => {
        this.movies = res.data
      })
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
