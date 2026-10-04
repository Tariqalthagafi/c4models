// -------------------------------------------------------------
// ProjectSchema V3 — نموذج النود المستقل (Flat + parentId)
// -------------------------------------------------------------

// ⭐ تعريف النود المستقل
export interface NodeSchemaV3 {
  id: string
  name: string
  type: string
  icon?: string

  // الأب الهرمي (واحد فقط)
  parentId: string | null

  // أبناء هذا النود (كـ IDs فقط)
  childrenIds: string[]

  // هل النود مطوي في الواجهة
  collapsed: boolean

  // موقع النود في الرسم
  position: { x: number; y: number }

  // تفاصيل إضافية
  details?: {
    description?: string
    [key: string]: any
  }
}

// ⭐ العلاقات بين النودات
export interface RelationSchemaV3 {
  id: string
  from: string
  to: string
  type: string
  label: string
}

// ⭐ الإصدار يحتوي على الرسم الخاص به
export interface VersionSchemaV3 {
  id: string
  title: string
  createdAt: string
  nodes: NodeSchemaV3[]
  relations: RelationSchemaV3[]
}

// ⭐ سجل التعديلات
export interface HistoryEntryV3 {
  id: string
  action: string
  payload: any
  timestamp: string
}

// ⭐ Snapshot
export interface SnapshotSchemaV3 {
  id: string
  title: string
  createdAt: string
  diagram: {
    nodes: NodeSchemaV3[]
    relations: RelationSchemaV3[]
  }
}

// ⭐ الصلاحيات
export interface PermissionSchemaV3 {
  userId: string
  role: 'owner' | 'editor' | 'viewer'
}

// ⭐ مشاركة حيّة
export interface LiveShareStateV3 {
  sessionId: string
  peers: { id: string; name: string }[]
  lastSync: string
}

// ⭐ المشروع الكامل
export interface ProjectSchemaV3 {
  id: string
  name: string
  description: string

  meta: {
    schemaVersion: number
    createdAt: string
    updatedAt: string
    lastOpenedAt: string
  }

  settings: {
    theme: string
    grid: boolean
    snap: boolean
    zoom: number
    pan: { x: number; y: number }
  }

  versions: VersionSchemaV3[]
  currentVersionId: string | null

  history: HistoryEntryV3[]
  snapshots: SnapshotSchemaV3[]
  permissions: PermissionSchemaV3[]
  live: LiveShareStateV3 | null
}

// -------------------------------------------------------------
// القيم الافتراضية
// -------------------------------------------------------------

export const defaultSettingsV3 = {
  theme: 'light',
  grid: true,
  snap: true,
  zoom: 1,
  pan: { x: 0, y: 0 }
}

// -------------------------------------------------------------
// ⭐ إنشاء مشروع جديد V3 — مع أول نود تلقائيًا
// -------------------------------------------------------------

export function createDefaultProjectV3(name: string): ProjectSchemaV3 {
  const now = new Date().toISOString()
  const versionId = crypto.randomUUID()

  const rootNode: NodeSchemaV3 = {
    id: 'root',
    name: 'System',
    type: 'root',
    icon: '/icons/system.svg',
    parentId: null,
    childrenIds: [],
    collapsed: false,
    position: { x: 300, y: 200 },
    details: {
      description: 'Root system node'
    }
  }

  const firstVersion: VersionSchemaV3 = {
    id: versionId,
    title: '1.0',
    createdAt: now,
    nodes: [rootNode],
    relations: []
  }

  return {
    id: crypto.randomUUID(),
    name,
    description: '',

    meta: {
      schemaVersion: 3,
      createdAt: now,
      updatedAt: now,
      lastOpenedAt: now
    },

    settings: defaultSettingsV3,

    versions: [firstVersion],
    currentVersionId: versionId,

    history: [],
    snapshots: [],
    permissions: [],
    live: null
  }
}
