<template>
  Editar {{$route.params.id}} - {{tarea}}
  <form @submit.prevent="updateTarea(tarea)">
      <Input :tarea="tarea" />
  </form>
</template>

<script>

import {mapState, mapActions} from 'vuex'
import Input from '../components/Input'
export default {
    components:{
        Input
    },
    computed:{
        ...mapState(['tarea'])
    },
    // recibimos la accion para cargar datos de tarea seleccionada para edicion 
    methods: {
        ...mapActions(['setTarea', 'updateTarea'])
    },
    created() {
        this.setTarea(this.$route.params.id)
    },
}
</script>

<style>

</style>