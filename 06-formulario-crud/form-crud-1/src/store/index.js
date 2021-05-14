import { createStore } from 'vuex'
// importamos router para configurar un empuje al usuario despues del update 
import router from '../router'
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
    },
    //mutacion para cargar datos boton editar tarea
    tarea(state, payload){
       
        // si no encuentra esta validacion, aplicamos router.push para que el usuario no acceda a vista Editar/id sin haber presionado el boton editar 
        if (! state.tareas.find(item => item.id === payload)) {
          router.push('/')
          return
        }
         // buscamos el id entre el array de tareas 
        // funcion find() busca algo dentro de un array 
        state.tarea = state.tareas.find(item => item.id === payload)
       
    },
    // mutacion para actualizar tarea 
    update(state, payload){
     
      // map() devuelve un array indicando la condicion que queramos 
      // en todo el recorrido, cuando item.id sea igual al payload.id (tarea es un objeto y tiene id) cuando encuentre esa coincidencia devolvemos el payload, en caso contrario devolvemos el item 
      state.tareas = state.tareas.map(item => item.id === payload ? payload : item)
      // luego de actualizar, empujamos al usuario al home
      router.push('/')
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
    },
    // accion para pasar datos boton editar tarea 
    setTarea({commit}, id){
      commit('tarea', id)
    },
    // accion logica para actualizar tarea 
    updateTarea({commit}, tarea){
      commit('update', tarea)
    }
  },
  modules: {
  }
})
