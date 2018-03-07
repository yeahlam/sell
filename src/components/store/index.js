import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        scrollY: 0,
        recordScrollY1:true
    }
})

export default store