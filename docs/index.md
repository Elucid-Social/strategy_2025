---
layout: home
hero:
  name: "Strategy 2025"
  text: "Strategic Planning Documentation"
  tagline: Comprehensive documentation for our 2025 strategic initiatives
  actions:
    - theme: brand
      text: Get Started
      link: /tech-department/
    - theme: alt
      text: View on GitHub
      link: https://github.com/yourusername/strategy-2025

features:
  - icon: 🏗️
    title: Tech Department
    details: Explore our technology department's structure, goals, and initiatives
    link: /tech-department/structure
  - icon: 👥
    title: C-Level Interfaces
    details: Access executive-level documentation and strategic interfaces
    link: /c-level/
  - icon: 📈
    title: Processes & Workflows
    details: Learn about our standardized processes and efficient workflows
    link: /tech-department/processes
---

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    icon: 'pi pi-file',
    label: 'Documentation',
    description: 'Comprehensive guides and documentation'
  },
  {
    icon: 'pi pi-users',
    label: 'Team Structure',
    description: 'Organization and responsibilities'
  },
  {
    icon: 'pi pi-chart-line',
    label: 'Strategic Goals',
    description: '2025 objectives and milestones'
  }
])
</script>

<div class="custom-block">
  <PDataTable :value="items" class="mt-4">
    <PColumn field="icon" header="">
      <template #body="slotProps">
        <i :class="slotProps.data.icon" style="font-size: 1.5rem"></i>
      </template>
    </PColumn>
    <PColumn field="label" header="Category"></PColumn>
    <PColumn field="description" header="Description"></PColumn>
  </PDataTable>
</div>
