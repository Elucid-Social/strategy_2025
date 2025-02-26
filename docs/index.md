---
layout: home
hero:
  name: "Strategy 2025"
  icon: 🏗️
  text: "Tech Department"
  tagline: Comprehensive documentation for our 2025 strategic initiatives


features:
  - icon: 🏗️
    title: Tech Department
    details: Explore our technology department's structure, goals, and initiatives
    link: /tech-department/structure
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
