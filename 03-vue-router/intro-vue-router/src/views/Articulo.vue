<template>
    <div>
        <Titulo texto="ruta con parametros" />
        <h2>Parámetro: {{ $route.params.id }} </h2>
    </div>
</template>
<script>

import Titulo from '../components/Titulo'
export default {
    components:{
        Titulo
    }
}
</script>
<style lang="">
    
</style>