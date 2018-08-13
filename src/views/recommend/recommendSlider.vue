<template>
  <div class="recommend-slider">
    <el-carousel height="400px" v-loading="isLoading">
      <el-carousel-item v-for="(item,index) in sliderItems" :key="index">
        <img class="slider-img" :src="item.movieCover" alt="" @click="_goMovieDetail(item.movieId)">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {getRecommendSlider} from '@/js/api'
import {goMovieDetail} from '@/js/router'
export default {
  data () {
    return {
      sliderItems: [],
      isLoading: true
    }
  },
  created () {
    this._getRecommendSlider()
  },
  methods: {
    _goMovieDetail (movieId) {
      goMovieDetail(movieId)
    },
    _getRecommendSlider () {
      getRecommendSlider().then((res) => {
        this.sliderItems = res.recommendSlider
        this.isLoading = false
      })
    }
  }
}

</script>
<style lang="less" scoped>
    .slider-img {
        width: 100%;
        cursor: pointer;
    }
</style>
