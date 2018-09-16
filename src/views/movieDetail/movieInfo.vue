<template>
  <div class="movie-info">
    <div class="name">{{movieInfo.name}}</div>
    <div class="info-wrap">
        <div class="cover-wrap">
            <img class="cover" :src="movieInfo.cover" alt="">
        </div>
        <div class="text-wrap">
            <div class="director">导演：{{movieInfo.dir}}</div>
            <div class="actors">主演：{{movieInfo.act}}</div>
            <div class="sort">类别：{{movieInfo.sort}}</div>
            <div class="show">上映时间：{{movieInfo.show}}</div>
            <div class="time">片长：{{movieInfo.time}}分钟</div>
            <div class="country">国家：{{movieInfo.ctry}}</div>
            <el-button type="warning" round @click="_movieCollect()">{{isCollect ? '已收藏' : '收藏'}}</el-button>
        </div>
        <div class="score-wrap">
            <div class="title">Look-So评分</div>
            <div class="star-wrap">
                <div class="score-num">{{otherInfo.grade}}</div>
                <el-rate
                    v-model="score"
                    disabled>
                </el-rate>
            </div>
            <div class="people-num">{{otherInfo.num}}人评价</div>
        </div>
    </div>
    <div class="intro-wrap">
        <div class="intro-title">{{movieInfo.name}}的内容简介</div>
        <p class="intro-content">{{movieInfo.intro}}</p>
    </div>
  </div>
</template>

<script>
// import {getMovieDetail} from '@/js/api'
import {movieCollect, movieUnCollect, movieCollectState, getMovieScore} from '@/js/api'
import { mapGetters } from 'vuex'
import {doAlert} from '@/js/common'
export default {
  data () {
    return {
    //   movieInfo: {},
      isCollect: false,
      collectId: -1,
      otherInfo: {}
    }
  },
  props: {
    movieInfo: {
      type: Object,
      default: null
    }
  },
  created () {
    this._movieIsCollected()
    this._getMovieScore()
  },
  methods: {
    _movieIsCollected () {
      movieCollectState(this.user.userId, sessionStorage.getItem('movieId')).then(res => {
        if (res.data === null) {
          this.isCollect = false
        } else {
          this.isCollect = true
          this.collectId = res.data[0].id
        }
      })
    },
    _movieCollect () {
      console.log(this.user)
      if (JSON.stringify(this.user) !== '{}') {
        if (this.isCollect) {
          movieUnCollect(this.collectId).then(res => {
            this.isCollect = false
            doAlert(this, 'success', '取消收藏成功')
          })
        } else {
          movieCollect(this.user.userId, sessionStorage.getItem('movieId')).then(res => {
            this.isCollect = true
            doAlert(this, 'success', '收藏成功')
          })
        }
      } else {
        doAlert(this, 'warning', '请先登录')
      }
    },
    _getMovieScore () {
      getMovieScore(sessionStorage.getItem('movieId')).then(res => {
        if (res.code === '0001') {
          this.otherInfo = {
            grade: 0,
            num: 0
          }
        } else {
          this.otherInfo = res.data[0]
        }
      })
    }
  },
  computed: {
    score: {
      get: function () { return this.otherInfo.grade / 2 },
      set: function () {}
    },
    ...mapGetters(['user'])
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.movie-info {
    .name {
        margin-top: 12px;
        .bold-title;
    }
    .info-wrap {
        display: flex;
        margin-top: 12px;
        .cover-wrap {
            width: 135px;
            height: 189px;
            .cover {
                width: 100%;
                height: 100%;
            }
        }
        .text-wrap {
            max-width: 470px;
            margin-left: 12px;
            .director, .actors, .sort, .show, .time, .country {
                line-height: 24px;
                .all-font(Microsoft YaHei, 14px, #666666, 0);
            }
        }
        .score-wrap {
            margin-left: auto;
            padding-left: 20px;
            border-left: 1px solid #EAEAEA;
            .title {
                .all-font(Microsoft YaHei, 12px, #9b9b9b, 0);
            }
            .star-wrap {
                display: flex;
                align-items: center;
                .score-num {
                    font-weight: bold;
                    .all-font(Microsoft YaHei, 24px, #494949, 0);
                }
            }
            .people-num {
                .all-font(Microsoft YaHei, 12px, #409EFF, 0);
            }

        }
    }
    .intro-wrap {
        margin-top: 20px;
        .intro-title {
            .all-font(Microsoft YaHei, 18px, #67C23A, 0);
        }
        .intro-content {
            margin-top: 12px;
            text-indent: 2em;
            line-height: 20px;
            .all-font(Microsoft YaHei, 12px, #666666, 1px);
        }
    }
}
</style>
