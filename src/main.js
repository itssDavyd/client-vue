import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

global.jQuery = require('jquery')
var $ = global.jQuery;
window.$ = $;
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './axios'

createApp(App).use(store).use(router).mount('#app')