<template>
  <div class="movie">
    <div class="movie-left">
      <movie-sort></movie-sort>
      <movie-sort-content></movie-sort-content>
    </div>
    <div class="movie-right">

    </div>
  </div>
</template>

<script>
import MovieSort from './movie/movieSort'
import MovieSortContent from './movie/movieSortContent'
export default {
  components: {
    MovieSort,
    MovieSortContent
  },
  data () {
    return {
    }
  }
}

</script>
<style lang="less" scoped>
  .movie {
    .movie-left {
      width: 70%;
    }
  }
</style>
