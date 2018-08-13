<template>
  <div class="review">
    <div class="review-left">
      <review-content></review-content>
    </div>
  </div>
</template>

<script>
import ReviewContent from './review/reviewContent'
export default {
  components: {
    ReviewContent
  },
  data () {
    return {
    }
  }
}

</script>
<style lang="less" scoped>
.review {
  .review-left {
    width: 70%;
  }
}
</style>
