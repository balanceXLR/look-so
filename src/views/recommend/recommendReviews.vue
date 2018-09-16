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
import {getRecommendReviews, baseUrl} from '@/js/api'
import {goReview} from '@/js/router'
import ReviewSlot from '@/components/reviewSlot'
import {userFliter} from '@/js/common'
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
        for (let i = 0; i < res.data.length; i++) {
          this.recommendReviews[i] = {
            id: res.data[i].movie.id,
            cover: baseUrl + res.data[i].movie.cover,
            name: res.data[i].movie.name,
            head: res.data[i].user.head,
            user: res.data[i].user.nickname,
            score: res.data[i].score,
            time: res.data[i].time,
            level: res.data[i].user.level,
            content: res.data[i].content
          }
        }
        this.recommendReviews = userFliter(this.recommendReviews)
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
