<template>
    <div>
        <Titulo texto="Vista Articulo blog" />
        <!-- <h2>Parámetro: {{ $route.params.id }} </h2> -->
         <div class="cont-articulo">
             <div class="box-titulo">
                 <div>
                     <span>ID Artículo: {{articulo.id}}</span>
                 </div>
                 <div>
                    <h3> {{articulo.title}} </h3>
                 </div>
             </div>
           
            <p>{{ articulo.body }} </p>
    
            <a href="../blog" class="volver"> Volver a todos los posts</a>
         </div>
    </div>
</template>
<script>

import Titulo from '../components/Titulo'
export default {
    components:{
        Titulo
    },
    data() {
        return {
            articulo: {

            }
        }
    },
    methods: {
        async consumirArticulo(){
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                const objeto = await data.json()
                console.log(objeto);
                this.articulo = objeto
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.consumirArticulo()
    }
}
</script>
<style lang="css">
     .cont-articulo{
       width: 100%;
       max-width: 1200px;
       margin: 0 auto;
       height: auto;
     
        padding-bottom: 1em;
        padding-top: 1em;
   }
   .volver{
       color: green;
   }
</style>