<template>
  <div class="canvas-wrapper">

    <!-- أدوات المشروع -->
    <div class="top-row">
      <ProjectTools />
    </div>

    <!-- مساحة الرسم -->
    <div class="canvas" @dragover.prevent @drop="handleDrop">
      <DiagramCanvas
        :activeRelation="session.activeRelation"
        :activeScopeId="session.activeScopeId"
        :rootScope="session.rootScope"
        :currentScope="session.currentScope"
        :nodesInScope="session.nodesInScope"
        :relationsInScope="session.relationsInScope"
        :getNode="session.getNode"
        :expand="session.expand"
        :openRelation="session.openRelation"
        :closeRelation="session.closeRelation"
        :goBack="session.goBack"
        :clearSelection="session.clearSelection"
        :addNode="session.addNode"
      />
    </div>

  </div>
</template>

<script setup>
import ProjectTools from './canvasTools/ProjectTools.vue'
import DiagramCanvas from './DiagramCanvas.vue'
import { useCanvasStore } from '@/Stores/Editor/canvas/stores/CanvasStore'

const session = useCanvasStore()

function handleDrop(e) {
  const type = e.dataTransfer.getData('shape-type')
  if (!type) return

  session.addNode({
    id: crypto.randomUUID(),
    type,
    x: e.offsetX,
    y: e.offsetY,
  })
}
</script>


<style scoped>
.canvas-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.top-row {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background: #fafafa;
}

.canvas {
  position: relative;
  flex: 1;
  background: #fff;
  overflow: hidden;
  contain: none;
}
</style>
