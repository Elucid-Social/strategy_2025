<template>
  <div class="p-card p-component">
    <div v-if="$slots.title" class="p-card-header">
      <div class="p-card-title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="p-card-body">
      <div v-if="$slots.content" class="p-card-content">
        <slot name="content"></slot>
      </div>
      <div v-if="$slots.footer" class="p-card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCard'
}
</script>

<style>
.p-card {
  background: #ffffff;
  color: #495057;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12);
  border-radius: 4px;
  margin-bottom: 2rem;
}

.p-card-header {
  padding: 1.25rem;
  border-bottom: 1px solid #dee2e6;
}

.p-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.p-card-body {
  padding: 1.25rem;
}

.p-card-content {
  padding: 0;
}

.p-card-footer {
  padding: 1.25rem 0 0 0;
  margin-top: 0;
  border-top: 1px solid #dee2e6;
}

.my-4 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>
