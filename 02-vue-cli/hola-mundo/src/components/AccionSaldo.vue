<template>
    <div>
       <button @click="accion" :disabled="desactivar"> {{ texto }} </button>
    </div>
</template>

<script>
    export default {
        props:{
            texto:String,
            // pasar un elemento por defecto 
            desactivar: {
                type: Boolean,
                default: false
            }

        },
        methods: {
            accion(){
                this.$emit('accion')
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>