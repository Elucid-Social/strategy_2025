# Strategic Objectives 2025

<script setup>
import { ref } from 'vue'

const objectives = ref([
  {
    name: 'LocalFirst PoS App',
    description: 'Make our PWA app fast and resilient in any connectivity scenario',
    status: 'In Progress'
  },
  {
    name: 'UI/UX Fidelity',
    description: 'Increase the fidelity (to the UI mockup) of our Data Portal',
    status: 'In Progress'
  },
  {
    name: 'AI Integration',
    description: 'Introduce AI pipelines and collect low hanging fruits',
    status: 'In Progress'
  }
])
</script>

## Overview

Our strategic objectives for 2025 focus on three main areas: improving our PoS application's resilience, enhancing UI/UX quality, and leveraging AI capabilities.

<PCard class="my-4">
  <template #title>
    Strategic Objectives
  </template>
  <template #content>
    <PDataTable :value="objectives" class="mt-3">
      <PColumn field="name" header="Objective"></PColumn>
      <PColumn field="description" header="Description"></PColumn>
      <PColumn field="status" header="Status"></PColumn>
    </PDataTable>
  </template>
</PCard>

## Detailed Objectives

### LocalFirst PoS App
Our Point of Sale application needs to be resilient and performant in all network conditions. We're focusing on making our PWA app fast and reliable regardless of connectivity status.

### Improve UI/UX Fidelity
We're working to increase the fidelity of our Data Portal to match UI mockups precisely. This involves careful attention to design details and implementation accuracy.

### AI Integration
We're introducing AI pipelines and identifying quick wins where artificial intelligence can enhance our product capabilities and efficiency.
