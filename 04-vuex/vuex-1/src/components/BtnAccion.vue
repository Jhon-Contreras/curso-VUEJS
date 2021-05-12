<template>
<!-- boton con logica para aumentar y disminuir, ademas para enviar mas de un paremtro, mediante objeto  -->
    <button @click="accionBoton({estado: estado, numero: 100})"> {{textoBoton}} </button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:{
        estado: Boolean
    },
    computed:{
        textoBoton(){
            return this.estado ? 'Aumetar' : 'Disminuir'
        }
    },
    methods:{
        ...mapActions(['accionBoton'])
    }
}
</script>
