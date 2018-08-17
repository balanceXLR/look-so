<template>
  <div class="home-page">
    <home-header></home-header>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from '@/views/homePage/homeHeader'

export default {
  components: {
    HomeHeader

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

  }
</style>
