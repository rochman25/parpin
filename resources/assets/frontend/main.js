import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)

// axios
import axios from "./axios.js"
Vue.prototype.$http = axios

// API Calls
import "./http/requests"

// Theme Configurations
import './../../../themeConfig.js'

// Globally Registered Components
import './globalComponents.js'

// Styles: SCSS
import './assets/scss/main.scss'

// Tailwind
import './assets/css/main.css'

import router from './router.js'

// Vuex Store
import store from './store/store.js'

// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        // Add your API key here
        key: 'YOUR_API_KEY',
        libraries: 'places', // This is required if you use the Auto complete plug-in
    },
})

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('./assets/css/iconfont.css')

//adonis-vue-websocket
// import Ws from '@adonisjs/websocket-client'
// import WsPlugin from 'adonis-vue-websocket'
// Vue.use(WsPlugin, { adonisWS: Ws })
import WsPlugin from 'adonis-vue-websocket'
Vue.use(WsPlugin, { adonisWS: window.adonis.Ws })

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')