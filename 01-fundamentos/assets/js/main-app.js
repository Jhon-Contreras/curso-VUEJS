// instaciamos vue 
const app = Vue.createApp({
    data(){
        return{
            titulo: 'Banco con Vue.js',
            cantidad: 1000,
            enlace: 'https://youtube.com/',
            estado: false,
            servicios : ['transferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo(){
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo(valor){
            if (this.cantidad === 0) {
                alert('Saldo en 0!')
                this.desactivar = true
                return
            }
            this.cantidad = this.cantidad - valor

        }
    },
    computed: {
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        tituloMayuscula(){
            return this.titulo.toUpperCase();
        }
    }

})