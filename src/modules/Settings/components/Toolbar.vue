<template>
  <div class="toolbar">
    <div class="icons">
      <Theme />
      <Lang />

    
      
    </div>
  </div>
</template>

<script setup>
import Theme from './Theme.vue'
import Lang from './Lang.vue'


</script>

<style scoped>
.toolbar {
  padding: 0;
  background: transparent;
}

.icons {
  display: flex;
  gap: 10px;
  justify-content: flex-end; /* الأيقونات في اليمين */
  align-items: center;
}
</style>
