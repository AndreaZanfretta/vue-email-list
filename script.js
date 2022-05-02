const app = new Vue({
    el: '#root',
    data: {
        mail: [],
    },
    methods: {
    },
    created(){
        for(let i = 0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(res => {
                    this.mail.push(res.data.response);
            })
            .catch(err => {
                console.error(err); 
            })
        }
        console.log(this.mail)
    },
   })