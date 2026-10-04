<template>
  <NodeContainer :node="node">
    <!-- الشكل والمحتوى -->
    <NodeView :node="node" />

    <!-- شريط الأزرار -->
    <NodeControls v-if="isSelected" :node="node" />
  </NodeContainer>
</template>

<script setup>
import { computed } from 'vue'

import NodeContainer from './NodeContainer.vue'
import NodeView from './NodeView.vue'
import NodeControls from './NodeControls.vue'


const props = defineProps({
  node: Object,
})

const isSelected = computed(() => store.selectedNode === props.node)
</script>

<style scoped>
/* لا يوجد أي ستايل هنا لأن كل شيء أصبح داخل المكوّنات */
</style>
