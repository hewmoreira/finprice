import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'
import icons from './fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add({...icons})

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon, faFontAwesome)
    .mount('#app')
