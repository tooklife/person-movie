import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../view/Movie/Movie.vue'
import Cinema from '../view/Cinema/Cinema.vue'
import Mine from '../view/Mine/Mine.vue'
import City from '../components/City/City.vue'
import NowPlaying from '../components/NowPlaying/NowPlaying.vue'
import ComingSoon from '../components/ComingSoon/ComingSoon.vue'
import Search from '../components/Search/Search.vue'
import Detail from '../view/Movie/detail.vue'


Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/movie/nowPlaying'
    },
    {
      path: '/movie',
      component: Movie,
      children: [{
          path: '/movie',
          redirect: '/movie/nowPlaying'
        },
        {
          path: 'city',
          component: City
        },
        {
          path: 'nowPlaying',
          component: NowPlaying
        },
        {
          path: 'comingSoon',
          component: ComingSoon
        },
        {
          path: 'search',
          component: Search
        }

      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/movie/detail/:movieId',
      components: {
        detail: Detail
      }
    }
  ],
  linkActiveClass: 'mui-active'
})
