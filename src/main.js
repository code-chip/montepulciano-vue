import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar os estilos CSS
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App)

app.use(BootstrapVue3); // Configurar BootstrapVue
app.use(router)

app.mount('#app')
