<template>
  <div class="user-review" v-loading="isLoading">
      <review-slot v-for="(review,index) in reviews" :key="index" :review="review"></review-slot>
      <no-result v-show="isShow"></no-result>
  </div>
</template>

<script>
import { getUserReview, baseUrl } from '@/js/api'
import { mapGetters } from 'vuex'
import ReviewSlot from '@/components/reviewSlot'
import {userFliter} from '@/js/common'
import NoResult from '@/components/noResult'
export default {
  components: {
    ReviewSlot,
    NoResult
  },
  data () {
    return {
      reviews: [],
      isLoading: true,
      isShow: false
    }
  },
  created () {
    this._getUserReview()
  },
  methods: {
    _getUserReview () {
      getUserReview(this.user.userId, 0).then(res => {
        // console.log(res.userReview)
        if(res.code === '0000') {
          for (let i = 0; i < res.data.length; i++) {
            this.reviews[i] = {
              id: res.data[i].movie.id,
              cover: baseUrl + res.data[i].movie.cover,
              name: res.data[i].movie.name,
              head: res.data[i].user.head,
              user: res.data[i].user.nickname,
              score: res.data[i].score,
              time: res.data[i].time,
              level: res.data[i].user.level,
              content: res.data[i].content
            }
          }
          this.reviews = userFliter(this.reviews)
        } else {
          this.isShow = true
        }
        
        this.isLoading = false
      })
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}

</script>
<style lang="less" scoped>
</style>
