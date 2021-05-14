<template>
      <!-- v-model.trim elimina espacios al enviar un form  -->
        <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">
        
        <!-- checkbox's  -->
        <div class="form-check form-check-inline">
            <input type="checkbox" class="form-check-input" id="check-1" v-model="tarea.categorias" value="javascript">
            <label for="check-1" class="form-check-label">Javascript</label>
        </div>
        <div class="form-check form-check-inline">
            <input type="checkbox" class="form-check-input" id="check-2" v-model="tarea.categorias" value="node js">
            <label for="check-2" class="form-check-label">Node JS</label>
        </div>
        <!-- radio buttons  -->
        <div class="mt-2">
        <div class="form-check form-check-inline">
            <input type="radio" class="form-check-input" id="radio-1" v-model="tarea.estado" value="urgente">
            <label for="radio-1" class="form-check-label">Urgente</label>
        </div>

            <div class="form-check form-check-inline">
            <input type="radio" class="form-check-input" id="radio-2" v-model="tarea.estado" value="relax">
            <label for="radio-2" class="form-check-label">Relax</label>
        </div>
        </div>
        <!-- numeros  -->
        <div class="mt-2">
        <!-- v-model.number transforma un string en un numero  -->
            <input type="number" class="form-control" v-model.number="tarea.numero">
        </div>

        <button class="btn btn-success mt-3" type="submit" :disabled="bloquear">Procesar</button>
</template>

<script>
export default {
    props:{
        tarea: Object
    },
    computed:{
        bloquear(){
        return this.tarea.nombre.trim() === "" ? true : false
        }
    }
}
</script>

