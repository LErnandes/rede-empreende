import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      idUser: '',
      tokenUser: '',
      isLogged: false,
      posts: [
        {_id: 0, coment: {text: 'Muito bonito', author: {name: 'Bruno', img: ''}}, btns: {state: 0, color: ''}, author: {name: 'David K. Downs', img: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'}, img: 'https://i.zst.com.br/images/as-4-melhores-cadeiras-para-escritorio-em-2019-photo745722425-44-7-37.jpg', text: 'Escritório'}, 
        {_id: 1, coment: {text: '', author: {name: '', img: ''}}, btns: {state: 0, color: ''}, author: {name: 'David K. Downs', img: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'}, img: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/1_hong_kong_panorama_2011_dusk_victoria_peak.jpg', text: 'Prédios'},
      ]
  },

  getters: {
      getIsLogged: state => {
          return state.isLogged;
      },

      getDetailsUser: state => {
          return state.detailsUser;
      },

      getTokenUser: state => {
          return state.tokenUser;
      },

      getIdUser: state => {
          return state.idUser
      }
  },

  mutations: {
      SAVE_LOGIN: (state, data) => {
          state.idUser = data.user._id;
          state.tokenUser = data.token;
          state.detailsUser = {
              email: data.user.email,
              name: data.user.name,
              image: data.user.image
          };
          state.isLogged = true;
      },

      LOGOFF: state => {
          state.idUser = "";
          state.tokenUser = "";
          state.isLogged = false;
      },
  },
  actions: {}
})