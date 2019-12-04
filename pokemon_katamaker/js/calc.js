import Vue from 'vue'
import App from './App.vue'

/* ここから */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


pokemon = {
    base: {
        hp: 0,
        a: 0,
        d: 0,
        spa: 0,
        spd:0,
        s:0
    },
    effort: {
        hp: 0,
        a: 0,
        d: 0,
        spa: 0,
        spd:0,
        s:0
    },
    move_num: 0,
    move: {
        a: "",
        b: "",
        c: "",
        d: ""
    }
}



var vm = new Vue({
    el: '#app',
    data: {
        pokemon: pokemon,
        stat_name: ["HP", "Atk", "Def", "SpA", "SpD", "Sp"]
    }
})