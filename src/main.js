import { createApp } from 'vue'
import App from './App.vue'
import icons from './fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({...icons})

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
