const app = Vue.createApp({
    data(){
        return {
            // api license: https://creativecommons.org/licenses/by-sa/3.0
            api: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
            datas: [],
            keyWord: '',
            isNotFound: false,
            isSearch: false,
        }
    },
    methods: {
        getData(){
            if(this.keyWord.trim().length > 0){
                axios.get(this.api+this.keyWord)
                .then(response => {
                    this.isNotFound = false;
                    this.isSearch = true;
                    console.log(response.data[0]);
                    this.datas = response.data[0];
                })
                .catch((error) => {
                    if (error.response.status === 404) {
                        window.alert('Not Found!')
                        this.isNotFound = true;
                    }
                })
            }
        },
        playSound(el) {
            var sound = document.getElementById(el);
            sound.play();
        }
       
    },
    mounted(){
        this.getData();
    },
    computed: {
        
    }
})

app.mount('#app')