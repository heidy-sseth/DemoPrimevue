import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Avatar from 'primevue/avatar';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true });
app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('Avatar', Avatar);

app.mount('#app')
