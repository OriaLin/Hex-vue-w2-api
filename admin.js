import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.4.15/vue.esm-browser.min.js';

const baseUrl = 'https://ec-course-api.hexschool.io'
const path = 'orialin'

const app = createApp({
    data() {
        return {
            products: [],
            tempProduct: []
        };
    },
    methods: {
        getProducts() {
            
        }
    },
    mounted() {
        const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("HexschoolVueW2="))
            ?.split("=")[1]; //在mdn的cookie頁目找取出cookie的方法
        axios.defaults.headers.common['Authorization'] = token
        // 在初始化就get資料
        axios.get(`${baseUrl}/v2/api/${path}/admin/products`)
            .then(res => {
                // console.log(res.data);
                this.products = res.data.products
                console.log(this.products);
                
            })
            .catch(err => {
                console.dir(err.data);
                
            })
    }
});
app.mount('#app');