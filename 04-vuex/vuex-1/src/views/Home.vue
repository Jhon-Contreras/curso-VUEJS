<template>
  <div class="home">

 
    <h1 :style="colorContador"> {{titulo}}: {{ contador }} </h1>

    <button @click="accionIncrementar"> Aumentar </button>
    <BtnDisminuir />
  </div>
</template>

<script>
import BtnDisminuir from '../components/BtnDisminuir'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    BtnDisminuir
  },
  data() {
    return {
      titulo: 'Contador Vuex'
    }
  },
  // mapeamos el state con ... para ser utilizado 
  computed:{
    ...mapState(['contador']),
    colorContador(){
      return  [this.contador > 100 ? {'color' : 'green'} : {'color' : 'red'}]
    }
  },
  // las mutaciones y las acciones se mapean en los metodos 
  methods: {
    ...mapMutations(['incrementar']), //no se recomienda esto
    ...mapActions(['accionIncrementar'])
  },
}
</script>
