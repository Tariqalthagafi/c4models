<template>
  <MainLayout>
    <div class="page">
      <h2 class="title">الإشعارات</h2>
      <p class="desc">هنا تظهر جميع الإشعارات.</p>

      <div class="notifications">
        <!-- إشعار 1 -->
        <div class="notification-card">
          <h3 class="notif-title">تم إنشاء مشروع جديد</h3>
          <p class="notif-desc">تم إضافة مشروع "نظام إدارة الموارد" بنجاح.</p>
          <span class="notif-time">قبل دقيقة</span>
        </div>

        <!-- إشعار 2 -->
        <div class="notification-card">
          <h3 class="notif-title">تم قبول الموافقة</h3>
          <p class="notif-desc">تمت الموافقة على طلب الإصدار الجديد.</p>
          <span class="notif-time">قبل 10 دقائق</span>
        </div>

        <!-- إشعار 3 -->
        <div class="notification-card">
          <h3 class="notif-title">تم حفظ الرسم</h3>
          <p class="notif-desc">تم حفظ التعديلات الأخيرة على رسم "الخدمات".</p>
          <span class="notif-time">قبل ساعة</span>
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
  background: #fff;              /* خلفية بيضاء */
  min-height: 100vh;             /* تغطية الصفحة بالكامل */
  display: flex;
  flex-direction: column;
  align-items: center;           /* المحتوى في المنتصف */
  padding: 30px 20px;
  font-family: 'Tajawal', sans-serif;
}

.title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
}

.desc {
  color: #666;
  margin-bottom: 25px;
  text-align: center;
}

/* قائمة الإشعارات */
.notifications {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 650px; /* المحتوى في المنتصف */
}

/* بطاقة الإشعار */
.notification-card {
  background: #fff;
  border: 1px solid #eee;
  padding: 15px 18px;
  border-radius: 10px;
  transition: 0.2s;
}

.notification-card:hover {
  border-color: #2d6cdf;
}

.notif-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.notif-desc {
  margin: 5px 0 10px;
  color: #555;
}

.notif-time {
  font-size: 13px;
  color: #888;
}
</style>
