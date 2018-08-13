<template>
  <div class="rank">
    <div class="rank-left">
      <rank-content></rank-content>
    </div>
  </div>
</template>
<script>

import RankContent from './rank/rankContent'
export default {
  components: {
    RankContent
  },
  data () {
    return {
    }
  }
}

</script>
<style lang="less" scoped>
.rank {
  .rank-left {
    width: 70%;
  }
}
</style>
