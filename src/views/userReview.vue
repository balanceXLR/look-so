<template>
  <div class="user-review" v-loading="isLoading">
      <review-slot v-for="(review,index) in reviews" :key="index" :review="review"></review-slot>
  </div>
</template>

<script>
import { getUserReview, baseUrl } from '@/js/api'
import { mapGetters } from 'vuex'
import ReviewSlot from '@/components/reviewSlot'
import {userFliter} from '@/js/common'
export default {
  components: {
    ReviewSlot
  },
  data () {
    return {
      reviews: [],
      isLoading: true
    }
  },
  created () {
    this._getUserReview()
  },
  methods: {
    _getUserReview () {
      getUserReview(this.user.userId, 1).then(res => {
        // console.log(res.userReview)
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
