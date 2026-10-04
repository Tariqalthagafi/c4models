import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useJsonStore } from '@/core/stores/useJsonStore'
import {
  type ProjectSchemaV2,
  createDefaultProjectV2
} from '@/core/schema/projectSchemaV2'

export const useProjectsStore = defineStore('projects', () => {

  const json = useJsonStore()
  const models = ref<ProjectSchemaV2[]>([])

  // -------------------------------------------------------------
  // تحميل جميع المشاريع من IndexedDB
  // -------------------------------------------------------------
  async function loadProjects() {
    models.value = await json.readAll('projects')
  }

  // -------------------------------------------------------------
  // إنشاء مشروع جديد
  // -------------------------------------------------------------
  async function createModel(name: string) {
    const project = createDefaultProjectV2(name)
    await json.add('projects', project)
    await loadProjects()
    return project.id
  }

  // -------------------------------------------------------------
  // فتح مشروع (اختياري)
  // -------------------------------------------------------------
  function openModel(id: string) {
    console.log('فتح المشروع:', id)
  }

  // -------------------------------------------------------------
  // حذف مشروع
  // -------------------------------------------------------------
  async function deleteModel(id: string) {
    await json.remove('projects', id)
    await loadProjects()
  }

  // -------------------------------------------------------------
  // تحديث مشروع
  // -------------------------------------------------------------
  async function updateModel(project: ProjectSchemaV2) {
    project.meta.updatedAt = new Date().toISOString()

    const clean = json.cloneSafe(project)
    await json.write('projects', clean)

    await loadProjects()
  }

  // -------------------------------------------------------------
  // استيراد ملف JSON (V2 فقط)
  // -------------------------------------------------------------
  async function importFile() {
    const jsonFile = await json.importJsonFile()
    if (!jsonFile) return

    if (!jsonFile.meta || jsonFile.meta.schemaVersion !== 2) {
      console.warn('❌ الملف ليس بصيغة ProjectSchemaV2')
      return
    }

    await json.add('projects', jsonFile)
    await loadProjects()
  }

  function addExternalProject(project: any) {
  // التحقق من أن المشروع بصيغة V2
  if (!project.meta || project.meta.schemaVersion !== 2) {
    console.warn("⚠️ الملف ليس بصيغة V2")
    return false
  }

  // إذا لم يكن لديه currentVersionId نضبطه
  if (!project.currentVersionId && project.versions.length > 0) {
    project.currentVersionId = project.versions[0].id
  }

  // إضافة المشروع للقائمة
  models.value.push(project)

  // حفظ في localStorage
  localStorage.setItem("c4-projects", JSON.stringify(models.value))

  return true
}


  // -------------------------------------------------------------
  // تحميل المشاريع عند تشغيل التطبيق
  // -------------------------------------------------------------
  loadProjects()

  return {
    models,
    loadProjects,
    createModel,
    openModel,
    deleteModel,
    updateModel,
    importFile,
    addExternalProject
  }
})
