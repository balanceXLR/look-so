<template>
  <div class="admin-home">
    <admin-nav class="admin-nav"></admin-nav>
    <router-view class="router-wrap"></router-view>
  </div>
</template>

<script>
import adminNav from './adminHome/adminNav'
export default {
  components: {
    adminNav
  },
  data () {
    return {
    }
  }
}

</script>
<style lang="less" scoped>
.admin-home {
  // display: flex;
  width: 1200px;
  margin: 0 auto;
  .admin-nav {
  }
  .router-wrap {
    margin-top: 20px;
    width: 70%;
  }
}
</style>
