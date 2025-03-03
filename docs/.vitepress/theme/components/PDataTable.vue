<template>
  <div class="p-datatable p-component">
    <div class="p-datatable-wrapper">
      <table class="p-datatable-table">
        <thead class="p-datatable-thead">
          <tr>
            <slot></slot>
          </tr>
        </thead>
        <tbody class="p-datatable-tbody">
          <tr v-for="(item, i) in value" :key="i" class="p-datatable-row">
            <slot name="body" :data="item" :index="i">
              <td v-for="col in getColumns()" :key="col.field" class="p-datatable-cell">
                {{ item[col.field] }}
              </td>
            </slot>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PDataTable',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getColumns() {
      // Get all PColumn components that are direct children
      const columns = this.$slots.default && this.$slots.default()
        .filter(vnode => vnode.type && vnode.type.name === 'PColumn')
        .map(vnode => ({
          field: vnode.props.field,
          header: vnode.props.header
        }));
      
      return columns || [];
    }
  }
}
</script>

<style>
.p-datatable {
  position: relative;
}

.p-datatable-table {
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
}

.p-datatable-thead > tr > th {
  text-align: left;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  font-weight: 700;
  color: #343a40;
  background: #f8f9fa;
  transition: box-shadow 0.2s;
}

.p-datatable-tbody > tr {
  background: #ffffff;
  color: #495057;
  transition: box-shadow 0.2s;
}

.p-datatable-tbody > tr > td {
  text-align: left;
  border-bottom: 1px solid #dee2e6;
  padding: 1rem;
}

.mt-3 {
  margin-top: 1rem;
}
</style>
