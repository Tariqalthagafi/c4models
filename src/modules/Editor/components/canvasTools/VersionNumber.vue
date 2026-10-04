<template>
  <div class="version-box" @click="toggle">
    v{{ currentVersion }}
  </div>

  <div v-if="showList" class="versions-list">
    <div
      v-for="v in versions"
      :key="v.id"
      class="version-item"
      @click="select(v)"
    >
      {{ v.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCurrentProjectStore } from '@/core/stores/useCurrentProjectStore'

const projectStore = useCurrentProjectStore()

const showList = ref(false)

const currentVersion = computed(() =>
  projectStore.currentVersion?.title || '1.0'
)

const versions = computed(() => projectStore.versions)

function toggle() {
  showList.value = !showList.value
}

function select(v: any) {
  projectStore.switchVersion(v.id)
  showList.value = false
}
</script>

<style scoped>
.version-box {
  width: 40px;
  height: 40px;
  background: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  user-select: none;
  transition: 0.2s;
  cursor: default;
}

.version-box:hover {
  opacity: 0.7;
  transform: scale(1.05);
}
</style>
