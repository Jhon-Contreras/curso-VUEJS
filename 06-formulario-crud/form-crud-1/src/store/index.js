import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas: [], //array que almacenará las tareas 
    tarea:{ //objeto tarea
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
    }
  },
  // para agregar elementos al array usamos mutaciones y acciones 
  mutations: {
    set(state, payload){ //la mutacion recibe un state (array) y el payload (tarea)
      // empujamos la tarea dentro del array 
      state.tareas.push(payload)
      console.log(state.tareas);
    }
  },
  actions: {
    setTareas({commit}, tarea){ //recibimos una tarea desde el formulario
      commit('set', tarea)
    }
  },
  modules: {
  }
})
