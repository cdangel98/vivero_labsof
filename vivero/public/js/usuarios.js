new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: () => ({
        newUser: {
            document: '',
            name: '',
            rol: '',
        },
        listUsers: []
    }),
    mounted() {
        this.searchUsers()
    },
    methods: {
        saveUser() {
            console.log(this.newUser)
        },

        searchUsers() {
            console.log(this.listUsers)
        }
    }
})
