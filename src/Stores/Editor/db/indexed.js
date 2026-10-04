import { openDB } from 'idb'

const DB_NAME = 'c4-projects-db'
const DB_VERSION = 1
const STORE_NAME = 'projects'

export async function getDB() {
  return await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' })
      }
    }
  })
}

export async function saveProject(id, data) {
  const db = await getDB()
  await db.put(STORE_NAME, data)
}

export async function loadProject(id) {
  const db = await getDB()
  return await db.get(STORE_NAME, id)
}

export async function deleteProject(id) {
  const db = await getDB()
  await db.delete(STORE_NAME, id)
}

export async function getAllProjects() {
  const db = await getDB()
  return await db.getAll(STORE_NAME)
}
