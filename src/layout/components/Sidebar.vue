<template>
  <div class="sidebar" :class="{ collapsed }">

    <!-- القسم العلوي -->
    <div class="top-section">

      <!-- زر الفتح والإغلاق -->
      <div class="toggle-btn" @click="collapsed = !collapsed">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <!-- القائمة -->
      <nav class="menu">
        <router-link to="/main" class="item" :class="{ active: isActive('/main') }">
          <img src="../icons/main.svg" class="icon" />
          <span v-if="!collapsed">الرئيسية</span>
        </router-link>

        <router-link to="/projects" class="item" :class="{ active: isActive('/projects') }">
          <img src="../icons/projects.svg" class="icon" />
          <span v-if="!collapsed">المشاريع</span>
        </router-link>

        <router-link to="/workspace" class="item" :class="{ active: isActive('/workspace') }">
          <img src="../icons/editor.svg" class="icon" />
          <span v-if="!collapsed">محرّر C4</span>
        </router-link>
<!-- 
        <router-link to="/enterprise/versions" class="item" :class="{ active: isActive('/enterprise/versions') }">
          <img src="../icons/versions.svg" class="icon" />
          <span v-if="!collapsed">الإصدارات</span>
        </router-link>

        <router-link to="/enterprise/approvals" class="item" :class="{ active: isActive('/enterprise/approvals') }">
          <img src="../icons/approvals.svg" class="icon" />
          <span v-if="!collapsed">الموافقات</span>
        </router-link>

        <router-link to="/enterprise/users" class="item" :class="{ active: isActive('/enterprise/users') }">
          <img src="../icons/users.svg" class="icon" />
          <span v-if="!collapsed">المستخدمين</span>
        </router-link> 
        -->

        <router-link to="/notifications" class="item" :class="{ active: isActive('/notifications') }">
          <img src="../icons/notifications.svg" class="icon" />
          <span v-if="!collapsed">الإشعارات</span>
        </router-link>

        <router-link to="/settings" class="item" :class="{ active: isActive('/settings') }">
          <img src="../icons/settings.svg" class="icon" />
          <span v-if="!collapsed">الإعدادات</span>
        </router-link>

        <router-link to="/" class="item logout">
          <img src="../icons/logout.svg" class="icon" />
          <span v-if="!collapsed">خروج</span>
        </router-link>
      </nav>

    </div>

    <!-- القسم السفلي -->
    <div class="bottom-tools">

      <!-- زر اللغة -->
      <div class="lang-icon" @click="toggleLang">
        {{ langLabel }}
      </div>

      <!-- زر الثيم -->
      <div class="theme-icon" @click="toggleTheme">
        {{ themeLabel }}
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const collapsed = ref(true)
const route = useRoute()

function isActive(path) {
  return route.path.startsWith(path)
}

/* اللغة */
const lang = ref('ar')
const langLabel = computed(() => lang.value === 'ar' ? 'ع' : 'En')
function toggleLang() {
  lang.value = lang.value === 'ar' ? 'en' : 'ar'
  console.log("Language changed:", lang.value)
}

/* الثيم */
const theme = ref('light')
const themeLabel = computed(() => theme.value === 'light' ? '☀️' : '🌙')
function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  console.log("Theme changed:", theme.value)
}
</script>

<style scoped>
.sidebar {
  font-family: 'Tajawal', sans-serif;
  width: 160px;
  background: #fff;
  border-right: 1px solid #eee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: 0.25s;
  padding: 10px 12px;
}

.sidebar {
  height: 100vh;
  padding: 10px 12px;
  box-sizing: border-box; /* الحل */
}


.sidebar.collapsed {
  width: 60px;
  padding: 10px 6px;
}

/* القسم العلوي */
.top-section {
  display: flex;
  flex-direction: column;
}

/* زر الهامبرغر */
.toggle-btn {
  cursor: pointer;
  width: 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
  user-select: none;
}

.line {
  height: 2px;
  background: #333;
  border-radius: 1px;
}

/* القائمة */
.menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* عنصر القائمة */
.item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  color: #333;
  text-decoration: none;
  font-size: 15px;
  border-radius: 8px;
  transition: 0.2s;
}

.icon {
  width: 22px;
  height: 22px;
}

.active {
  background: #e8f0ff;
  color: #2d6cdf;
  font-weight: 600;
}

.item:hover {
  background: #f2f5ff;
  color: #2d6cdf;
}

.logout {
  color: #e53935;
}

.logout:hover {
  color: #b71c1c;
}

/* القسم السفلي */
.bottom-tools {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* زر اللغة والثيم */
.lang-icon,
.theme-icon {
  width: 40px;
  height: 40px;
  background: #f3f3f3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: 0.2s;
  border: 1px solid #ddd;
  user-select: none;
}

.lang-icon:hover,
.theme-icon:hover {
  background: #e6e6e6;
  transform: scale(1.08);
}
</style>
