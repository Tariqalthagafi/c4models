import { defineStore } from 'pinia'
import { useProjectsStore } from './useProjectsStore'
import { useCurrentProjectStore } from './useCurrentProjectStore'
import type { ProjectSchemaV2 } from '@/core/schema/projectSchemaV2'

export const useEditorProjectsStore = defineStore('editorProjects', {
  state: () => ({
    openTabs: JSON.parse(localStorage.getItem('openTabs') || '[]') as string[],
    activeProjectId: (() => {
      const id = localStorage.getItem('activeProjectId')
      return id && id.trim() !== '' ? id : null
    })()
  }),

  getters: {
    activeProject(): ProjectSchemaV2 | null {
      const projectsStore = useProjectsStore()
      return projectsStore.models.find(p => p.id === this.activeProjectId) || null
    },

    openTabsProjects(): ProjectSchemaV2[] {
      const projectsStore = useProjectsStore()
      return this.openTabs
        .map(id => projectsStore.models.find(p => p.id === id))
        .filter((p): p is ProjectSchemaV2 => !!p)
    }
  },

  actions: {

    // تحميل المشاريع قبل أي عملية
    async init() {
      const projectsStore = useProjectsStore()
      await projectsStore.loadProjects()
    },

    saveState() {
      localStorage.setItem('openTabs', JSON.stringify(this.openTabs))

      if (this.activeProjectId)
        localStorage.setItem('activeProjectId', this.activeProjectId)
      else
        localStorage.removeItem('activeProjectId')
    },

    // فتح مشروع في التابات
    async openProject(id: string) {
      const projectsStore = useProjectsStore()
      projectsStore.openModel(id)

      if (!this.openTabs.includes(id)) {
        this.openTabs.push(id)
      }

      this.saveState()
    },

    // تفعيل مشروع
    async activateProject(id: string) {
      const current = useCurrentProjectStore()

      this.activeProjectId = id
      this.saveState()

      await current.loadProject(id)
    },

    // إغلاق مشروع
    closeProject(id: string) {
      const current = useCurrentProjectStore()

      this.openTabs = this.openTabs.filter(tid => tid !== id)

      // إذا كان التاب المغلق هو التاب النشط
      if (this.activeProjectId === id) {
        this.activeProjectId = this.openTabs[0] || null

        if (this.activeProjectId)
          current.loadProject(this.activeProjectId)
        else
          current.closeProject()
      }

      this.saveState()
    }
  }
})
