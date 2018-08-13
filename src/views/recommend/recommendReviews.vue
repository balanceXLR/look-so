<template>
  <div class="recommend-reviews">
    <el-card class="reviews-wrapper" v-loading="isLoading">
        <div slot="header" class="reviews-header">
            <span class="title">热门影评</span>
            <el-button style="float: right; padding: 3px 0" type="text"  @click="_goReview">更多</el-button>
        </div>
        <div v-for="(review,index) in recommendReviews" :key=index >
          <review-slot :review="review"></review-slot>
        </div>
    </el-card>
  </div>
</template>

<script>
import {getRecommendReviews} from '@/js/api'
import {goReview} from '@/js/router'
import ReviewSlot from '@/components/reviewSlot'
export default {
  components: {
    ReviewSlot
  },
  data () {
    return {
      recommendReviews: [],
      isLoading: true
    }
  },
  created () {
    this._getRecommendReviews()
  },
  methods: {
    _getRecommendReviews () {
      getRecommendReviews().then((res) => {
        this.recommendReviews = res.recommendReviews
        this.isLoading = false
        // console.log(res.recommendReviews)
      })
    },
    _goReview () {
      goReview()
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.recommend-reviews {
    .reviews-wrapper {
        .reviews-header {
            .title {
                .all-font(MicrosoftYaHei-Bold, 18px, #409EFF, -0.43px);
            }
        }
    }
}
</style>
