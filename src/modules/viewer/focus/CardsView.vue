<template>
  <div class="cards-view">

    <!-- وضع التركيز على نود -->
    <Node
      v-if="currentNodeId"
      :id="currentNodeId"
      :nodes="version.nodes"
      :relations="version.relations"
      @open="openNode"
      @openRelation="openRelation"
      @exit="exitFocus"
    />

    <!-- وضع التركيز على علاقة -->
    <Relation
      v-else-if="currentRelationId"
      :id="currentRelationId"
      :relations="version.relations"
      :nodes="version.nodes"
      @openNode="openNode"
      @backToNode="openNode"
    />

    <!-- عرض المستوى الأول -->
    <div v-else class="nodes">
      <div
        v-for="node in rootNodes"
        :key="node.id"
        class="root-card"
        @click="openNode(node.id)"
      >

        <!-- عداد العلاقات -->
        <div v-if="rootRelations(node.id).length" class="relation-count">
          ⇄ {{ rootRelations(node.id).length }} 
        </div>

        <img v-if="node.icon" :src="node.icon" class="root-icon" />

        <div class="root-name">{{ node.name }}</div>
        <div class="root-type">{{ node.type }}</div>

        <!-- العلاقات الخاصة بالنود -->
        <div v-if="rootRelations(node.id).length" class="root-relations">
          <div
            v-for="rel in rootRelations(node.id)"
            :key="rel.id"
            class="relation-item"
          >
            ⇄ {{ rel.label || rel.type }}
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import Node from './node/Node.vue'
import Relation from './relation/Relation.vue'

const props = defineProps<{
  version: {
    nodes: any[]
    relations: any[]
  }
}>()

const currentNodeId = ref<string | null>(null)
const currentRelationId = ref<string | null>(null)

function openNode(id: string) {
  currentRelationId.value = null
  currentNodeId.value = id
}

function openRelation(id: string) {
  currentNodeId.value = null
  currentRelationId.value = id
}

function exitFocus() {
  currentNodeId.value = null
  currentRelationId.value = null
}

const rootNodes = computed(() => {
  return props.version.nodes.filter(n => n.parentId === null)
})

function rootRelations(id: string) {
  return props.version.relations.filter(
    r => r.from === id || r.to === id
  )
}
</script>

<style scoped>
.cards-view {
  padding: 20px;
}

.nodes {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  padding-top: 10px;
}

.root-card {
  width: 220px;
  padding: 18px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: 0.25s;
  text-align: center;
  position: relative;
}

.root-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.relation-count {
  position: absolute;
  top: -10px;
  right: -10px;

  background: #ffffff;      /* خلفية بيضاء */
  color: #000000;           /* نص أسود */

  padding: 6px 10px;
  border-radius: 20px;

  border: 1px solid #ccc;   /* حدود فضي */

  font-size: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.10);
}

.root-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}

.root-name {
  font-size: 18px;
  font-weight: bold;
}

.root-type {
  font-size: 14px;
  color: #666;
}

.root-relations {
  margin-top: 12px;
  font-size: 13px;
  color: #444;
}

.relation-item {
  background: #f5f5f5;
  padding: 6px 10px;
  border-radius: 8px;
  margin-bottom: 4px;
}
</style>
