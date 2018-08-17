<template>
  <div class="user-nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="userInfo" class="item">个人资料</el-menu-item>
      <el-menu-item index="userCollect" class="item" >我的收藏</el-menu-item>
      <el-menu-item index="userReview" class="item">我的影评</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
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

</style>
