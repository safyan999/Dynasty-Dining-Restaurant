import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';

// Import Bootstrap and BootstrapVue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Create the Vue app instance and use BootstrapVue
const app = createApp(App);
app.use(router);


// Mount the app
app.mount('#app');
