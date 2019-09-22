import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {_id: 0, btns: {state: 0, color: ''}, author: {name: 'David K. Downs', img: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'}, img: 'https://i.zst.com.br/images/as-4-melhores-cadeiras-para-escritorio-em-2019-photo745722425-44-7-37.jpg', text: 'Escritório'}, 
      {_id: 1, btns: {state: 0, color: ''}, author: {name: 'David K. Downs', img: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'}, img: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/1_hong_kong_panorama_2011_dusk_victoria_peak.jpg', text: 'Prédios'},
    ]
  },
  mutations: {

  },
  actions: {

  }
})
