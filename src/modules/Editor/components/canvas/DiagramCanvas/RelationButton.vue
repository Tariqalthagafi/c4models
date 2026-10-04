<template>
  <button class="relation-btn" @click="open">
    <span class="relation-label">{{ rel.label }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  rel: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open'])

function open() {
  emit('open', props.rel)
}
</script>

<style scoped>
.relation-btn {
  padding: 8px 14px;
  background: #eaeaea;
  border: 1px solid #777;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: 0.2s;
}

.relation-btn:hover {
  background: #dcdcdc;
}

.relation-label {
  display: inline-block;
}
</style>
