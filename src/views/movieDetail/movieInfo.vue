<template>
  <div class="movie-info">
    <div class="name">{{movieInfo.movieName}}</div>
    <div class="info-wrap">
        <div class="cover-wrap">
            <img class="cover" :src="movieInfo.movieCover" alt="">
        </div>
        <div class="text-wrap">
            <div class="director">导演：{{movieInfo.movieDir}}</div>
            <div class="actors">主演：{{movieInfo.movieAct}}</div>
            <div class="sort">类别：{{movieInfo.movieSort}}</div>
            <div class="show">上映时间：{{movieInfo.movieShow}}</div>
            <div class="time">片长：{{movieInfo.movieTime}}分钟</div>
            <div class="country">国家：{{movieInfo.movieCtry}}</div>
            <el-button type="warning" round>{{isCollect}}</el-button>
        </div>
        <div class="score-wrap">
            <div class="title">Look-So评分</div>
            <div class="star-wrap">
                <div class="score-num">{{movieInfo.reviewScore}}</div>
                <el-rate
                    v-model="score"
                    disabled>
                </el-rate>
            </div>
            <div class="people-num">{{movieInfo.peopleNum}}人评价</div>
        </div>
    </div>
    <div class="intro-wrap">
        <div class="intro-title">{{movieInfo.movieName}}的内容简介</div>
        <p class="intro-content">{{movieInfo.movieIntro}}</p>
    </div>
  </div>
</template>

<script>
// import {getMovieDetail} from '@/js/api'
export default {
  data () {
    return {
    //   movieInfo: {},
      isCollect: '收藏'
    }
  },
  props: {
    movieInfo: {
      type: Object,
      default: null
    }
  },
  computed: {
    score: {
      get: function () { return this.movieInfo.reviewScore / 2 },
      set: function () {}
    }
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
