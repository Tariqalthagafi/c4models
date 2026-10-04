<template>
  <button v-if="hasChildren" class="child-btn">
    تفاصيل →
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  nodeId: string
  nodes: any[]
}>()

// الشرط الصحيح 100٪
const hasChildren = props.nodes.some(n =>
  n.parentId === props.nodeId ||
  (n.childrenIds && n.childrenIds.includes(props.nodeId))
)

</script>


<style scoped>
.child-btn {
  background: #fff;
  border: 1px solid #ccc;
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;
}
.child-btn:hover {
  background: #000;
  color: #fff;
  border-color: #000;
}
</style>
