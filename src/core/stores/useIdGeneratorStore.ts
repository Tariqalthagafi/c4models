import { defineStore } from 'pinia'
import { useProjectsStore } from './useProjectsStore'

export const useIdGeneratorStore = defineStore('idGenerator', {
  actions: {
    generateId() {
      const projectsStore = useProjectsStore()

      // جميع الـ IDs الموجودة
      const usedIds = projectsStore.models.map(p => p.id)

      // الحروف من A إلى Z
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

      // البحث عن أصغر ID متاح
      for (const letter of letters) {
        for (let num = 0; num <= 999; num++) {
          const id = `${letter}${num.toString().padStart(3, '0')}`

          if (!usedIds.includes(id)) {
            return id
          }
        }
      }

      throw new Error('لا يوجد ID متاح (وصلت الحد الأقصى 26000)')
    }
  }
})
