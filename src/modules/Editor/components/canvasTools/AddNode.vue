<template>
  <button class="add-node-btn" @click="handleAddNode">
    + Node
  </button>
</template>

<script setup lang="ts">
import { useCurrentProjectStore } from '@/core/stores/useCurrentProjectStore'

const current = useCurrentProjectStore()

function handleAddNode() {
  current.addNode()
}
</script>

<style scoped>
.add-node-btn {
  padding: 6px 14px;
  background: #4a8ef0;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}

.add-node-btn:hover {
  background: #3a7be0;
}
</style>
