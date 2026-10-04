export interface Project {
  id: string
  name: string
  updatedAt: number
  data: ProjectData
}

export interface ProjectData {
  nodes: NodeData[]
  edges: EdgeData[]
  scopes: ScopeData[]
  rootScope: string
  settings: CanvasSettings
}

/* ---------------- Nodes ---------------- */

export interface NodeData {
  id: string
  type: string
  x: number
  y: number
  width: number
  height: number
  data: Record<string, any>   // بيانات إضافية حسب نوع العنصر
}

/* ---------------- Edges ---------------- */

export interface EdgeData {
  id: string
  from: string
  to: string
  points: Point[]
}

export interface Point {
  x: number
  y: number
}

/* ---------------- Scopes ---------------- */

export interface ScopeData {
  id: string
  name: string
  parent: string | null
}

/* ---------------- Canvas Settings ---------------- */

export interface CanvasSettings {
  zoom: number
  pan: {
    x: number
    y: number
  }
}
