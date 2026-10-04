<template>
  <div class="scope-root">

    <!-- طبقة العناصر -->
    <div class="canvas-layer">
      <NodeBox
        v-for="node in nodes"
        :key="node.id"
        :node="node"
        @expand="expand"
      />
    </div>

  </div>
</template>

<script setup>
import NodeBox from './NodeBox.vue'

const props = defineProps({
  nodes: Array,
  expand: Function
})
</script>

<style scoped>
.scope-root {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.canvas-layer {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
