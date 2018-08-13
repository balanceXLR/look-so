<template>
  <div class="search-result">
      <div class="result-left">
          <div class="result-title">搜索结果</div>
          <div class="result-content">
            <div class="result-item" v-for="(result, index) in resultInfo" :key="index">
                <div class="cover-wrap">
                    <img class="cover" :src="result.movieCover" alt=""  @click="_goMovieDetail(result.movieId)">
                </div>
                <div class="movie-info">
                    <div class="name" @click="_goMovieDetail(result.movieId)">{{result.movieName}}</div>
                    <div class="director">导演：{{result.movieDir}}</div>
                    <div class="actors">主演：{{result.movieAct}}</div>
                    <div class="score">
                        <el-rate
                        class="score-icon"
                        v-model="scoreIcon[index]"
                        allow-half
                        disabled
                        text-color="#ff9900"
                        score-template="{value}">
                        </el-rate>
                        <div class="score-num">{{result.movieScore}}</div>
                    </div>
                </div>
            </div>
          </div>
          <div class="result-footer">
            <el-pagination
                class="page"
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
import {goMovieDetail} from '@/js/router'
export default {
  data () {
    return {
      resultInfo: JSON.parse(sessionStorage.getItem('searchResult')).resultContent,
      pageSize: 10,
      number: JSON.parse(sessionStorage.getItem('searchResult')).number,
      currentPage: 1
    }
  },
  created () {
    // console.log(this.resultInfo)
    // console.log(this.scoreIcon)
    // console.log(this.number)
  },
  methods: {
    currentChange (page) {
      this.currentPage = page
    },
    _goMovieDetail (movieId) {
      goMovieDetail(movieId)
    }
  },
  computed: {
    scoreIcon () {
      let temp = JSON.parse(sessionStorage.getItem('searchResult')).resultContent
      let arr = []
      for (let i = 0; i < temp.length; i++) {
        arr.push(temp[i].movieScore / 2)
      }
      //   console.log(this.resultInfo.lenth)
      //   for (let i = 0; i < this.resultInfo.lenth; i++) {
      //     console.log(this.resultInfo[i].movieScore)
      //     arr.push(this.resultInfo[i].movieScore)
      //   }
      return arr
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.search-result {
    .result-left {
        width: 70%;
        .result-title {
            margin-top: 12px;
            .bold-title;
        }
        .result-content {
            .result-item {
            display: flex;
            align-items: flex-start;
            margin-top: 12px;
            .cover-wrap {
                width: 112px;
                height: 162px;
                .cover {
                    width: 100%;
                    height: 100%;
                }
            }
            .movie-info {
                margin-left: 20px;
                .name {
                    margin-top: 12px;
                    .all-font(Microsoft YaHei, 14px, #494949, 0);
                    cursor: pointer;
                    &:hover {
                        color: #409EFF;
                    }
                }
                .director, .actors, .show {
                    margin-top: 12px;
                    .all-font(Microsoft YaHei, 12px, #666666, 0);
                }
                .score {
                    display: flex;
                    align-items: center;
                    margin-top: 12px;
                    .score-num {
                        .all-font(Microsoft YaHei, 14px, #F7BA2A, 0)
                    }
                }
            }

        }
        }
        .result-footer {
            display: flex;
            justify-content: flex-end;
            margin: 30px 0 100px 0;
        }
    }
}
</style>
