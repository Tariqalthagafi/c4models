import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Project } from '../../../Types/Editor/types/project'

export const useProjectStore = defineStore('project', () => {
  /* ---------------------------------------
   * 1) المشروع الحالي داخل Workspace
   * --------------------------------------- */
  const currentProject = ref<Project | null>(null)

  /* ---------------------------------------
   * 2) تحميل مشروع
   * --------------------------------------- */
  function loadProject(project: Project) {
    currentProject.value = project
    isDirty.value = false
  }

  /* ---------------------------------------
   * 3) تنظيف المشروع
   * --------------------------------------- */
  function clearProject() {
    currentProject.value = null
    isDirty.value = false
  }

  /* ---------------------------------------
   * 4) تعديل اسم المشروع
   * --------------------------------------- */
  function renameProject(name: string) {
    if (!currentProject.value) return
    currentProject.value.name = name
    markDirty()
  }

  /* ---------------------------------------
   * 5) تحديث بيانات المشروع (Partial Update)
   * --------------------------------------- */
  function updateProject(data: Partial<Project>) {
    if (!currentProject.value) return
    Object.assign(currentProject.value, data)
    markDirty()
  }

  /* ---------------------------------------
   * 6) حالة المشروع (Dirty / Clean)
   * --------------------------------------- */
  const isDirty = ref(false)

  function markDirty() {
    isDirty.value = true
  }

  function markClean() {
    isDirty.value = false
  }

  /* ---------------------------------------
   * 7) JSON Export
   * --------------------------------------- */
  function exportJSON() {
    if (!currentProject.value) return null
    return JSON.stringify(currentProject.value, null, 2)
  }

  /* ---------------------------------------
   * 8) JSON Import
   * --------------------------------------- */
  function importJSON(json: string) {
    try {
      const data = JSON.parse(json)
      loadProject(data)
    } catch (err) {
      console.error('Invalid JSON', err)
    }
  }

  /* ---------------------------------------
   * 9) نشر المشروع (Live Share / Publish)
   * --------------------------------------- */
  const isPublishing = ref(false)

  async function publish() {
    if (!currentProject.value) return

    isPublishing.value = true

    // هنا تربط API المشاركة اللايف
    await new Promise((resolve) => setTimeout(resolve, 800))

    isPublishing.value = false
    markClean()
  }

  /* ---------------------------------------
   * 10) تصدير المشروع (Export)
   * --------------------------------------- */
  const isExporting = ref(false)

  async function exportProject() {
    if (!currentProject.value) return

    isExporting.value = true

    await new Promise((resolve) => setTimeout(resolve, 500))

    isExporting.value = false
  }

  /* ---------------------------------------
   * 11) Auto Save
   * --------------------------------------- */
  const autoSaveEnabled = ref(true)

  function toggleAutoSave() {
    autoSaveEnabled.value = !autoSaveEnabled.value
  }

  /* ---------------------------------------
   * 12) قفل الكانفاس أثناء العمليات
   * --------------------------------------- */
  const isLocked = computed(() => {
    return isPublishing.value || isExporting.value
  })

  return {
    currentProject,
    loadProject,
    clearProject,

    renameProject,
    updateProject,

    isDirty,
    markDirty,
    markClean,

    exportJSON,
    importJSON,

    isPublishing,
    publish,

    isExporting,
    exportProject,

    autoSaveEnabled,
    toggleAutoSave,

    isLocked,
  }
})
