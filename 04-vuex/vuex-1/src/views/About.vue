<template>
  <div class="about">
       <h1> V-model ejemplo </h1>

       <input type="text" v-model="texto">
       <h2>{{texto}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto: ''
    }
  },
}
</script>
