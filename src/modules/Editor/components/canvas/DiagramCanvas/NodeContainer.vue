<template>
  <div
    class="node-container"
    :style="{ left: node.x + 'px', top: node.y + 'px' }"
    @mousedown="onMouseDown"
    @click.stop="onSelect"
  >
    <!-- هنا يجي NodeView و NodeControls -->
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  node: Object
})

/* -------------------------------
   التحديد
-------------------------------- */
function onSelect() {
  store.selectNode(props.node)
}

/* -------------------------------
   التحريك الحر (Drag)
-------------------------------- */
const isDragging = ref(false)
const startMouse = ref({ x: 0, y: 0 })
const startPos = ref({ x: 0, y: 0 })

function onMouseDown(evt) {
  // تجاهل الضغط على الأزرار
  if (evt.target.closest('.action-btn')) return

  isDragging.value = true

  startMouse.value = {
    x: evt.clientX,
    y: evt.clientY
  }

  startPos.value = {
    x: props.node.x,
    y: props.node.y
  }

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
}

function onMouseMove(evt) {
  if (!isDragging.value) return

  const dx = evt.clientX - startMouse.value.x
  const dy = evt.clientY - startMouse.value.y

  let newX = startPos.value.x + dx
  let newY = startPos.value.y + dy

  /* -------------------------------
     منع الخروج من حدود DiagramCanvas
  -------------------------------- */
  const canvas = document.querySelector('.diagram-canvas')
  if (canvas) {
    const rect = canvas.getBoundingClientRect()

    const boxWidth = props.node.width || 220
    const boxHeight = props.node.height || 120

    newX = Math.max(0, Math.min(newX, rect.width - boxWidth))
    newY = Math.max(0, Math.min(newY, rect.height - boxHeight))
  }

  props.node.x = newX
  props.node.y = newY
}

function onMouseUp() {
  isDragging.value = false
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
}
</script>

<style scoped>
.node-container {
  position: absolute;
  cursor: grab;
  z-index: 10;
}

.node-container:active {
  cursor: grabbing;
}
</style>
