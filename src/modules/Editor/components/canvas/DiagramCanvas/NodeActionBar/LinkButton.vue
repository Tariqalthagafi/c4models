<template>
  <button class="action-btn" @click.stop="startLinkMode">
    <img src="/nodecontrols/relation.svg" alt="relation" class="icon" />
  </button>
</template>

<script setup>


const props = defineProps({
  node: {
    type: Object,
    required: true
  }
})

function startLinkMode() {
  store.startLinkMode(props.node)
}
</script>

<style scoped>
.action-btn {
  border: none;
  background: #f0f0f0;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: #e0e0e0;
}

.icon {
  width: 18px;
  height: 18px;
  pointer-events: none;
}
</style>
