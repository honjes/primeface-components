import { createApp } from 'vue'
import App from './App.vue'
import router from "./extensions/router"
import PrimeVue from 'primevue/config'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import RadioButton from 'primevue/radiobutton'
import SelectButton from 'primevue/selectbutton'
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import "primevue/resources/themes/lara-light-purple/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import "./assets/index.css"

const app = createApp(App)
  
app.use(router)
  .use(ToastService)
  .use(PrimeVue)
  .mount('#app')

app.component('Toast', Toast);
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)
app.component('Divider', Divider)
app.component('InputText', InputText)
app.component('Button', Button) 
app.component('Message', Message) 
app.component('RadioButton', RadioButton) 
app.component('SelectButton', SelectButton) 
