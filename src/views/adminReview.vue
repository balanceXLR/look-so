<template>
  <div class="admin-review">
      <el-table
      :data="reviews"
      border stripe
      v-loading="isLoading"
      style="width: 100%">
      <el-table-column
        label="序号"
        type="index"
        width="50px"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="userName"
        label="评论人"
        width="80px"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="movieName"
        label="电影名"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="time"
        label="评论时间"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="操作"
        width="80"
      >
      <template  slot-scope="scope">
        <el-button type="text" size="small" @click="open2(scope.row.id)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
    <div class="review-footer">
      <el-pagination
        background
        layout=" total, prev, pager, next"
        :page-size="pageSize"
        :total="number"
        :current-page="currentPage"
        @current-change="currentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {getAllReviews, manageReview} from '@/js/api'
export default {
  data () {
    return {
      reviews: [],
      currentPage: 1,
      pageSize: 10,
      number: 0,
      isLoading: true
    }
  },
  created () {
    this._getAllReviews()
  },
  methods: {
    currentChange (page) {
      this.currentPage = page
      this._getAllReviews()
    },
    open2(id) {
        this.$confirm('此操作将永久删除该影评, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this._manageReview(id)
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })          
        })
      },
    _getAllReviews () {
      getAllReviews(0, this.currentPage).then(res => {
        this.reviews = []
        for (let item of res.data.list) {
          this.reviews.push({
            userName: item.user.name,
            nick: item.user.nick,
            movieName: item.movie.name,
            time: item.time,
            content: item.content,
            id: item.id
          })
        }
        this.number = res.data.num
        this.isLoading = false
      })
    },
    _manageReview (reviewId) {
      console.log(reviewId)
      manageReview(reviewId).then(res => {
        this.$message.success('删除成功')
        this._getAllReviews()
      })
    }
  }
}

</script>
<style lang="less" scoped>
.review-footer {
    display: flex;
    justify-content: flex-end;
    margin: 50px 0 100px;
}
</style>
