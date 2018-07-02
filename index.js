// 引入vue
import Vue from 'vue';
// 引入app.vue
import App from './app.vue'

// 创建vue根实例
new Vue({
    el: '#app',
    render: h => h(App)
})
