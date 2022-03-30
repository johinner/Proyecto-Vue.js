console.log("vinculado")
const add = new Vue({
    el: '#app',
    data: {
        titulo: 'Iniciando con Vue.js',
        frutas: [
            {nombre: 'Pera', cantida:10},
            {nombre: 'Manzanas', cantida:0},
            {nombre: 'Platanos', cantida:15}
        ]
    }
})