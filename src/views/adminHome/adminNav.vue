<template>
  <div class="admin-nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="adminUser" class="item">用户管理</el-menu-item>
      <el-menu-item index="adminMovie" class="item" >电影管理</el-menu-item>
      <el-menu-item index="adminReview" class="item">影评管理</el-menu-item>
      <el-menu-item index="adminUpload" class="item">电影上传</el-menu-item>
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
