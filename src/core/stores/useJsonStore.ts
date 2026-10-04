import { defineStore } from 'pinia'
import { dbAdd, dbPut, dbGetAll, dbDelete } from '@/core/db/indexedDB'

export const useJsonStore = defineStore('jsonStore', () => {

  /**
   * تحويل أي كائن Vue Proxy إلى JSON قابل للتخزين
   * يمنع DataCloneError نهائيًا
   */
  function cloneSafe<T>(data: T): T {
    return JSON.parse(JSON.stringify(data))
  }

  /**
   * قراءة جميع السجلات من IndexedDB
   */
  async function readAll(storeName: string) {
    const result = await dbGetAll(storeName)
    return cloneSafe(result)
  }

  /**
   * قراءة سجل واحد
   */
  async function readOne(storeName: string, id: string) {
    const all = await dbGetAll(storeName)
    const item = all.find(x => x.id === id)
    return item ? cloneSafe(item) : null
  }

  /**
   * كتابة سجل داخل IndexedDB
   */
  async function write(storeName: string, data: any) {
    const clean = cloneSafe(data)
    await dbPut(storeName, clean)
  }

  /**
   * إضافة سجل جديد
   */
  async function add(storeName: string, data: any) {
    const clean = cloneSafe(data)
    await dbAdd(storeName, clean)
  }

  /**
   * حذف سجل
   */
  async function remove(storeName: string, id: string) {
    await dbDelete(storeName, id)
  }

  /**
   * استيراد ملف JSON
   */
  async function importJsonFile(): Promise<any | null> {
    return new Promise(resolve => {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = '.json'

      input.onchange = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return resolve(null)

        const text = await file.text()
        try {
          const json = JSON.parse(text)
          resolve(json)
        } catch (err) {
          console.error('Invalid JSON file:', err)
          resolve(null)
        }
      }

      input.click()
    })
  }

  /**
   * تصدير JSON كملف
   */
  function exportJsonFile(data: any, filename = 'project.json') {
    const clean = cloneSafe(data)
    const blob = new Blob([JSON.stringify(clean, null, 2)], {
      type: 'application/json'
    })

    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }

  return {
    cloneSafe,
    readAll,
    readOne,
    write,
    add,
    remove,
    importJsonFile,
    exportJsonFile
  }
})
