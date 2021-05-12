<template>
    <button @click="accionDisminuir(20)"> Disminuir </button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  // las mutaciones y las acciones se mapean en los metodos 
  methods: {
  
    ...mapActions(['accionDisminuir'])
  },
}
</script>

