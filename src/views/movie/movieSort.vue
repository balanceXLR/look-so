<template>
  <div class="movie-sort">
      <span class="sort-title">分类</span>
      <div class="sort-wrap">
        <div v-for="(sort,index) in movieSorts"
            :key="index" class="sort-tag"
            @click="changeSort(sort)"
            >
          <el-tag  :class="{'sort-active': sort === currentSort}">{{sort}}</el-tag>
        </div>

      </div>
  </div>
</template>

<script>
import bus from '@/js/bus'
export default {
  data () {
    return {
      movieSorts: ['所有', '热门', '喜剧', '科幻', '悬疑', '爱情', '治愈', '动作', '国语', '欧美', '韩国', '日本'],
      currentSort: '所有'
    }
  },
  created () {
    // this.changeSort()
  },
  methods: {
    changeSort (sort) {
      // console.log(sort)
      this.currentSort = sort
      bus.$emit('sort', this.currentSort)
    }
  }
}

</script>
<style lang="less" scoped>
@import '~@/style/font.less';
.movie-sort {
    display: flex;
    padding-top: 20px;
    .sort-title {
        margin-right: 30px;
        font-weight: bold;
        .bold-title;
    }
    .sort-wrap {
        display: flex;
        flex-wrap: wrap;
        width: 600px;
        .sort-tag {
            margin: 0 20px 12px 0;
            cursor: pointer;
            &:hover {
              opacity: 0.7;
            }
        }
        .sort-active {
          background-color: rgba(103,194,58,.1);
          border-color: rgba(103,194,58,.2);
          color: #67c23a;
        }
    }
}
</style>
