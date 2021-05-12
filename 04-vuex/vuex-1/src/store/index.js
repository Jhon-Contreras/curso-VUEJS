import { createStore } from 'vuex'

export default createStore({
  // siempre state, irá en una propiedad computada 
  state: {
    contador: 100
  },
  // las mutaciones modifican el state
  mutations: {
    incrementar(state, payload){
      state.contador = state.contador + payload
    },
    disminuir(state, payload){
      state.contador = state.contador - payload
    }
  },
  // siempre las acciones llaman a la mutacion 
  actions: {
    //commit ejecuta una mutacion
    accionIncrementar({commit}){
      commit('incrementar', 10)
    },
    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    },
    // si queremos enviar mas de un parametro, lo hacemos a traves de un objeto
    //hacemos la accion para dar funcionalidad al componente BtnAccion
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero)
      } else{
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
