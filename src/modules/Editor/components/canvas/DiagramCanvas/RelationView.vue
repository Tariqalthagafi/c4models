<template>
  <div class="relation-view">
    <div class="relation-box">

      <!-- عنوان العلاقة -->
      <h2 class="relation-title">
        {{ relation.label }}
      </h2>

      <!-- العناصر المرتبطة -->
      <div class="relation-nodes">
        <div class="rel-node">
          {{ getNode(relation.from)?.label }}
        </div>

        <div class="rel-arrow">→</div>

        <div class="rel-node">
          {{ getNode(relation.to)?.label }}
        </div>
      </div>

      <!-- وصف العلاقة -->
      <p class="relation-desc">
        {{ relation.description || "لا يوجد وصف لهذه العلاقة." }}
      </p>

      <!-- زر الرجوع -->
      <button class="back-btn" @click="$emit('close')">
        رجوع
      </button>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  relation: { type: Object, required: true },
  getNode: { type: Function, required: true }
})

const emit = defineEmits(['close'])
</script>

<style scoped>
.relation-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.relation-box {
  width: 600px;
  background: white;
  border: 3px solid #333;
  border-radius: 15px;
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
  height: 80px;
  background: #fafafa;
  border: 2px solid #666;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.rel-arrow {
  font-size: 40px;
  font-weight: bold;
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
