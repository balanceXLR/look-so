<template>
  <div class="movie-slot">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.movie-slot {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 115px;
            // margin-right: 20px;
            .cover-wrap {
                height: 162px;
                .movie-cover {
                    width: 100%;
                    height: 100%;
                }
            }
            .movie-name {
                margin-top: 12px;
                .all-font(PingFangSC-Regular, 14px, #333333, -0.34px);
                cursor: pointer;
                &:hover {
                    color: #409EFF;
                }
            }
            .movie-score {
                margin-top: 8px;
                .all-font(PingFangSC-Regular, 12px, #EF990F, -0.29px);
            }
        }
</style>
