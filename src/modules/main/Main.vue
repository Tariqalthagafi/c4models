<template>
  <MainLayout>
    <div class="main-page">
      <Welcome />
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../../layout/MainLayout.vue'
import Welcome from '../../modules/main/components/Welcome.vue'
</script>

<style scoped>
.main-page {
  background: #fff; /* الخلفية البيضاء */
  min-height: 100%; /* ضمان تغطية الصفحة */
}

</style>
