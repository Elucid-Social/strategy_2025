# Department Structure

<script setup>
import { ref } from 'vue'

const departments = ref([

  {
    name: 'Moritz Fröhlich',
    role: 'Backend Developer / Fullstack',
    focus: 'HPPP and Data Portal'
  },
  {
    name: 'Heinrich Hanekom',
    role: 'Backend Developer / Fullstack',

    focus: 'HPPP and Data Portal'
  },
  {
    name: 'Enric Bisbe',
    role: 'Frontend Developer',

    focus: 'Pos Application'
  },
  {
    name: 'Alejandro Jimenez',
    role: 'CTO',
    focus: 'Strategy and Architecture'
  }
])
</script>

## Overview

Our technology department is structured to maximize efficiency and innovation while maintaining high quality standards.

<PCard class="my-4">
  <template #title>
    Team members
  </template>
  <template #content>
    <PDataTable :value="departments" class="mt-3">
      <PColumn field="role" header="Role"></PColumn>
      <PColumn field="name" header="Name"></PColumn>
      <PColumn field="focus" header="Focus Area"></PColumn>
    </PDataTable>
  </template>
</PCard>

