<template>
    <div>
        <h2>Tipo de cuenta: {{cuenta}}</h2>
        <h3>Saldo disponible: {{ saldo }}</h3>
        <h3>Cuenta {{ estado ? 'Activa' : 'Desactivada'}}</h3>

    </div>
    <div>
        <ul style="list-style:none">
            <li v-for="(servicio, index) in servicios" :key="index">
                {{index +1}} {{ servicio }}
            </li>
        </ul>
    </div>
   
 
</template>

<script>
    export default {
       data() {
           return {
               saldo: 1000,
               cuenta: 'Cuenta Corriente',
               estado: true,
               servicios:['giro', 'abono', 'transferencias']
           }
       },
    }
</script>

<style lang="scss" scoped>

</style>