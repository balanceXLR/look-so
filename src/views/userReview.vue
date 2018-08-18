<template>
  <div class="user-review" v-loading="isLoading">
      <review-slot v-for="(review,index) in reviews" :key="index" :review="review"></review-slot>
  </div>
</template>

<script>
import { getUserReview } from '@/js/api'
import { mapGetters } from 'vuex'
import ReviewSlot from '@/components/reviewSlot'
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
      getUserReview(this.user.userId, 10).then(res => {
        // console.log(res.userReview)
        this.reviews = res.userReview
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
