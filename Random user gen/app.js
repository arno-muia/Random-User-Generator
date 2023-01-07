const app = Vue.createApp({
    data(){
        return{
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            gender: 'male',
            picture: 'https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        }        
    },
methods: {
    async getUser(){
        const res = await fetch('https://randomuser.me/api/?nat=us')
        const {results} = await res.json()

        //console.log(results)

        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large    
},
},
})

app.mount('#app') 