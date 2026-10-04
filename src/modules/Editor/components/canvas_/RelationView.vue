<template>
  <div class="relation-view">
    <div class="relation-box">

      <!-- عنوان -->
      <h2 class="relation-title">
        العلاقة: {{ relation.label || 'بدون اسم' }}
      </h2>

      <!-- الطرفين -->
      <div class="relation-nodes">
        <div class="rel-node">
          {{ fromNode?.name || 'غير موجود' }}
        </div>

        <div class="rel-arrow">⇄</div>

        <div class="rel-node">
          {{ toNode?.name || 'غير موجود' }}
        </div>
      </div>

      <!-- النوع -->
      <p class="relation-type">
        النوع: <strong>{{ relation.type }}</strong>
      </p>

      <!-- الوصف -->
      <p class="relation-desc">
        {{ relation.label || 'لا يوجد وصف لهذه العلاقة.' }}
      </p>

      <!-- زر الرجوع -->
      <button class="back-btn" @click="$emit('close')">
        رجوع
      </button>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCurrentProjectStore } from '@/core/stores/useCurrentProjectStore'

const props = defineProps<{
  relation: {
    id: string
    from: string
    to: string
    type: string
    label: string
  }
}>()

const current = useCurrentProjectStore()

// حماية TypeScript من null
const fromNode = computed(() => {
  const nodes = current.diagram?.nodes || []
  return nodes.find(n => n.id === props.relation.from)
})

const toNode = computed(() => {
  const nodes = current.diagram?.nodes || []
  return nodes.find(n => n.id === props.relation.to)
})
</script>

<style scoped>
.relation-view {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.relation-box {
  width: 500px;
  background: white;
  border: 3px solid #333;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
}

.relation-title {
  font-size: 22px;
  margin-bottom: 20px;
}

.relation-nodes {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 30px 0;
}

.rel-node {
  width: 150px;
  padding: 15px;
  background: #fafafa;
  border: 2px solid #666;
  border-radius: 10px;
  font-weight: bold;
}

.rel-arrow {
  font-size: 40px;
  font-weight: bold;
}

.relation-type {
  margin-bottom: 10px;
  font-size: 15px;
}

.relation-desc {
  margin-bottom: 20px;
  font-size: 14px;
  color: #444;
}

.back-btn {
  padding: 10px 20px;
  border: none;
  background: #333;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}
</style>
