<template>
  <th class="p-column-header" :class="getColumnHeaderClass()">
    {{ header }}
  </th>
</template>

<script>
export default {
  name: 'PColumn',
  props: {
    field: {
      type: String,
      default: null
    },
    header: {
      type: String,
      default: null
    },
    sortable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getColumnHeaderClass() {
      return {
        'p-sortable-column': this.sortable
      };
    }
  }
}
</script>

<style>
.p-column-header {
  font-weight: 700;
}

.p-sortable-column {
  cursor: pointer;
}

.p-sortable-column:hover {
  background: #e9ecef;
}
</style>
