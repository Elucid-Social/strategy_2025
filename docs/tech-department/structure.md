# Department Structure

<script setup>
import { ref } from 'vue'

const departments = ref([
  {
    name: 'Engineering',
    lead: 'John Doe',
    size: 25,
    focus: 'Core product development'
  },
  {
    name: 'DevOps',
    lead: 'Jane Smith',
    size: 10,
    focus: 'Infrastructure and automation'
  },
  {
    name: 'QA',
    lead: 'Mike Johnson',
    size: 8,
    focus: 'Quality assurance and testing'
  }
])
</script>

## Overview

Our technology department is structured to maximize efficiency and innovation while maintaining high quality standards.

<PCard class="my-4">
  <template #title>
    Key Metrics
  </template>
  <template #content>
    <PDataTable :value="departments" class="mt-3">
      <PColumn field="name" header="Department"></PColumn>
      <PColumn field="lead" header="Team Lead"></PColumn>
      <PColumn field="size" header="Team Size"></PColumn>
      <PColumn field="focus" header="Focus Area"></PColumn>
    </PDataTable>
  </template>
</PCard>

## Teams and Responsibilities

Each team in our department has specific responsibilities and goals:

<div class="grid">
  <div class="col-4">
    <PCard>
      <template #title>Engineering</template>
      <template #content>
        <p>Responsible for core product development and feature implementation.</p>
        <PButton label="Learn More" icon="pi pi-external-link" />
      </template>
    </PCard>
  </div>
  <div class="col-4">
    <PCard>
      <template #title>DevOps</template>
      <template #content>
        <p>Manages infrastructure, deployment, and development workflows.</p>
        <PButton label="Learn More" icon="pi pi-external-link" />
      </template>
    </PCard>
  </div>
  <div class="col-4">
    <PCard>
      <template #title>QA</template>
      <template #content>
        <p>Ensures product quality through comprehensive testing strategies.</p>
        <PButton label="Learn More" icon="pi pi-external-link" />
      </template>
    </PCard>
  </div>
</div>
