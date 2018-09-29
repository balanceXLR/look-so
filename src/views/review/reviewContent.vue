<template>
  <div class="review-content">
    <div class="review-top">
      <div class="top-title">Look-So的热门影评</div>
      <el-radio-group v-model="type" @change="changeType">
      <el-radio label='0'>最受欢迎的</el-radio>
      <el-radio label='1'>最新影评</el-radio>
      </el-radio-group>
    </div>
    <div class="review-center" v-loading="isLoading">
      <review-slot v-for="(review,index) in reviews" :key="index" :review= review></review-slot>
    </div>
    <div class="review-footer">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :page-size="10"
        :total="number"
        :current-page="currentPage"
        @current-change="currentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import ReviewSlot from '@/components/reviewSlot'
import {getAllReviews, baseUrl} from '@/js/api'
import {userFliter} from '@/js/common'
export default {
  components: {
    ReviewSlot
  },
  data () {
    return {
      type: '0',
      reviews: [],
      currentPage: 1,
      number: 0,
      isLoading: true
    }
  },
  created () {
    this._getAllReview(0, 1)
  },
  methods: {
    changeType (type) {
      this.type = type
      this._getAllReview(type, 1)
    },
    currentChange (page) {
      this._getAllReview(this.type, page)
    },
    _getAllReview (type, page) {
      this.isLoading = true
      getAllReviews(type, page).then((res) => {
        this.reviews = []
        for (let i = 0; i < res.data.list.length; i++) {
          this.reviews[i] = {
            id: res.data.list[i].movie.id,
            cover: baseUrl + res.data.list[i].movie.cover,
            name: res.data.list[i].movie.name,
            head: res.data.list[i].user.head,
            user: res.data.list[i].user.nickname,
            score: res.data.list[i].score,
            time: res.data.list[i].time,
            level: res.data.list[i].user.level,
            content: res.data.list[i].content
          }
        }
        this.reviews = userFliter(this.reviews)
        this.number = res.data.num
        this.isLoading = false
      })
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.review-content {
    .review-top {
        .top-title {
            margin: 12px 0 12px 0;
            .bold-title;
        }
    }
    .review-center {
        margin-top: 20px;
    }
    .review-footer {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 100px;
    }
}

</style>
