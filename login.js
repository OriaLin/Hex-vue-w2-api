import {createApp} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.4.15/vue.esm-browser.min.js';

const baseUrl = 'https://ec-course-api.hexschool.io'
const path = 'orialin'

const app = createApp({
    data(){
        return {
            user:{
                username:'',
                password:''
            },
        }
    },
    methods:{
        login() {
            const user = this.user;
            axios.post(`${baseUrl}/v2/admin/signin`, user)
                .then(res => {
                    const {token,expired} = res.data //解構賦值
                    document.cookie =`HexschoolVueW2=${token}; expires=${new Date(expired)}`; //存入cookie
                    window.location='admin.html'
                })
                .catch(err => {
                    console.log(err.data.message);
                    console.log(err.data.error);
                    alert('登入失敗')
                })
        }
    },
    mounted(){
        
    }
});
app.mount('#app')