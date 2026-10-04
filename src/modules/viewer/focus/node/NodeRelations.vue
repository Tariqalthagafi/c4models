<template>
  <div class="relations-box">
    <div class="relations-divider"></div>
    <h3 class="relations-title">العلاقات</h3>

    <div class="relations-list">
      <div
        v-for="rel in relations"
        :key="rel.id"
        class="relation-card"
      >
        <div class="relation-label">
          ⇄ {{ rel.label }}
        </div>

        <div class="relation-type">
          النوع: {{ rel.type }}
        </div>

        <button class="relation-btn" @click="$emit('openRelation', rel.id)">
          عرض العلاقة →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ relations: any[] }>()
</script>

<style scoped>
.relations-box {
  margin-top: 25px;
}

.relations-divider {
  width: 100%;
  height: 1px;
  background: #e5e5e5; /* خط فضي */
  margin-bottom: 20px; /* مسافة قبل العنوان */
}

.relations-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
}

/* نفس ستايل بطاقات الأبناء */
.relations-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.relation-card {
  width: 220px;
  padding: 18px;
  background: #fff;
  border: 1px solid #e5e5e5; /* حدود فضية ناعمة */
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06); /* ظل خفيف */
  transition: 0.25s;
  text-align: center;
}

/* هوفر لطيف بدون قلب الألوان */
.relation-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.relation-label {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
}

.relation-type {
  font-size: 14px;
  color: #777;
  margin-bottom: 12px;
}

.relation-btn {
  background: #fff;
  border: 1px solid #ccc;
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;
}

.relation-btn:hover {
  background: #000;
  color: #fff;
  border-color: #000;
}
</style>
