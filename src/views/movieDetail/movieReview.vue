<template>
  <div class="movie-review">
      <div class="hot">
        <div class="title">热门影评</div>
        <review-slot v-for="(review,index) in hotReviews" :key="index" :review="review"></review-slot>
        <div v-show="hotReviews.length === 0">暂无影评</div>
      </div>
      <div class="all">
        <div class="title">所有影评</div>
        <review-slot v-for="(review,index) in allReviews" :key="index" :review="review"></review-slot>
        <div v-show="allReviews.length === 0">暂无影评</div>
        <!-- <div class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="number"
            :current-page="currentPage"
            @current-change="currentChange">
          </el-pagination>
        </div> -->

      </div>
  </div>
</template>

<script>
import ReviewSlot from '@/components/reviewSlot'
import {getMovieAllReviews} from '@/js/api'
import {userFliter} from '@/js/common'
export default {
  components: {
    ReviewSlot
  },
  data () {
    return {
      pageSize: 10,
      currentPage: 1,
      allReviews: [],
      hotReviews: [],
      number: 0
    }
  },
  props: {
    movieId: {
      type: Number,
      default: -1
    }
  },
  created () {
    this._getMovieAllReviews()
  },
  methods: {
    currentChange () {
    },
    _getMovieAllReviews () {
      getMovieAllReviews(sessionStorage.getItem('movieId')).then(res => {
        if (res.data) {
          userFliter(res.data)
          this.hotReviews = res.data.splice(0, 3)
          this.allReviews = res.data
          this.number = res.num
        }
      })
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.movie-review {
  .hot {
    .title {
      margin-bottom: 12px;
      .all-font(Microsoft YaHei, 18px, #F56C6C, 0);
    }
  }
  .all {
    .title {
      margin-bottom: 12px;
      .all-font(Microsoft YaHei, 18px, #909399, 0);
    }
  }
    .page {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 100px;
    }
}
</style>
