<template>
  <NodeShape :node="node">
    
    <!-- أيقونة التقنية أعلى يسار -->
    <TechIcon 
      v-if="node.tech"
      class="tech-icon"
      :type="node.tech"
    />

    <!-- المحتوى في المنتصف -->
    <div class="node-content">
      <span class="node-label">{{ node.label }}</span>
    </div>

  </NodeShape>
</template>

<script setup>
import NodeShape from './NodeShape.vue'
import TechIcon from './TechIcon.vue'

const props = defineProps({
  node: Object
})
</script>

<style scoped>
/* أيقونة التقنية أعلى يسار */
.tech-icon {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 28px;
  height: 28px;
  z-index: 5;
}

/* المحتوى في المنتصف */
.node-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.node-label {
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}
</style>
