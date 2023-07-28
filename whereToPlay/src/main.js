import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import {init as naiveInit} from './plugins/naive'
import {init as piniaInit} from './plugins/naive'
import setupAssets from "./plugins/setAsset";
import Particles from 'particles.vue3'


const app = createApp(App);
naiveInit(app);
piniaInit(app);
setupAssets();
app.use(router);
app.use(Particles);
app.mount('#app')







