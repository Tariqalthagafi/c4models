import { defineStore } from 'pinia'

import { useProjectsStore } from './useProjectsStore'
import { useEditorProjectsStore } from './useEditorProjectsStore'
import { useCurrentProjectStore } from './useCurrentProjectStore'
import { useJsonStore } from './useJsonStore'

export const useProjectRenameStore = defineStore('projectRename', () => {

  const projectsStore = useProjectsStore()
  const editorStore = useEditorProjectsStore()
  const currentStore = useCurrentProjectStore()
  const json = useJsonStore()

  // -------------------------------------------------------------
  // التحقق من الاسم قبل الحفظ
  // -------------------------------------------------------------
  function validateName(newName: string): string | null {
    if (!newName || newName.trim() === '') {
      return 'لا يمكن أن يكون الاسم فارغًا'
    }

    const exists = projectsStore.models.some(
      p => p.name === newName && p.id !== editorStore.activeProjectId
    )

    if (exists) {
      return 'يوجد مشروع آخر بنفس الاسم'
    }

    return null
  }

  // -------------------------------------------------------------
  // تنفيذ عملية إعادة التسمية
  // -------------------------------------------------------------
  async function renameProject(newName: string) {

    const activeId = editorStore.activeProjectId
    if (!activeId) return 'لا يوجد مشروع مفعل'

    const project = projectsStore.models.find(p => p.id === activeId)
    if (!project) return 'المشروع غير موجود'

    // التحقق من الاسم
    const error = validateName(newName)
    if (error) {
      console.warn('Rename error:', error)
      return error
    }

    const oldName = project.name
    project.name = newName

    // تحديث وقت آخر تعديل
    project.meta.updatedAt = new Date().toISOString()

    // تنظيف المشروع قبل التخزين
    const clean = json.cloneSafe(project)

    // تحديث داخل IndexedDB
    await json.write('projects', clean)

    // تحديث قائمة المشاريع
    await projectsStore.loadProjects()

    // تحديث المشروع الحالي داخل الكانفاس
    await currentStore.loadProject(project.id)

    console.log(`Project renamed: ${oldName} → ${newName}`)
    return null
  }

  return {
    renameProject,
    validateName
  }
})
