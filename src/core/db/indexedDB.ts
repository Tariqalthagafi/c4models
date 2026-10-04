import { openDB } from 'idb'
import type { IDBPDatabase } from 'idb'

let dbPromise: Promise<IDBPDatabase> | null = null

export function getDB() {
  if (!dbPromise) {
    dbPromise = openDB('c4-app-db', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('projects')) {
          db.createObjectStore('projects', { keyPath: 'id' })
        }

        if (!db.objectStoreNames.contains('diagrams')) {
          db.createObjectStore('diagrams', { keyPath: 'id' })
        }

        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'key' })
        }
      }
    })
  }

  return dbPromise
}

/* عمليات عامة */
export async function dbAdd(store: string, value: any) {
  const db = await getDB()
  return db.add(store, value)
}

export async function dbPut(store: string, value: any) {
  const db = await getDB()
  return db.put(store, value)
}

export async function dbGet(store: string, id: string) {
  const db = await getDB()
  return db.get(store, id)
}

export async function dbGetAll(store: string) {
  const db = await getDB()
  return db.getAll(store)
}

export async function dbDelete(store: string, id: string) {
  const db = await getDB()
  return db.delete(store, id)
}
