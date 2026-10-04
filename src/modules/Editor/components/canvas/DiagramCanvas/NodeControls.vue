<template>
  <div class="node-controls">
    <DeleteButton :node="node" />
    <ColorButton :node="node" />
    <LineColorButton :node="node" />
    <LinkButton :node="node" />
    <AddChildButton :node="node" />
    <ShapeButton :node="node" />
    <ResizeButton :node="node" />
    <texteditebutton :node="node" />
  </div>
</template>

<script setup>
import DeleteButton from './NodeActionBar/DeleteButton.vue'
import ColorButton from './NodeActionBar/ColorButton.vue'
import LineColorButton from './NodeActionBar/LineColorButton.vue'
import LinkButton from './NodeActionBar/LinkButton.vue'
import AddChildButton from './NodeActionBar/AddChildButton.vue'
import ShapeButton from './NodeActionBar/ShapeButton.vue'
import ResizeButton from './NodeActionBar/ResizeButton.vue'
import texteditebutton from './NodeActionBar/texteditebutton.vue'

const props = defineProps({
  node: Object
})
</script>

<style scoped>
.node-controls {
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0.98);
  padding: 6px 10px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.18);
  z-index: 999999;
  pointer-events: auto;
}
</style>
