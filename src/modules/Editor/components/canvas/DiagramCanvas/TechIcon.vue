<template>
  <img
    :src="fallback"
    class="tech-icon"
    alt="default-tech"
  />
</template>

<script setup>
const fallback = '/techicons/default.svg'
</script>

<style scoped>
.tech-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
}
</style>
