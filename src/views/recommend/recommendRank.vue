<template>
  <div class="recommend-rank">
    <el-card class="box-card" v-loading="isLoading">
        <div slot="header" class="clearfix">
            <span class="rank-title">排行榜</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="_goRank">更多</el-button>
        </div>
        <div v-for="(item,index) in rankItems" :key="index" class="rank-item" @click="_goMovieDetail(item.movieId)" >
            {{index+1}}：{{item.movieName}}
        </div>
    </el-card>
  </div>
</template>

<script>
import {getRecommendRank} from '@/js/api'
import {goMovieDetail, goRank} from '@/js/router'
export default {
  data () {
    return {
      rankItems: [],
      isLoading: true
    }
  },
  created () {
    this._getRecommendRank()
  },
  methods: {
    _goRank () {
      goRank()
    },
    _goMovieDetail (movieId) {
      goMovieDetail(movieId)
    },
    _getRecommendRank () {
      getRecommendRank().then((res) => {
        this.rankItems = res.recommendRank
        this.isLoading = false
      })
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
    .recommend-rank {
        .box-card {
            .clearfix {
                .rank-title {
                    .all-font(MicrosoftYaHei-Bold, 18px, #005198, -0.43px);
                }
            }
            .rank-item {
                margin-bottom: 12px;
                .all-font(MicrosoftYaHei,14px, #333333, -0.34px);
                cursor: pointer;
                &:hover {
                  color: #409EFF;
                }
            }
        }
    }
</style>
