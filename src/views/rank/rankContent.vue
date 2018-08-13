<template>
  <div class="rank-content">
      <div class="rank-header">Look-So高分排行榜</div>
      <div class="rank-center" v-loading="isLoading">
          <div class="rank-item" v-for="(rank,index) in ranks" :key="index">
              <div class="item-left">
                <div class="num">{{index+1}}</div>
                <div class="cover-wrap">
                    <img class="cover" :src="rank.movieCover" alt="" @click="_goMovieDetail(rank.movieId)">
                </div>
              </div>
              <div class="item-center">
                <div class="name" @click="_goMovieDetail(rank.movieId)">{{rank.movieName}}</div>
                <div class="director">导演：{{rank.movieDir}}</div>
                <div class="actors">主演：{{rank.movieAct}}</div>
                <div class="show">上映日期：{{rank.movieShow}}</div>
              </div>
              <div class="item-right">{{rank.reviewScore}}</div>
          </div>
      </div>
      <div class="rank-footer">
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
import {getAllRank} from '@/js/api'
import {goMovieDetail} from '@/js/router'
export default {
  data () {
    return {
      ranks: [],
      currentPage: 1,
      isLoading: true,
      pageSize: 10,
      number: 0

    }
  },
  created () {
    this._getAllRank()
  },
  methods: {
    currentChange (page) {
      this.currentPage = page
      this._getAllRank()
    },
    _goMovieDetail (movieId) {
      goMovieDetail(movieId)
    },
    _getAllRank () {
      this.isLoading = true
      getAllRank(this.currentPage).then((res) => {
        // console.log(res)
        this.ranks = res.allRank
        this.number = res.number
        this.isLoading = false
      })
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.rank-content {
    .rank-header {
        margin-top: 12px;
        .bold-title;
    }
    .rank-center {
        .rank-item:nth-child(2) {
             .item-left {
                .num {
                    .rank-num(#DB524B);
                }
            }
        }
        .rank-item:nth-child(3) {
             .item-left {
                .num {
                    .rank-num(#539CDB);
                }
            }
        }
        .rank-item:nth-child(4) {
             .item-left {
                .num {
                    .rank-num(#58B957);
                }
            }
        }
        .rank-item {
            display: flex;
            // justify-content: space-between;
            align-items: center;
            margin-top: 20px;

            .item-left {
                display: flex;
                align-items: center;
                margin-right: 20px;
                .num {
                    // margin-right: 20px;
                    width: 50px;
                    .rank-num(#4A4A4A);
                }
                .cover-wrap {
                    width: 80px;
                    height: 112px;
                    .cover {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .item-center {
                .name {
                    .all-font(Microsoft YaHei, 14px, #494949, 0);
                    cursor: pointer;
                    &:hover {
                        color: #409EFF;
                    }
                }
                .director, .actors, .show {
                    .all-font(Microsoft YaHei, 12px, #666666, 0);
                }
            }
            .item-right {
                margin-left: auto;
                .rank-score;
            }
        }
    }
    .rank-footer {
        display: flex;
        justify-content: flex-end;
        margin: 30px 0 100px 0;
    }
}
</style>
