<template>
  <div class="home-page">
    <home-header></home-header>
    <login></login>
    <register></register>
    <home-nav></home-nav>
    <router-view class="router-wrap"></router-view>
  </div>
</template>

<script>
import HomeHeader from '@/views/homePage/homeHeader'
import Login from '@/components/login'
import Register from '@/components/register'
import HomeNav from '@/views/homePage/homeNav'
export default {
  components: {
    HomeHeader,
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
  .home-page {
    width: 100%;
    .router-wrap {
      width: 1200px;
      margin: 0 auto;
    }
  }
</style>
