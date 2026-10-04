<template>
  <div class="setting-card">
    <h3 class="setting-title">إعدادات الحساب</h3>

    <div class="setting-item">
      <label>الاسم</label>
      <input type="text" placeholder="طارق" />
    </div>

    <div class="setting-item">
      <label>البريد الإلكتروني</label>
      <input type="email" placeholder="example@mail.com" />
    </div>

    <div class="setting-item">
      <label>تغيير كلمة المرور</label>
      <button class="btn">تغيير</button>
    </div>
  </div>
</template>

<style scoped>
.setting-card {
  background: #fff;
  border: 1px solid #eee;
  padding: 18px;
  border-radius: 12px;
}
.setting-title {
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
}
.setting-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.setting-item input {
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.btn {
  background: #2d6cdf;
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
}
</style>
