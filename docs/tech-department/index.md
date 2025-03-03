# Tech Department

<script setup>
import { ref } from 'vue'

const sections = ref([
  {
    name: 'Department Structuress',
    description: 'Organization, roles, and responsibilities',
    link: '/tech-department/structure',
    status: 'Active'
  },
  {
    name: 'Strategic Objectives',
    description: 'Our key objectives and focus areas for 2025',
    link: '/tech-department/objectives',
    status: 'Active'
  },
  {
    name: 'Interfaces',
    description: 'Interdepartmental communication and collaboration',
    link: '/tech-department/interfaces',
    status: 'Active'
  }
])
</script>

## Overview

Welcome to the Tech Department documentation. This section provides comprehensive information about our technology organization, including its structure, interfaces with other departments, and key processes.

<PCard class="my-4">
  <template #title>
    Documentation Sections
  </template>
  <template #content>
    <PDataTable :value="sections" class="mt-3">
      <PColumn field="name" header="Section"></PColumn>
      <PColumn field="description" header="Description"></PColumn>
      <PColumn field="status" header="Status"></PColumn>
      <PColumn header="Action">
        <template #body="slotProps">
          <PButton :link="slotProps.data.link" label="View" class="p-button-sm" />
        </template>
      </PColumn>
    </PDataTable>
  </template>
</PCard>

## Quick Links

<div class="grid">
  <div class="col-4">
    <PCard>
      <template #title>Structure</template>
      <template #content>
        <p>Learn about our department organization, teams, and leadership.</p>
        <PButton link="/tech-department/structure" label="View Structure" />
      </template>
    </PCard>
  </div>
  <div class="col-4">
    <PCard>
      <template #title>Interfaces</template>
      <template #content>
        <p>Discover how we collaborate with other departments.</p>
        <PButton link="/tech-department/interfaces" label="View Interfaces" />
      </template>
    </PCard>
  </div>
</div>

## Key Resources

- [Department Structure Guide](/tech-department/structure)
- [Interdepartmental Interfaces](/tech-department/interfaces)

