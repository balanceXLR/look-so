<template>
  <div class="movie-home">
    <login></login>
    <register></register>
    <home-nav></home-nav>
    <router-view class="router-wrap" :key="$route.path + $route.query.t"></router-view>
  </div>
</template>

<script>
import Login from '@/components/login'
import Register from '@/components/register'
import HomeNav from '@/views/homePage/homeNav'
export default {
  components: {
    Login,
    Register,
    HomeNav
  },
  data () {
    return {
    }
  }
}

</script>
<style lang="less" scoped>
    .router-wrap {
      width: 1200px;
      margin: 0 auto;
    }
</style>
