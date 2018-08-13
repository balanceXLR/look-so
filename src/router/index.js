import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/homePage'
import Recommend from '@/views/recommend'
import Movie from '@/views/movie'
import Review from '@/views/review'
import Rank from '@/views/rank'
import MovieDetail from '@/views/movieDetail'
import SearchResult from '@/views/searchResult'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage/recommend'
    },
    {
      path: '/homepage',
      name: 'homePage',
      component: HomePage,
      children: [
        {
          path: 'recommend',
          name: 'recommend',
          component: Recommend
        },
        {
          path: 'movie',
          name: 'movie',
          component: Movie
        },
        {
          path: 'review',
          name: 'review',
          component: Review
        },
        {
          path: 'rank',
          name: 'rank',
          component: Rank
        },
        {
          path: 'movieDetail',
          name: 'movieDetail',
          component: MovieDetail
        },
        {
          path: 'searchResult',
          name: 'searchResult',
          component: SearchResult
        }
      ]
    }
  ]
})
