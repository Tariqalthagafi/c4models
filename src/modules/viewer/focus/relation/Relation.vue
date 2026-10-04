<template>
  <div class="relation-container" v-if="relation">

    <h2 class="relation-title"> ⇄ {{ relation.label }} </h2>
    <p class="relation-type">
      نوع العلاقة: <strong>{{ relation.type }}</strong>
    </p>
    <p class="relation-description" v-if="relation.description">
        وصف العلاقة: <span>{{ relation.description }}</span>
    </p>

    <!-- صف العلاقة -->
    <div class="relation-row">

      <!-- النود الأول -->
      <div class="node-card" @click="$emit('openNode', fromNode.id)">
        <img v-if="fromNode.icon" :src="fromNode.icon" class="node-icon" />
        <div class="node-name">{{ fromNode.name }}</div>
        <div class="node-type">{{ fromNode.type }}</div>
      </div>

      <!-- السهم الكبير -->
      <div class="relation-arrow">
        ➜
      </div>

      <!-- النود الثاني -->
      <div class="node-card" @click="$emit('openNode', toNode.id)">
        <img v-if="toNode.icon" :src="toNode.icon" class="node-icon" />
        <div class="node-name">{{ toNode.name }}</div>
        <div class="node-type">{{ toNode.type }}</div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: string
  relations: any[]
  nodes: any[]
}>()

// العلاقة الحالية
const relation = computed(() => {
  return props.relations.find(r => r.id === props.id) || null
})

// النودات المرتبطة
const fromNode = computed(() => {
  return props.nodes.find(n => n.id === relation.value?.from) || {}
})

const toNode = computed(() => {
  return props.nodes.find(n => n.id === relation.value?.to) || {}
})
</script>

<style scoped>
.relation-container {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding: 25px;
  background: #fff;
  border-radius: 14px;
  border: 2px solid #000;
}

.relation-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.relation-type {
  font-size: 16px;
  margin-bottom: 25px;
  text-align: center;
}

.relation-description {
  font-size: 15px;
  margin-bottom: 25px;
  text-align: center;
  color: #444;
}


/* صف العلاقة */
.relation-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

/* السهم الكبير */
.relation-arrow {
  font-size: 40px;
  font-weight: bold;
  color: #000;
}

/* بطاقة النود */
.node-card {
  padding: 18px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: 0.25s;
  width: 220px;
  text-align: center;
}

.node-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.node-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}

.node-name {
  font-size: 18px;
  font-weight: bold;
}

.node-type {
  font-size: 14px;
  color: #666;
}
</style>
