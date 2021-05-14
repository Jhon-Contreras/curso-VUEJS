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
               
                <td>Accion</td>
            </tr>
         
        </tbody>
    </table>
     
</template>

<script>

import {mapState} from 'vuex'
export default {
    //llamamos a toda la lista de tareas desde la tienda
    computed:{
        ...mapState(['tareas'])
    }
    
}
</script>

