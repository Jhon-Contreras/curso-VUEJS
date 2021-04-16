<template>
    <div>
        <h2>Tipo de cuenta: {{cuenta}}</h2>
        <h3>Saldo disponible: {{ saldo }}</h3>
        <h3>Cuenta {{ estado ? 'Activa' : 'Desactivada'}}</h3>

    </div>
    <div>
        <ul class="lista-servicios">
            <li v-for="(servicio, index) in servicios" :key="index">
                {{index +1}} {{ servicio }}
            </li>
        </ul>
    </div>
    <!-- componente hijo  -->

    <AccionSaldo texto="Aumentar Saldo" @accion="aumentar"/> <!-- custom events @accion="nombre metodo"-->
    <AccionSaldo texto ="Disminuir Saldo" @accion="disminuir" :desactivar="desactivar"/> <!-- pasamos props :desactivar -->
</template>

<script>
import AccionSaldo from './AccionSaldo'
    export default {
        components: {
            AccionSaldo,
            
        },
       data() {
           return {
               saldo: 1000,
               cuenta: 'Cuenta Corriente',
               estado: true,
               servicios:['giro', 'abono', 'transferencias'],
               desactivar: false
           }
       },
       methods: {
           aumentar(){
               this.saldo = this.saldo + 100
               this.desactivar = false
           },
           disminuir(){
               if (this.saldo === 0) {
                   this.desactivar = true
                   alert('Saldo agotado')
                   return
               }
               this.saldo = this.saldo - 100
           }
       },
      
    }
</script>

<style scoped>
    .lista-servicios{
        list-style: none;
    }
</style>