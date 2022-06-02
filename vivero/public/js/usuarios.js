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
        async saveUser() {
            try{
                let req = await axios.post('api/usuarios', this.newUser);

                if(req.data > 0) {
                    this.newUser = newUser
                    this.searchUsers()
                } else {
                    swal(this.message, 'Error al crear el usuario', 'error')
                }
            } catch(e) {
                swal(this.message, 'Error al crear el usuario', 'error')
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
