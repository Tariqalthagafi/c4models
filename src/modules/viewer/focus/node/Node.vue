<template>
  <div class="node-container" v-if="node">

    <!-- المسار العلوي -->
    <NodeBreadcrumb
      :node="node"
      :nodes="nodes"
      @navigate="openNode"
      @exit="$emit('exit')"
    />

    <!-- تفاصيل النود -->
    <NodeDetails :node="node" />

    <!-- الأبناء -->
    <NodeChildren
      v-if="node.childrenIds?.length"
      :childrenIds="node.childrenIds"
      :nodes="nodes"
      :relations="props.relations"   
      @open="openNode"
    />

    <!-- العلاقات -->
    <NodeRelations
      v-if="relations.length"
      :relations="relations"
      @openRelation="openRelation"
    />

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// المكونات الفرعية
import NodeBreadcrumb from './NodeBreadcrumb.vue'
import NodeChildren from './NodeChildren.vue'
import NodeRelations from './NodeRelations.vue'
import NodeDetails from './NodeDetails.vue'

const props = defineProps<{
  id: string
  nodes: any[]
  relations: any[]
}>()

// جلب النود الحالي
const node = computed(() => {
  return props.nodes.find(n => n.id === props.id) || null
})

// جلب العلاقات الخاصة بالنود
const relations = computed(() => {
  if (!node.value) return []
  return props.relations.filter(
    r => r.from === node.value.id || r.to === node.value.id
  )
})

// فتح نود آخر
function openNode(id: string) {
  emit('open', id)
}

// فتح علاقة
function openRelation(id: string) {
  emit('openRelation', id)
}

const emit = defineEmits(['open', 'openRelation', 'exit'])
</script>

<style scoped>
.node-container {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding: 25px;
  background: #fff;
  border-radius: 14px;
  border: 2px solid #000;
}

.node-header {
  text-align: center;
  margin-bottom: 20px;
}

.node-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
}

.node-title {
  font-size: 24px;
  font-weight: bold;
}

.node-type {
  font-size: 14px;
  color: #666;
}

.exit-btn {
  margin-top: 25px;
  background: #fff;
  border: 1px solid #e0e0e0;       /* حدود فضية ناعمة */
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06); /* ظل خفيف */
}

/* حركة لطيفة عند المرور */
.exit-btn:hover {
  background: #000;
  color: #fff;
  border-color: #000;
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}

</style>
