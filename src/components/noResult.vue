<template>
  <div class="no-result">
    <img :src="imgUrl" alt="" width="200px">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgUrl: require('../../static/img/noResult.png')
      }
    }

  }

</script>
<style>
</style>
