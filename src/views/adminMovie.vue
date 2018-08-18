<template>
  <div class="admin-movie">
    <el-table
      v-loading="isLoading"
      :data="movies"
      border stripe
      style="width: 100%">
      <el-table-column
        label="序号"
        type="index"
        width="50px"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="封面"
        width="80px"
        show-overflow-tooltip>
        <template  slot-scope="scope">
          <div class="cover-wrap">
            <img :src="scope.row.movieCover" alt="" class="movie-cover">
          </div>
      </template>
      </el-table-column>
      <el-table-column
        prop="movieName"
        label="名称"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="movieSort"
        label="类别"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="reviewScore"
        label="评分"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="movieShow"
        label="上映时间">
      </el-table-column>
      <el-table-column
        label="状态"
        width="80"
        show-overflow-tooltip>
        <template  slot-scope="scope">
          <span>{{scope.row.movieStatus === 1 ? '正常' : '下架'}}</span>
      </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="80"
      >
      <template  slot-scope="scope">
        <el-button type="text" size="small" v-show="scope.row.movieStatus === 1" @click="_manageMovie(scope.row.movieId)">上架</el-button>
        <el-button type="text" size="small" v-show="scope.row.movieStatus === 2" class="recover-btn" @click="_manageMovie(scope.row.movieId)">下架</el-button>
      </template>
      </el-table-column>
    </el-table>
    <div class="review-footer">
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
</template>

<script>
import {getAdminMovie, manageMovie} from '@/js/api'
export default {
  data () {
    return {
      movies: [],
      currentPage: 1,
      pageSize: 10,
      number: 0,
      isLoading: true
    }
  },
  created () {
    this._getAdminMovie()
  },
  methods: {
    currentChange (page) {
      this.currentPage = page
      this._getAdminMovie()
    },
    _getAdminMovie () {
      getAdminMovie(this.currentPage).then(res => {
        this.movies = res.movies
        this.number = res.number
        this.isLoading = false
      })
    },
    _manageMovie (movieId) {
      manageMovie(movieId).then(res => {
        if (res.status === 1) {
          this.$message.success('上架成功')
        } else {
          this.$message.success('下架成功')
        }
      })
    }
  }
}

</script>
<style lang="less" scoped>
.cover-wrap {
    width: 57px;
    height: 80px;
    .movie-cover {
        width: 100%;
        height: 100%;
    }
}
.recover-btn {
  margin-left: 0;
}
.review-footer {
    display: flex;
    justify-content: flex-end;
    margin: 50px 0 100px;
}
</style>
