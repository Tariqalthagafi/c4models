<template>
  <div class="setting-card">
    <h3 class="setting-title">إعدادات النظام</h3>

    <div class="setting-item">
      <label>الوضع الليلي</label>
      <input type="checkbox" />
    </div>

    <div class="setting-item">
      <label>حجم الخط</label>
      <select>
        <option>صغير</option>
        <option selected>متوسط</option>
        <option>كبير</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
@import '../shared.css';
</style>
