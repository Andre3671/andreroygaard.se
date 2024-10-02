import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import FontAwesome stuff
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add the icon to the library
library.add(faSun);
library.add(faGithub);
library.add(faLinkedin);

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
