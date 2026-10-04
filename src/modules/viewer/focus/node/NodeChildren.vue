<template>
  <div class="children-box">
       <!-- خط فاصل فضي -->
    <div class="children-divider"></div>

    <!-- عنوان القسم -->
    <h3 class="children-title">المكوّنات</h3>

    <div class="children-list">
      <div
        v-for="child in children"
        :key="child.id"
        class="child-card"
        @click="$emit('open', child.id)"
      >

        <!-- عداد العلاقات -->
        <div v-if="childRelations(child.id).length" class="relation-count">
          ⇄ {{ childRelations(child.id).length }}
        </div>

        <img v-if="child.icon" :src="child.icon" class="child-icon" />

        <div class="child-name">{{ child.name }}</div>
        <div class="child-type">{{ child.type }}</div>

        <!-- زر التفاصيل -->
        <DetailButton :nodeId="child.id" :nodes="props.nodes" />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DetailButton from './DetailButton.vue'

const props = defineProps<{
  childrenIds: string[]
  nodes: any[]
  relations?: any[]
}>()

// تحويل IDs إلى نودات فعلية
const children = computed(() => {
  return props.childrenIds
    .map(id => props.nodes.find(n => n.id === id))
    .filter(Boolean)
})

// دالة تجلب العلاقات الخاصة بكل طفل
function childRelations(id: string) {
  if (!props.relations) return []
  return props.relations.filter(r => r.from === id || r.to === id)
}
</script>

<style scoped>
.children-box {
  margin-top: 25px;
}

.children-divider {
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin-bottom: 20px;
}

/* عنوان القسم بنفس ستايل العلاقات */
.children-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
}

.children-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* البطاقة */
.child-card {
  width: 220px;
  padding: 18px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: 0.25s;
  text-align: center;
  position: relative; /* مهم لعداد العلاقات */
}

.child-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

/* عداد العلاقات */
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

/* الأيقونة */
.child-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
}

/* الاسم */
.child-name {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 6px;
}

/* النوع */
.child-type {
  font-size: 14px;
  color: #777;
  margin-bottom: 12px;
}
</style>
