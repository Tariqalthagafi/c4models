<template>
  <MainLayout>

    <div class="page">

      <!-- عنوان الموديول -->
      <h2 class="title">إدارة الإصدارات</h2>

      <!-- وصف الموديول -->
      <p class="desc">
        هنا يمكنك إدارة الإصدارات الخاصة بالمشاريع، إنشاء إصدار جديد، تتبع التغييرات،
        ومراجعة حالة كل إصدار داخل المؤسسة.
      </p>

      <!-- قائمة الإصدارات -->
      <div class="versions-list">

        <div class="version-card" v-for="v in versions" :key="v.id">
          <h3>{{ v.name }}</h3>
          <p class="info">الحالة: <strong>{{ v.status }}</strong></p>
          <p class="info">تاريخ الإصدار: {{ v.date }}</p>

          <button class="details-btn">عرض التفاصيل</button>
        </div>

      </div>

    </div>

  </MainLayout>
</template>

<script setup>
import MainLayout from '../../layout/MainLayout.vue'
import { ref } from 'vue'

const versions = ref([
  { id: 1, name: "الإصدار 1.0", status: "مستقر", date: "2026-08-12" },
  { id: 2, name: "الإصدار 1.1", status: "تحت الاختبار", date: "2026-09-01" },
  { id: 3, name: "الإصدار 2.0", status: "قيد التطوير", date: "قريباً" }
])
</script>

<style scoped>
.page {
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

.desc {
  font-size: 16px;
  color: #555;
  margin-bottom: 25px;
}

.versions-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.version-card {
  background: #fff;
  border: 1px solid #eee;
  padding: 18px;
  border-radius: 10px;
  transition: 0.2s;
}

.version-card:hover {
  border-color: #2d6cdf;
}

.info {
  font-size: 14px;
  color: #444;
  margin: 5px 0;
}

.details-btn {
  margin-top: 10px;
  background: #2d6cdf;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.details-btn:hover {
  background: #1f4fb3;
}
</style>
