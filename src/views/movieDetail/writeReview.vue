<template>
  <div class="write-review">
    <div class="score">
      <div class="title" >打个分吧</div>
      <el-rate v-model="reviewScore" show-text class="content"></el-rate>
    </div>
    <div class="text">
      <div class="title" >写影评</div>
      <el-input v-model="reviewCont" type="textarea" :rows="5" placeholder="请输入评论内容..." resize="none" class="content" ></el-input>
      <el-button type="primary" class="submit" @click="_writeReview">确定</el-button>
    </div>
  </div>
</template>
<script>
import { writeReview } from '@/js/api'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      reviewScore: 0,
      reviewCont: ''
    }
  },
  props: {
    currentMovie: {
      default: 0,
      type: Number
    }
  },
  methods: {
    _writeReview () {
      console.log(this.user)
      if (JSON.stringify(this.user) === '{}') {
        this.$message.warning('请先登录')
      } else if (this.reviewScore === 0) {
        this.$message.warning('请先为电影打分')
      } else if (this.reviewCont === '') {
        this.$message.warning('内容不能为空')
      } else {
        let param = new URLSearchParams()
        param.append('movieId', this.currentMovie)
        param.append('userId', this.user.userId)
        param.append('reviewScore', this.reviewScore)
        param.append('reviewCont', this.reviewCont)
        writeReview(param).then((res) => {
          this.$message.success(res)
        })
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.write-review {
  .score {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    .title {
      .all-font( Microsoft YaHei, 18px, #E6A23C, 0);
    }
    .content {
      margin-left: 20px;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: 12px;
      .all-font( Microsoft YaHei, 18px, #409EFF, 0);
    }
    .submit {
        // justify-self: flex-end;
        align-self: flex-end;
        margin-top: 12px;
        // margin-left: auto;
        width: 70px;
    }
  }
}
</style>
