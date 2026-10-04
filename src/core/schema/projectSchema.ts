export interface NodeSchema {
  id: string
  name: string
  type: string
  collapsed: boolean
  children: string[]
  position: { x: number; y: number }
}

export interface RelationSchema {
  id: string
  from: string
  to: string
  type: string
  label: string
}

export interface VersionSchema {
  id: string
  title: string
  createdAt: string
}

export interface ProjectSchema {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string

  settings: {
    theme: string
    grid: boolean
    snap: boolean
    zoom: number
    pan: { x: number; y: number }
  }

  diagram: {
    root: string
    nodes: NodeSchema[]
    relations: RelationSchema[]
  }

  versions: VersionSchema[]

  /** الإصدار الحالي */
  currentVersionId: string | null
}

/* قيم افتراضية */
export const defaultSettings = {
  theme: 'light',
  grid: true,
  snap: true,
  zoom: 1,
  pan: { x: 0, y: 0 }
}

export const defaultDiagram = {
  root: 'node-1',
  nodes: [
    {
      id: 'node-1',
      name: 'System',
      type: 'container',
      collapsed: false,
      children: [],
      position: { x: 100, y: 100 }
    }
  ],
  relations: []
}

export function createDefaultProject(name: string): ProjectSchema {
  const now = new Date().toISOString()

  return {
    id: crypto.randomUUID(),
    name,
    description: '',
    createdAt: now,
    updatedAt: now,

    settings: defaultSettings,
    diagram: defaultDiagram,

    versions: [],

    /** الإصدار الحالي يبدأ بدون قيمة */
    currentVersionId: null
  }
}
