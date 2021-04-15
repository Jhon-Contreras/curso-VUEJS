
app.component('footer-banco', {
    // los props sirven para pasar parámetros o información al propio web component 
    // en este caso, le estamos pasando el valor (cantidad que viene de main-app.js) 
    props: ['valor', 'fecha'],
    // alt+96 template strings 
    template: /*html*/`
        <div class="bg-dark text-center my-3 mt-5 text-white">
            <h3> {{texto}} - {{valor}}</h3>
        </div>
    `,
    data(){
        return{
            texto: 'Footer del sitio web dinámico'
        }
    }
})