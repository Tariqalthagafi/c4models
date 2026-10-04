<template>
  <div class="details-box">

    <!-- رأس النود -->
<div class="node-header">
  <img v-if="node.icon" :src="node.icon" class="node-icon" />

  <div class="node-header-text">
    <h2 class="node-title">{{ node.name }}</h2>
    <p class="node-type">{{ node.type }}</p>
  </div>

  <p v-if="node.details?.description" class="details-desc">
    {{ node.details.description }}
  </p>
</div>



  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ node: any }>()
</script>

<style scoped>
.details-box {
  margin-bottom: 25px;
  padding: 20px;
  background: #fff;
  border: none;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* رأس النود */
.node-header {
  display: flex;
  align-items: flex-start;
  gap: 20px; /* ← يبعد الوصف عن الهيدر */
  flex-wrap: wrap; /* ← يسمح للوصف بالنزول إذا المساحة ضاقت */
}

.details-desc {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  word-break: break-word;

  max-width: 400px;
  flex-shrink: 0;

  margin-top: 4px;
  text-align: center;   /* ← في المنتصف */
  flex: 1;              /* ← يخليه يتمركز داخل صف الهيدر */
}

.node-icon {
  width: 50px;
  height: 50px;
}

.node-header-text {
  display: flex;
  flex-direction: column;
}

.node-title {
  font-size: 22px;
  font-weight: bold;
  margin: 0;
}

.node-type {
  font-size: 14px;
  color: #777;
  margin-top: 4px;
}

/* الشبكة */
.details-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}


.grid-item {
  background: #fafafa;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  color: #444;
  width: fit-content; /* ← أهم نقطة */
  max-width: 200px;   /* يمنع التمدد الزائد */
  text-align: center;
}

</style>
