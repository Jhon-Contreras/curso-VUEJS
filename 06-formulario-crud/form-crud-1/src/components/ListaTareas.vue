<!--componente para mostrar tareas  -->
<template>
   {{tareas}}
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Categorías</th>
                <th scope="col">Estado</th>
                <th scope="col">Número</th>
                <th scope="col">Acción</th>
            </tr>
        </thead>
        <tbody>
            <!-- listamos los datos que vienen desde tareas (tienda) -->
            <tr v-for="item in tareas" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.nombre}}</td>
                <!-- imprimir array con funcion join  -->
                <td>{{item.categorias.join(', ')}}</td>
                <td>{{item.estado}}</td>
                <td>{{item.numeros}}</td>
               
                <td>
                    <button class="btn btn-danger btn-sm" @click="deleteTarea(item.id)">Eliminar</button>
                    <!-- boton actualizar datos  -->
                    <!-- mediante el to, vamos a la vista Editar, con params enviamos el id de la tarea y la recibimos en la vista Editar  -->
                    <router-link class="btn btn-warning mx-2 btn-sm" 
                    :to="{
                        name: 'Editar', 
                            params: { 
                                id: item.id
                            }
                        }"
                    > 
                        Editar
                    </router-link>
                </td>
            </tr>
         
        </tbody>
    </table>
     
</template>

<script>

import {mapState, mapActions} from 'vuex'
export default {
    //llamamos a toda la lista de tareas desde la tienda
    computed:{
        ...mapState(['tareas'])
       
    },
    // recibimos la accion de eliminar tareas
    methods :{
        ...mapActions(['deleteTarea'])
    }

    
}
</script>

