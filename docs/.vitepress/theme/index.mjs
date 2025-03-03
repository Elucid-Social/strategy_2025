import { h } from 'vue'
import Theme from 'vitepress/theme'

// Import our custom components
import PCard from './components/PCard.vue'
import PDataTable from './components/PDataTable.vue'
import PColumn from './components/PColumn.vue'

// Import custom CSS
import './custom.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    // Register our custom components
    app.component('PCard', PCard)
    app.component('PDataTable', PDataTable)
    app.component('PColumn', PColumn)
  }
}
