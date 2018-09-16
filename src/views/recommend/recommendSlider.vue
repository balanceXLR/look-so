<template>
  <div class="recommend-slider">
    <el-carousel height="400px" v-loading="isLoading">
      <el-carousel-item v-for="(item,index) in sliderItems" :key="index">
        <img class="slider-img" :src="item.slider" alt="" @click="_goMovieDetail(item.id)">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {getRecommendSlider} from '@/js/api'
import {goMovieDetail} from '@/js/router'
import {sliderFliter} from '@/js/common'
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
      console.log(movieId)
      goMovieDetail(movieId)
    },
    _getRecommendSlider () {
      getRecommendSlider().then((res) => {
        this.sliderItems = sliderFliter(res.data)
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
