<template>
  <!-- لا يوجد مشروع مفتوح -->
  <div v-if="!current.isLoaded" class="empty-canvas">
    لا يوجد مشروع مفتوح
  </div>

  <!-- يوجد مشروع مفتوح -->
  <div v-else class="canvas-wrapper">

    <!-- منطقة الرسم فقط -->
    <div class="canvas-area">
      <div class="canvas" ref="canvasRef">

        <!-- النودات -->
        <Node
          v-for="node in current.diagram?.nodes || []"
          :key="node.id"
          :node="node"
        />

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref, nextTick } from 'vue'
import * as d3 from 'd3'
import { useCurrentProjectStore } from '@/core/stores/useCurrentProjectStore'
import Node from './Node.vue'

const current = useCurrentProjectStore()

// ⭐ مهم جداً — هذا هو العنصر الذي ستعمل عليه D3
const canvasRef = ref<HTMLElement | null>(null)

// عند تحميل الصفحة
onMounted(() => {
  nextTick(() => enableDragging())
})

// ⭐ كل ما تتغير النودات (إضافة / حذف / تعديل)
// نعيد تفعيل السحب
watch(
  () => current.currentVersion?.nodes,
  () => nextTick(() => enableDragging()),
  { deep: true }
)

function enableDragging() {
  if (!canvasRef.value) return

  // ⭐ أخبر D3 أن العناصر HTML وليست SVG
  const nodes = d3
    .select<HTMLElement, unknown>(canvasRef.value)
    .selectAll<HTMLElement, unknown>('.node')

  nodes.call(
    d3
      .drag<HTMLElement, unknown>()
      .on('drag', (event: d3.D3DragEvent<HTMLElement, unknown, unknown>) => {
        const el = event.sourceEvent.target.closest('.node') as HTMLElement
        if (!el) return

        const id = el.getAttribute('data-id')
        const node = current.diagram?.nodes.find(n => n.id === id)
        if (!node) return

        // تحديث الموقع داخل الـ store
        node.position.x = event.x
        node.position.y = event.y

        // تحريك العنصر HTML
        el.style.left = node.position.x + 'px'
        el.style.top = node.position.y + 'px'
      })
      .on('end', () => {
        current.saveProject()
      })
  )
}
</script>

<style scoped>
.canvas-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fafafa;
}

/* منطقة الرسم */
.canvas-area {
  flex: 1;
  overflow: hidden;
}

/* الكانفاس */
.canvas {
  width: 100%;
  height: 100%;
  padding: 40px;
  position: relative;
  overflow: auto;
}

/* شاشة لا يوجد مشروع */
.empty-canvas {
  padding: 40px;
  text-align: center;
  color: #777;
  font-size: 18px;
}
</style>
