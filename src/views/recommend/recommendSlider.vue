<template>
  <div class="recommend-slider">
    <el-carousel height="400px" v-loading="isLoading">
      <el-carousel-item v-for="(item,index) in sliderItems" :key="index">
        <img class="slider-img" :src="item" alt="" @click="_goMovieDetail(item.movieId)">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {getRecommendSlider, baseUrl} from '@/js/api'
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
        this.sliderItems = res.data
        for (let i = 0; i < res.data.length; i++) {
          this.sliderItems[i] = baseUrl + res.data[i].slider
        }
        // console.log(this.sliderItems)
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
