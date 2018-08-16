<template>
  <div class="movie-review">
      <div class="hot">
        <div class="title">热门影评</div>
        <review-slot v-for="(review,index) in hotReviews" :key="index" :review="review"></review-slot>
      </div>
      <div class="all">
        <div class="title">所有影评</div>
        <review-slot v-for="(review,index) in allReviews" :key="index" :review="review"></review-slot>
        <div class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="number"
            :current-page="currentPage"
            @current-change="currentChange">
          </el-pagination>
        </div>

      </div>
  </div>
</template>

<script>
import ReviewSlot from '@/components/reviewSlot'
import {getMovieAllReviews} from '@/js/api'
export default {
  components: {
    ReviewSlot
  },
  data () {
    return {
      pageSize: 10,
      currentPage: 1,
      allReviews: [],
      number: 0
    }
  },
  props: {
    hotReviews: {
      type: Array,
      default: null
    },
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
      getMovieAllReviews(this.movieId, this.pageSize).then(res => {
        this.allReviews = res.allReviews
        this.number = res.number
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
