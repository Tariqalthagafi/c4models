<template>
  <div class="layout">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh; /* ← إصلاح المشكلة */
  width: 100%;
}

.content {
  flex: 1;
  overflow-y: auto;
  background: #f5f6f7;
}
</style>
