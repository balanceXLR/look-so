<template>
  <div class="user-home">
    <user-nav class="user-nav"></user-nav>
    <router-view class="router-wrap"></router-view>
  </div>
</template>

<script>
import UserNav from './userHome/userNav'
export default {
  components: {
    UserNav
  },
  data () {
    return {
    }
  }
}

</script>
<style lang="less" scoped>
.user-home {
  // display: flex;
  width: 1200px;
  margin: 0 auto;
  .user-nav {
  }
  .router-wrap {
    margin-top: 20px;
    width: 70%;
  }
}
</style>
