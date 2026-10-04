<template>
  <MainLayout>
    <div class="page">

      <h2 class="title">المستخدمين</h2>
      <p class="desc">إدارة أعضاء المؤسسة والصلاحيات.</p>

      <div class="groups">

        <!-- المجموعة الأولى -->
        <div class="group-card">
          <div class="group-header">
            <h3 class="group-title">مجموعة المدراء</h3>
            <button class="add-btn">➕ إضافة مستخدم</button>
          </div>

          <div class="users-list">
            <div class="user-card">
              <span class="user-name">طارق</span>
              <span class="role">مالك </span>
            </div>

            <div class="user-card">
              <span class="user-name">سعود</span>
              <span class="role">مدير </span>
            </div>
          </div>
        </div>

        <!-- المجموعة الثانية -->
        <div class="group-card">
          <div class="group-header">
            <h3 class="group-title">مجموعة الموظفين</h3>
            <button class="add-btn">➕ إضافة مستخدم</button>
          </div>

          <div class="users-list">
            <div class="user-card">
              <span class="user-name">عبدالله</span>
              <span class="role">مستخدم</span>
            </div>

            <div class="user-card">
              <span class="user-name">محمد</span>
              <span class="role">مستخدم</span>
            </div>
          </div>
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

/* الشبكة */
.groups {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

/* بطاقة المجموعة */
.group-card {
  background: #fff;
  border: 1px solid #eee;
  padding: 18px;
  border-radius: 12px;
  transition: 0.2s;
}

.group-card:hover {
  border-color: #2d6cdf;
}

/* رأس المجموعة */
.group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.group-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

/* زر إضافة مستخدم */
.add-btn {
  background: #2d6cdf;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
}

.add-btn:hover {
  background: #1f4fb3;
  transform: translateY(-2px);
}

/* قائمة المستخدمين */
.users-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* بطاقة المستخدم */
.user-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 10px;
}

.user-name {
  font-size: 16px;
  font-weight: 600;
}

.role {
  display: block;
  font-size: 13px;
  color: #666;
}
</style>
