<template>
  <div class="scope-view">
    <div class="scope-box">

      <!-- عنوان المستوى -->
      <h2 class="scope-title">
        {{ scope.label }}
      </h2>

      <!-- قسم العناصر -->
      <h3 class="section-title">العناصر</h3>
      <div class="nodes-row">
        <NodeBox
          v-for="child in nodes"
          :key="child.id"
          :node="child"
          @expand="expand"
        />
      </div>

      <!-- قسم العلاقات -->
      <h3 class="section-title">العلاقات</h3>
      <div class="relations-row">
        <RelationButton
          v-for="rel in relations"
          :key="rel.id"
          :rel="rel"
          @open="openRelation"
        />
      </div>

      <!-- زر الرجوع -->
      <button class="back-btn" @click="goBack">
        رجوع
      </button>

    </div>
  </div>
</template>

<script setup>
import NodeBox from './NodeBox.vue'
import RelationButton from './RelationButton.vue'

const props = defineProps({
  scope: { type: Object, required: true },
  nodes: { type: Array, required: true },
  relations: { type: Array, required: true },
  expand: { type: Function, required: true },
  openRelation: { type: Function, required: true },
  goBack: { type: Function, required: true }
})
</script>

<style scoped>
.scope-view {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
}

.scope-box {
  width: 700px;
  background: white;
  border: 3px solid #333;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
}

.scope-title {
  font-size: 22px;
  margin-bottom: 20px;
}

.section-title {
  margin: 15px 0 10px;
  font-size: 16px;
  font-weight: bold;
}

.nodes-row {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.relations-row {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
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
