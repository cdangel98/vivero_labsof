let newUser = { document: '', name: '', rol: '' }

new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: () => ({
        newUser,
        listUsers: [],
        message: '!Ups ha ocurrido algo',
    }),
    mounted() {
        this.searchUsers()
    },
    methods: {
        validInput(data, type) {
            let regex = (type == "int") ? /^([0-9])*$/ : /^([a-zA-Z])*$/
            return regex.test(data)
        },

        async saveUser() {
            if(this.validInput(this.newUser.document, 'int') && this.validInput(this.newUser.name, 'text') && this.newUser.rol != '') {
                try{
                    let req = await axios.post('api/usuarios', this.newUser);
                    console.log(this.newUser.document,this.newUser.name,this.newUser.rol)
                    if(req.data > 0) {
                        this.newUser = newUser
                        this.searchUsers()
                    } else {
                        swal(this.message, 'Error al crear el usuario', 'error')
                    }
                } catch(e) {
                    swal(this.message, 'Error al crear el usuario', 'error')
                }
            } else {
                swal(this.message, 'El formato de los datos incorrecto o vacios', 'error')
            }
        },

        async searchUsers() {
            try{
                let req = await axios.get('api/usuarios');

                if(req.data.length > 0) {
                    this.listUsers = req.data
                }
            } catch(e) {
                swal(this.message, 'Error al buscar los usuario', 'error')
            }
        }
    }
})
