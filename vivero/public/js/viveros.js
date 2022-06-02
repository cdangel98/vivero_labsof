let newVivero = { nombre: '', departamento: '', municipio: '', productor: '' }

new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: () => ({
        newVivero,
        listViveros: [],
        message: '!Ups ha ocurrido algo',
    }),
    mounted() {
        this.searchViveros()
    },
    methods: {
        validInput(data, type) {
            let regex = (type == "int") ? /^([0-9])*$/ : /^([a-zA-Z])*$/
            return regex.test(data)
        },

        async saveVivero() {
            if(this.validInput(this.newVivero.nombre, 'text') && this.newVivero.departamento != '' && this.newVivero.municipio != '' && this.newVivero.productor != '') {
                try{
                    let req = await axios.post('api/viveros', this.newVivero);
                    if(req.data > 0) {
                        this.newVivero = newVivero
                        this.searchViveros()
                    } else {
                        swal(this.message, 'Error al crear el vivero', 'error')
                    }
                } catch(e) {
                    swal(this.message, 'Error al crear el vivero', 'error')
                }
            } else {
                swal(this.message, 'El formato de los datos incorrecto o vacios', 'error')
            }
        },

        async searchViveros() {
            try{
                let req = await axios.get('api/viveros');

                if(req.data.length > 0) {
                    this.listViveros = req.data
                }
            } catch(e) {
                swal(this.message, 'Error al buscar los vivero', 'error')
            }
        }
    }
})
