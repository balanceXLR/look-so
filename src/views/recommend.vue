<template>
  <div class="recommend">
      <div class="content-top">
        <div class="left">
          <recommend-slider></recommend-slider>
          <recommend-movies class="recommend-movies"></recommend-movies>
          <recommend-reviews class="recommend-reviews"></recommend-reviews>
        </div>
        <div class="right">
          <recommend-rank></recommend-rank>
        </div>
      </div>

  </div>
</template>

<script>
import RecommendSlider from '@/views/recommend/recommendSlider'
import RecommendRank from '@/views/recommend/recommendRank'
import RecommendMovies from '@/views/recommend/recommendMovies'
import RecommendReviews from '@/views/recommend/recommendReviews'
export default {
  components: {
    RecommendSlider,
    RecommendRank,
    RecommendMovies,
    RecommendReviews
  },
  data () {
    return {
    }
  }
}

</script>
<style lang="less" scoped>
    .recommend {
        display: flex;
        flex-direction: column;
        // width: 1200px;
        // margin: 0 auto;
        .content-top {
          display: flex;
          width: 100%;
          margin-top: 20px;
          .left {
            width: 70%;
            .recommend-movies, .recommend-reviews {
              margin-top: 20px;
            }
          }
          .right {
            width: 28%;
            margin-left: auto;
          }
        }

    }
</style>
