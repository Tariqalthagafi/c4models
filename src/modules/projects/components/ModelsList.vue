<template>
  <div class="models-grid">
    <div class="model-card" v-for="m in models" :key="m.id">
      <div class="model-info">
        <h3 class="name">{{ m.name }}</h3>

        <!-- رقم المشروع -->
        <div class="meta">رقم المشروع: {{ m.id }}</div>

        <!-- آخر تعديل -->
        <div class="meta">
          آخر تعديل:
          {{ formatDate(m.meta.updatedAt || m.meta.createdAt) }}
        </div>

        <!-- الإحصائيات -->
        <div class="stats">
          <div class="stat-item">
            <strong>{{ currentVersion(m)?.nodes.length || 0 }}</strong>
            <span>العناصر</span>
          </div>

          <div class="stat-item">
            <strong>{{ currentVersion(m)?.relations.length || 0 }}</strong>
            <span>العلاقات</span>
          </div>

          <div class="stat-item">
            <strong>{{ m.versions.length }}</strong>
            <span>الإصدارات</span>
          </div>
        </div>
      </div>

      <!-- الأزرار -->
      <div class="actions">
        <button class="open-btn" @click="$emit('open', m.id)">تحرير</button>
        <button class="preview-btn" @click="$emit('preview', m.id)">عرض</button>
        <button class="download-btn" @click="$emit('download', m)">تحميل</button>
        <button class="delete-btn" @click="$emit('delete', m.id)">حذف</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectSchemaV3 } from '@/core/schema/projectSchemaV3'

const props = defineProps<{
  models: ProjectSchemaV3[]
}>()

function currentVersion(model: ProjectSchemaV3) {
  if (!model.currentVersionId) return null
  return model.versions.find((v) => v.id === model.currentVersionId) || null
}

function formatDate(date: string) {
  const d = new Date(date)
  return d.toLocaleDateString('ar-SA')
}
</script>

<style scoped>
.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.model-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  height: 200px;
}

.model-info {
  flex: 1;
}

.name {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 8px;
}

.meta {
  font-size: 12px;
  color: #777;
  margin-bottom: 12px;
}

.stats {
  display: flex;
  gap: 16px;
  margin-bottom: 10px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-item strong {
  font-size: 15px;
  color: #111;
}

.stat-item span {
  font-size: 11px;
  color: #666;
}

.actions {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

.open-btn,
.preview-btn,
.delete-btn,
.download-btn {
  background: #fff;
  color: #000;
  border: 1px solid #000;
  padding: 6px 12px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s;
}

.open-btn:hover,
.preview-btn:hover,
.delete-btn:hover,
.download-btn:hover {
  background: #000;
  color: #fff;
}
</style>
