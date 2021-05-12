import { createStore } from 'vuex'

export default createStore({
  // siempre state, irá en una propiedad computada 
  state: {
    contador: 100
  },
  // las mutaciones modifican el state
  mutations: {
    incrementar(state){
      state.contador = state.contador + 10
    }
  },
  // accionar una mutacion 
  actions: {
    //commit ejecuta una mutacion
    accionIncrementar({commit}){
      commit('incrementar')
    } 
  },
  modules: {
  }
})
