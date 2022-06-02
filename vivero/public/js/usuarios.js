let newUser = { document: '', name: '', rol: '' }

new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: () => ({
        newUser,
        listUsers: []
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
                    alert('Ocurrio un error al crear el usuario')
                }
            } catch(e) {
                alert('Ocurrio un error al crear el usuario')
                console.error(e.message)
            }
        },

        async searchUsers() {
            try{
                let req = await axios.get('api/usuarios');

                if(req.data.length > 0) {
                    this.listUsers = req.data
                }
            } catch(e) {
                alert('Ocurrio un error al buscar los usuario')
                console.error(e.message)
            }
        }
    }
})
