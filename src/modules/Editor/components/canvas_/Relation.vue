<template>
  <button class="relation-btn" @click="openRelation">
    ⇄ {{ relation.label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  relation: {
    id: string
    from: string
    to: string
    type: string
    label: string
  }
}>()

const emit = defineEmits<{
  (e: 'open', rel: typeof props.relation): void
}>()

function openRelation() {
  emit('open', props.relation)
}
</script>

<style scoped>
.relation-btn {
  padding: 6px 12px;
  background: #f0f0f0;
  border: 1px solid #aaa;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin: 4px 0;
}
</style>
