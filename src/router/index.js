import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/homePage'
import MovieHome from '@/views/movieHome'
import UserHome from '@/views/userHome'
import AdminHome from '@/views/adminHome'
import Recommend from '@/views/recommend'
import Movie from '@/views/movie'
import Review from '@/views/review'
import Rank from '@/views/rank'
import MovieDetail from '@/views/movieDetail'
import SearchResult from '@/views/searchResult'
import UserInfo from '@/views/UserInfo'
import UserCollect from '@/views/userCollect'
import UserReview from '@/views/userReview'
import AdminUser from '@/views/adminUser'
import AdminMovie from '@/views/adminMovie'
import AdminReview from '@/views/adminReview'
import AdminUpload from '@/views/adminUpload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
      redirect: '/movieHome',
      children: [
        {
          path: 'movieHome',
          name: 'movieHome',
          component: MovieHome,
          redirect: '/movieHome/recommend',
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
        },
        {
          path: 'userHome',
          name: 'userHome',
          component: UserHome,
          redirect: '/userHome/userInfo',
          children: [
            {
              path: 'userInfo',
              name: 'userInfo',
              component: UserInfo
            },
            {
              path: 'userCollect',
              name: 'userCollect',
              component: UserCollect
            },
            {
              path: 'userReview',
              name: 'userReview',
              component: UserReview
            }
          ]
        },
        {
          path: 'adminHome',
          name: 'adminHome',
          component: AdminHome,
          redirect: '/adminHome/adminUser',
          children: [
            {
              path: 'adminUser',
              name: 'adminUser',
              component: AdminUser
            },
            {
              path: 'adminMovie',
              name: 'adminMovie',
              component: AdminMovie
            },
            {
              path: 'adminReview',
              name: 'adminReview',
              component: AdminReview
            },
            {
              path: 'adminUpload',
              name: 'adminUpload',
              component: AdminUpload
            }
          ]
        }
      ]

    }
  ]
})
