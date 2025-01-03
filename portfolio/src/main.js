import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
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
const messages = {
    en: {
      common: {
        timeAgo: {
          "just-now": "just now",
          ago: "{0} ago",
          in: "in {0}",
          last_month: "last month",
          next_month: "next month",
          month: "{0} month",
          last_year: "last year", // Corrected key
          next_year: "next year",
          year: "{0} year",
          yesterday: "yesterday",
          tomorrow: "tomorrow",
          day: "{0} day",
          last_week: "last week",
          next_week: "next week",
          week: "{0} week",
          hour: "{0} hour",
          minute: "{0} minute",
          second: "{0} second",
        },
      },
    },
    sv: {
      common: {
        timeAgo: {
          "just-now": "just nu",
          ago: "{0} sedan",
          in: "om {0}",
          last_month: "förra månaden",
          next_month: "nästa månad",
          month: "{0} månad",
          "last-year": "Förra året", 
          next_year: "nästa år",
          year: "{0} år",
          yesterday: "igår",
          tomorrow: "imorgon",
          day: "{0} dag",
          last_week: "förra veckan",
          next_week: "nästa vecka",
          week: "{0} vecka",
          hour: "{0} timme",
          minute: "{0} minut",
          second: "{0} sekund",
        },
      },
    },
  };
const i18n = createI18n({
    locale: 'sv', 
    messages, 
  })
app.use(router)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
