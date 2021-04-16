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
    <AccionSaldo texto="Aumentar Saldo"/>
    <AccionSaldo texto ="Disminuir Saldo"/>
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
               servicios:['giro', 'abono', 'transferencias']
           }
       },
       methods: {
           aumentar(){
               this.saldo = this-saldo + 100
           },
           disminuir(){
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