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
    },
    // mutacion para eliminar tarea del array 
    eliminar(state, payload){
      // filtramos, decimos que por cada recorrido vamos a preguntar si item.id es distinto al id que estamos recibiendo (payload) 
      state.tareas = state.tareas.filter(item => item.id !== payload)
    }
  },
  actions: {
    //recibimos una tarea desde el formulario
    setTareas({commit}, tarea){ 
      commit('set', tarea)
    },
    //accion para eliminar una tearea
    deleteTarea({commit}, id){
      commit('eliminar', id)
    }
  },
  modules: {
  }
})
