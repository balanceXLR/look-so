<template>
  <div class="write-review">
      <el-rate
        v-model="reviewScore"
        show-text>
      </el-rate>
      <el-input v-model="reviewCont" type="textarea" :rows="5" placeholder="请输入评论内容..." resize="none"></el-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
      reviewScore: '',
      reviewCont: ''
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
</style>
