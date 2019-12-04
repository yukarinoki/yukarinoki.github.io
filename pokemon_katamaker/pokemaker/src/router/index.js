import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' 
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PokemonKataMaker from '@/components/PokemonKataMaker'

Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PokemonKataMaker',
      component: PokemonKataMaker
    }
  ]
})