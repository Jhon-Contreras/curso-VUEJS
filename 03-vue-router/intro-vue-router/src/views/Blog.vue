<template>
    <div>
         <Titulo texto="Blog en VUE" />
         <!-- <button @click="consumirApi"> Consumir API</button> -->
         <div v-for="item in arrayBlog" :key="item.id">
             <!-- se usan comillas invertidas para agregar js en el html -->
             <!-- <router-link :to="`/blog/${item.id}`"> {{ item.title }}</router-link> -->
            
         </div>
          <div class="grid-blog">
              <div class="item" v-for="item in arrayBlog" :key="item.id">
                
                      <div class="post-id">
                            <span>post id: <br> {{item.id}} </span>
                      </div>
                      <div class="post-title">
                          <h2> <router-link :to="`/blog/${item.id}`"> {{ item.title }}</router-link></h2>
                      </div>
              
              </div>
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
            arrayBlog: []
        }
    },
    methods: {  
        async consumirApi(){
            try{
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const array = await data.json()
                console.log(array);
                this.arrayBlog = array;
            } catch (error){
                console.log(error);
            }
        }
    },
    // ciclo de vida de vue / no es recomendable usar funciones de flecha porque esta no tiene acceso al this
    created(){
        this.consumirApi()
    }
}
</script>
<style lang="css">
   .grid-blog{
       width: 100%;
       max-width: 1200px;
       margin: 0 auto;
       height: auto;
       display: grid;
       grid-template-columns: 1fr 1fr 1fr 1fr;
       grid-template-rows: auto;
       gap: 20px 20px;
       grid-template-areas:
        ". . . .";
        padding-bottom: 1em;
        padding-top: 1em;
   }
   @media screen and (max-width: 780px) {
       .grid-blog{
           grid-template-columns: 1fr 1fr;
            grid-template-areas:
            ". . ";
       } 
   }
   .grid-blog .item{
       height: auto;
       padding-top: 5px;
       padding-bottom: 5px;
       border: 1px solid rgb(209, 209, 209);
       text-align: left;
        display: grid;
       grid-template-columns: 0.5fr 1.5fr;
       grid-template-rows: auto;
       gap: 0px 0px;
       grid-template-areas:
        ". .";
   }
   .grid-blog .item h2{
      
       font-weight: 400;
       font-size: 14px;
   }
    .grid-blog .item h2 a{
        text-decoration: none;
        color: black;
    }.grid-blog .item h2 a:hover{
        color: green;
    }
    .grid-blog .item .post-id{
        padding-left: 5px;
        text-align: center;
        border-right: 1px solid rgb(209, 209, 209);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .grid-blog .item .post-id span{
        font-weight: 700;
        font-size: 11px;
    }
    .grid-blog .item .post-title{
        padding-left: 5px;
        text-align: left;
    }
    
</style>