import { defineStore } from 'pinia'
import { useCurrentProjectStore } from './useCurrentProjectStore'

export const useVersionsStore = defineStore('versions', {
  state: () => ({
    versions: [] as any[],
    currentVersionId: null as string | null
  }),

  actions: {
    loadFromProject(project: any) {
      this.versions = project.versions
      this.currentVersionId = project.currentVersionId
    },

    getCurrentVersion() {
      return this.versions.find(v => v.id === this.currentVersionId)
    },

    createNewVersion() {
      const current = this.getCurrentVersion()
      if (!current) return

      // نسخة كاملة من الإصدار السابق
      const newVersion = JSON.parse(JSON.stringify(current))
      newVersion.id = crypto.randomUUID()
      newVersion.createdAt = new Date().toISOString()

      this.versions.push(newVersion)
      this.currentVersionId = newVersion.id

      // تحديث المشروع الحالي
      const projectStore = useCurrentProjectStore()
      projectStore.updateVersions(this.versions)
    },

    switchVersion(id: string) {
      this.currentVersionId = id

      const version = this.getCurrentVersion()
      const projectStore = useCurrentProjectStore()
      projectStore.updateVersions(this.versions)
    }
  }
})
