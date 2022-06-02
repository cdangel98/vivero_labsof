new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: () => ({
        session: false,
        user: {
            name: '',
            pass: '',
        },
        message: '!Ups ha ocurrido algo',
    }),
    methods: {
        async login() {
            try{
                let req = await axios.post('api/login', this.user);
                if(req.data > 0) {
                    this.session = true
                    location.reload();
                } else {
                    swal(this.message, 'Usuario o contraseña incorrecta', 'error')
                }
            } catch(e) {
                swal(this.message, 'Error al buscar usuario', 'error')
            }
        },
    }
})
