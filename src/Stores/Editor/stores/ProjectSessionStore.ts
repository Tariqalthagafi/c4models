import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Project } from '../../../Types/Editor/types/project'
import { useProjectStore } from './ProjectStore'
import { useProjectDBStore } from './ProjectDBStore'

export const useProjectSessionStore = defineStore('projectSession', () => {
  // التابات المفتوحة (IDs فقط)
  const openTabs = ref<string[]>([])

  // المشروع النشط
  const activeProject = ref<string | null>(null)

  // ستورات أخرى
  const projectStore = useProjectStore()
  const projectDB = useProjectDBStore()

  /* ---------------- مشاريع التابات المفتوحة ---------------- */
  const openTabsProjects = computed<Project[]>(() => {
    return openTabs.value
      .map((id) => projectDB.cachedProjects[id])
      .filter((p): p is Project => Boolean(p))
  })

  /* ---------------- فتح مشروع ---------------- */
  async function openProject(id: string) {
    // إذا التاب مفتوح مسبقًا → فقط فعّله
    if (!openTabs.value.includes(id)) {
      openTabs.value.push(id)
    }

    activeProject.value = id

    // تحميل المشروع من IndexedDB
    const project = await projectDB.getProject(id)
    if (project) {
      projectStore.loadProject(project)
    }
  }

  /* ---------------- إغلاق مشروع ---------------- */
  function closeProject(id: string) {
    openTabs.value = openTabs.value.filter((t) => t !== id)

    // إذا أغلقنا المشروع النشط → نظّف Canvas
    if (activeProject.value === id) {
      activeProject.value = null
      projectStore.clearProject()
    }
  }

  /* ---------------- إنشاء مشروع جديد ---------------- */
  async function newProject() {
    const project = await projectDB.createProject()

    // افتح المشروع الجديد
    await openProject(project.id)
  }

  /* ---------------- تحميل الجلسة من localStorage ---------------- */
  function loadSession() {
    const saved = localStorage.getItem('c4-session')
    if (!saved) return

    const session = JSON.parse(saved)

    openTabs.value = session.openTabs || []
    activeProject.value = session.activeProject || null
  }

  /* ---------------- حفظ الجلسة ---------------- */
  function saveSession() {
    localStorage.setItem(
      'c4-session',
      JSON.stringify({
        openTabs: openTabs.value,
        activeProject: activeProject.value,
      }),
    )
  }

async function createNewProject() {
  // أنشئ مشروع جديد في قاعدة البيانات
  const project = await projectDB.createProject()

  // أضفه إلى التابات المفتوحة
  openTabs.value.push(project.id)

  // اجعله المشروع النشط
  activeProject.value = project.id

  // حمّل بيانات المشروع داخل الستور
  projectStore.loadProject(project)
}


  return {
    openTabs,
    activeProject,
    openTabsProjects,
    openProject,
    closeProject,
    newProject,
    loadSession,
    saveSession,
    createNewProject,
  }
})
