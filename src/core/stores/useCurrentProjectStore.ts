import { defineStore } from 'pinia'

import type { ProjectSchemaV2, VersionSchema } from '@/core/schema/projectSchemaV2'
import { useJsonStore } from './useJsonStore'

export const useCurrentProjectStore = defineStore('currentProject', {
  state: () => ({
    project: null as ProjectSchemaV2 | null
  }),

  getters: {

    versions(state): VersionSchema[] {
      return state.project?.versions || []
    },

    currentVersion(state): VersionSchema | null {
      if (!state.project) return null
      const id = state.project.currentVersionId
      return state.project.versions.find(v => v.id === id) || null
    },

    diagram(): { nodes: any[]; relations: any[] } | null {
      const version = this.currentVersion
      if (!version) return null
      return {
        nodes: version.nodes,
        relations: version.relations
      }
    },

    settings(state) {
      return state.project?.settings || null
    },

    isLoaded(state) {
      return !!state.project
    }
  },

  actions: {

   addNode() {
  if (!this.project) return

  const version = this.currentVersion
  if (!version) return

  const node = {
    id: crypto.randomUUID(),
    name: "New Node",
    type: "generic",        // 👈 مهم جداً
    collapsed: false,       // 👈 مهم جداً
    children: [],
    parent: null,
    position: { x: 300, y: 200 }
  }

  version.nodes.push(node)
  this.saveProject()
}
,

    async loadProject(id: string) {
      const json = useJsonStore()
      const data = await json.readOne('projects', id)
      this.project = data || null
    },

    async saveProject() {
      if (!this.project) return

      const json = useJsonStore()
      this.project.meta.updatedAt = new Date().toISOString()

      const clean = json.cloneSafe(this.project)
      await json.write('projects', clean)
    },

    update(data: Partial<ProjectSchemaV2>) {
      if (!this.project) return
      Object.assign(this.project, data)
      this.saveProject()
    },

    updateSettings(settings: ProjectSchemaV2['settings']) {
      if (!this.project) return
      this.project.settings = settings
      this.saveProject()
    },

    updateVersions(versions: ProjectSchemaV2['versions']) {
      if (!this.project) return
      this.project.versions = versions
      this.saveProject()
    },

    switchVersion(id: string) {
      if (!this.project) return

      const exists = this.project.versions.find(v => v.id === id)
      if (!exists) return

      this.project.currentVersionId = id
      this.saveProject()
    },

    createVersion(title = 'إصدار جديد') {
      if (!this.project) return

      const version: VersionSchema = {
        id: crypto.randomUUID(),
        title,
        createdAt: new Date().toISOString(),
        nodes: [],
        relations: []
      }

      this.project.versions.push(version)
      this.project.currentVersionId = version.id

      this.saveProject()
    },

    deleteVersion(id: string) {
      if (!this.project) return

      this.project.versions = this.project.versions.filter(v => v.id !== id)

      if (this.project.currentVersionId === id) {
        this.project.currentVersionId = this.project.versions[0]?.id || null
      }

      this.saveProject()
    },

    renameVersion(id: string, title: string) {
      if (!this.project) return

      const v = this.project.versions.find(v => v.id === id)
      if (!v) return

      v.title = title
      this.saveProject()
    },

    closeProject() {
      this.project = null
    }
  }
})
