import { createRouter, createWebHistory } from 'vue-router'

// General
import Home from '../General/pages/Home.vue'

// MainApp Pages
import Main from '../modules/main/Main.vue'
import Projects from '../modules/projects/projects.vue'
import Workspace from '../modules/Editor/workspace.vue'
import Versions from '../modules/versions/versions.vue'
import Approvals from '../modules/approvals/Approvals.vue'
import UsersPage from '../modules/usermanagement/UsersPage.vue'
import Notifications from '../modules/Notifications/Notifications.vue'
import Settings from '../modules/Settings/Settings.vue'
const routes = [
  // الصفحة العامة قبل تسجيل الدخول
  { path: '/', component: Home },

  // MainApp (بعد تسجيل الدخول)
  { path: '/main', component: Main },
  { path: '/projects', component: Projects },
  { path: '/workspace', component: Workspace },

  // Enterprise (موديولات المؤسسة)
  { path: '/enterprise/versions', component: Versions },
  { path: '/enterprise/approvals', component: Approvals },
  { path: '/enterprise/users', component: UsersPage },

  // Notifications
  { path: '/notifications', component: Notifications },

  // Settings
  { path: '/settings', component: Settings },

  //viewer
  { path: '/viewer', component: () => import('../modules/viewer/Viewer.vue') },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
