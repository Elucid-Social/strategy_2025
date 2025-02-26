import { h } from 'vue'
import Theme from 'vitepress/theme'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './custom.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(PrimeVue, { ripple: true })
    app.component('PButton', Button)
    app.component('PCard', Card)
    app.component('PDataTable', DataTable)
    app.component('PColumn', Column)
  }
}
