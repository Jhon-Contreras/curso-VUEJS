<template>
    <div class="row d-flex justify-content-center mt-4">
      <div class="col-xl-8">
        <div class="card py-5 px-5">
          <!-- @submit recibe un metodo  -->
          <!-- @submit.prevent se usa para evitar el procesamiento por get por defecto de html  -->
          <form @submit.prevent="procesarFormulario">
              <Input :tarea="tarea"/>
              <hr>
          </form>

          <p>{{tarea}}</p>
        </div>
      </div>
    </div>
</template>

<script>

import Input from '../components/Input'
import {mapActions} from 'vuex'

// llamamos al paquete short id
const shortid = require('shortid')

export default {
  name: 'Home',
    components: {
      Input
    },
    data() {
      return {
        tarea:{
          id: '',
          nombre: '',
          categorias: [],
          estado: '',
          numero: 0
        }
      }
    },
    methods: {
      ...mapActions(['setTareas']),
      procesarFormulario(){
        console.log(this.tarea);
        if (this.tarea.nombre.trim() === "") {
            console.log("Campo vacio");
            return
        }
        console.log("No está vacio");
        // generar id con libreria short id
        this.tarea.id = shortid.generate()
        console.log(this.tarea.id);
        // envian los datos 
        this.setTareas(this.tarea)

        // limpiamos los campos 
        this.tarea = {
          nombre: '',
          categorias: [],
          estado: '',
          numero: 0
        }
      }
    }
   
  }
 
</script>
