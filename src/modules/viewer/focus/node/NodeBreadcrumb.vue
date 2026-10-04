<template>
  <div class="breadcrumb" v-if="path.length">

    <!-- زر الخروج كأول عنصر في المسار -->
    <button class="breadcrumb-item exit-btn" @click="$emit('exit')">
  ← رجوع
</button>


    <!-- المسار -->
    <div class="breadcrumb-list">
      <div
        v-for="(item, index) in path"
        :key="item.id"
        class="breadcrumb-item"
        @click="$emit('navigate', item.id)"
      >
        <span class="breadcrumb-name">{{ item.name }}</span>
        <span v-if="index < path.length - 1" class="breadcrumb-arrow">›</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ node: any; nodes: any[] }>()
const emit = defineEmits(['navigate', 'exit'])

const path = computed(() => {
  const list: any[] = []
  let current = props.node

  while (current) {
    list.unshift(current)
    current = props.nodes.find(n => n.id === current.parentId) || null
  }

  return list
})
</script>

<style scoped>
.breadcrumb {
  margin-bottom: 20px;
  padding: 10px 15px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #ddd;

  display: flex;
  align-items: center;
  gap: 8px;
}

/* قائمة المسار */
.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

/* عنصر المسار */
/* عنصر المسار */
.breadcrumb-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: 0.2s;

  border: 1px solid transparent; /* حد ثابت يمنع القفزة */
}

/* الهوفر */
.breadcrumb-item:hover {
  background: #fff;
  border-color: #000; /* فقط تغيير اللون */
}

/* زر الرجوع يرث كل شيء من breadcrumb-item */
.exit-btn {
  background: transparent;
  /* لا نضع border هنا حتى لا نلغي حدود breadcrumb-item */
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px; /* نفس البادينغ */
}

.breadcrumb-name {
  font-size: 15px;
  font-weight: 600;
}

.breadcrumb-arrow {
  margin: 0 6px;
  font-size: 18px;
  font-weight: bold;
  color: #666;
}


</style>
