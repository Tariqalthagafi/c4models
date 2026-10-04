<template>
  <MainLayout>
    <div class="page">

      <h2 class="title">الموافقات</h2>
      <p class="desc">نظام الموافقات الخاص بالمؤسسة.</p>

      <div class="approvals-list">

        <!-- طلب مقبول -->
        <div class="approval-card approved">
          <div class="info">
            <h3 class="name">طلب شراء معدات</h3>
            <p class="details">تمت الموافقة على هذا الطلب من الإدارة.</p>
          </div>

          <div class="actions">
            <button class="approve-btn">✔ موافقة</button>
            <button class="reject-btn">✖ رفض</button>
          </div>

          <span class="status">مقبول</span>
        </div>

        <!-- طلب مرفوض -->
        <div class="approval-card rejected">
          <div class="info">
            <h3 class="name">طلب إجازة سنوية</h3>
            <p class="details">تم رفض هذا الطلب من قبل المدير المباشر.</p>
          </div>

          <div class="actions">
            <button class="approve-btn">✔ موافقة</button>
            <button class="reject-btn">✖ رفض</button>
          </div>

          <span class="status">مرفوض</span>
        </div>

      </div>

    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../../layout/MainLayout.vue'
</script>

<style scoped>
.page {
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.desc {
  color: #666;
  margin-bottom: 25px;
}

/* قائمة الطلبات */
.approvals-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* بطاقة الطلب */
.approval-card {
  background: #fff;
  border: 1px solid #eee;
  padding: 18px;
  border-radius: 12px;
  position: relative;
  transition: 0.2s;
}

.approval-card:hover {
  border-color: #2d6cdf;
}

/* حالة الطلب */
.status {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 14px;
  font-weight: 700;
}

/* حالات */
.approved .status {
  color: #2ecc71;
}

.rejected .status {
  color: #e74c3c;
}

/* معلومات الطلب */
.name {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.details {
  margin: 5px 0 15px;
  color: #555;
}

/* الأزرار */
.actions {
  display: flex;
  gap: 10px;
}

.approve-btn,
.reject-btn {
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
}

.approve-btn {
  background: #2ecc71;
  color: #fff;
}

.reject-btn {
  background: #e74c3c;
  color: #fff;
}

.approve-btn:hover {
  background: #27ae60;
}

.reject-btn:hover {
  background: #c0392b;
}
</style>
