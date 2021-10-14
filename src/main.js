import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from "./store/index";

const app = createApp(App);
app.mount('#app');
app.use(store);
