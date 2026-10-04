import { defineStore } from 'pinia'
import type { Project } from '../../../Types/Editor/types/project'

const DB_NAME = 'c4-projects-db'
const STORE_NAME = 'projects'
const DB_VERSION = 1

export const useProjectDBStore = defineStore('projectDB', () => {
  let db: IDBDatabase | null = null

  // كاش للمشاريع لتسريع الوصول
  const cachedProjects: Record<string, Project> = {}

  /* ---------------- فتح قاعدة البيانات ---------------- */
  async function openDatabase(): Promise<IDBDatabase> {
    if (db) return db

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION)

      request.onupgradeneeded = (event) => {
        const database = (event.target as IDBOpenDBRequest).result

        if (!database.objectStoreNames.contains(STORE_NAME)) {
          database.createObjectStore(STORE_NAME, { keyPath: 'id' })
        }
      }

      request.onsuccess = () => {
        db = request.result
        resolve(db!)
      }

      request.onerror = () => reject(request.error)
    })
  }

  /* ---------------- جلب مشروع واحد ---------------- */
  async function getProject(id: string): Promise<Project | null> {
    const database = await openDatabase()

    return new Promise((resolve) => {
      const tx = database.transaction(STORE_NAME, 'readonly')
      const store = tx.objectStore(STORE_NAME)
      const request = store.get(id)

      request.onsuccess = () => {
        const project = request.result as Project | null
        if (project) cachedProjects[project.id] = project
        resolve(project)
      }

      request.onerror = () => resolve(null)
    })
  }

  /* ---------------- جلب كل المشاريع ---------------- */
  async function getAllProjects(): Promise<Project[]> {
    const database = await openDatabase()

    return new Promise((resolve) => {
      const tx = database.transaction(STORE_NAME, 'readonly')
      const store = tx.objectStore(STORE_NAME)
      const request = store.getAll()

      request.onsuccess = () => {
        const list = request.result as Project[]
        list.forEach((p) => (cachedProjects[p.id] = p))
        resolve(list)
      }

      request.onerror = () => resolve([])
    })
  }

  /* ---------------- إنشاء مشروع جديد ---------------- */
  async function createProject(): Promise<Project> {
    const database = await openDatabase()

    const newProject: Project = {
      id: 'project-' + crypto.randomUUID(),
      name: 'Untitled',
      updatedAt: Date.now(),
      data: {
        nodes: [],
        edges: [],
        scopes: [{ id: 'scope-1', name: 'Root', parent: null }],
        rootScope: 'scope-1',
        settings: {
          zoom: 1,
          pan: { x: 0, y: 0 },
        },
      },
    }

    return new Promise((resolve, reject) => {
      const tx = database.transaction(STORE_NAME, 'readwrite')
      const store = tx.objectStore(STORE_NAME)
      const request = store.add(newProject)

      tx.oncomplete = () => {
        cachedProjects[newProject.id] = newProject
        resolve(newProject)
      }

      tx.onerror = () => reject(tx.error)
    })
  }

  /* ---------------- حفظ مشروع ---------------- */
  async function saveProject(project: Project): Promise<void> {
    const database = await openDatabase()

    project.updatedAt = Date.now()

    return new Promise((resolve, reject) => {
      const tx = database.transaction(STORE_NAME, 'readwrite')
      const store = tx.objectStore(STORE_NAME)
      store.put(project)

      tx.oncomplete = () => {
        cachedProjects[project.id] = project
        resolve()
      }

      tx.onerror = () => reject(tx.error)
    })
  }

  /* ---------------- حذف مشروع ---------------- */
  async function deleteProject(id: string): Promise<void> {
    const database = await openDatabase()

    return new Promise((resolve, reject) => {
      const tx = database.transaction(STORE_NAME, 'readwrite')
      const store = tx.objectStore(STORE_NAME)
      store.delete(id)

      tx.oncomplete = () => {
        delete cachedProjects[id]
        resolve()
      }

      tx.onerror = () => reject(tx.error)
    })
  }

  /* ---------------- حذف كل المشاريع ---------------- */
  async function clearAllProjects(): Promise<void> {
    const database = await openDatabase()

    return new Promise((resolve, reject) => {
      const tx = database.transaction(STORE_NAME, 'readwrite')
      const store = tx.objectStore(STORE_NAME)
      store.clear()

      tx.oncomplete = () => {
        Object.keys(cachedProjects).forEach((id) => delete cachedProjects[id])
        resolve()
      }

      tx.onerror = () => reject(tx.error)
    })
  }

  return {
    cachedProjects,
    openDatabase,
    getProject,
    getAllProjects,
    createProject,
    saveProject,
    deleteProject,
    clearAllProjects,
  }
})
