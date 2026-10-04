<template>
  <MainLayout>
    <div class="page">

      <h2 class="title">الإعدادات</h2>
      <p class="desc">إدارة إعدادات الحساب والنظام.</p>

      <div class="settings">

        <!-- إعدادات الحساب -->
        <AccountSettings />

        <!-- إعدادات النظام -->
        <SystemSettings />

        <!-- إعدادات الإشعارات -->
        <NotificationSettings />

      </div>

    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../../layout/MainLayout.vue'
import AccountSettings from './components/AccountSettings.vue'
import SystemSettings from './components/SystemSettings.vue'
import NotificationSettings from './components/NotificationSettings.vue'
</script>

<style scoped>
.page {
  background: #fff;            /* خلفية بيضاء */
  min-height: 100vh;           /* يغطي الصفحة */
  display: flex;
  flex-direction: column;
  align-items: center;         /* المحتوى في المنتصف */
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

/* شبكة الإعدادات */
.settings {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;

  width: 100%;
  max-width: 900px; /* المحتوى في المنتصف */
}
</style>
