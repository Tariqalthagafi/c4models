import { defineStore } from 'pinia'

import { useProjectsStore } from './useProjectsStore'
import { useEditorProjectsStore } from './useEditorProjectsStore'
import { useCurrentProjectStore } from './useCurrentProjectStore'
import { useIdGeneratorStore } from './useIdGeneratorStore'
import { createDefaultProjectV3 } from '@/core/schema/projectSchemaV3'
import { useJsonStore } from './useJsonStore'

export const useProjectCreationStore = defineStore('projectCreation', {
  actions: {
    async createNewProject() {
      const projectsStore = useProjectsStore()
      const editor = useEditorProjectsStore()
      const current = useCurrentProjectStore()
      const idGen = useIdGeneratorStore()
      const json = useJsonStore()

      // توليد ID فريد مثل A000 أو B123 أو Z999
      const newProjectId = idGen.generateId()

      // اسم المشروع الجديد (لا نستخدم Project 1 أو Project 2 بعد الآن)
      const name = `Project ${newProjectId}`

      // إنشاء مشروع V2 كامل
      const project = createDefaultProjectV3(name)
      project.id = newProjectId

      // إضافة المشروع إلى IndexedDB
      await json.add('projects', project)

      // تحديث قائمة المشاريع
      await projectsStore.loadProjects()

      // فتح التاب
      if (!editor.openTabs.includes(project.id)) {
        editor.openTabs.push(project.id)
      }

      // تفعيل التاب
      editor.activeProjectId = project.id
      editor.saveState()

      // تحميل المشروع على الكانفاس
      await current.loadProject(project.id)
    },
  },
})
