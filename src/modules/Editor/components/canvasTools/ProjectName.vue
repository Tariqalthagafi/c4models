<template>
  <div class="project-name-wrapper">

    <!-- وضع التعديل -->
    <template v-if="editing">
      <input v-model="newName" class="edit-input" />
      <button class="save-icon" @click="save">✔️</button>
    </template>

    <!-- الوضع الطبيعي -->
    <template v-else>
      <button class="project-name" @click="startEdit">
        {{ activeProject?.name }}
      </button>
      <button class="edit-icon" @click="startEdit">✏️</button>
    </template>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProjectsStore } from '@/core/stores/useProjectsStore'
import { useEditorProjectsStore } from '@/core/stores/useEditorProjectsStore'
import { useProjectRenameStore } from '@/core/stores/useProjectRenameStore'

const projectsStore = useProjectsStore()
const editorStore = useEditorProjectsStore()
const renameStore = useProjectRenameStore()

const editing = ref(false)
const newName = ref('')

// المشروع المفعل فعليًا
const activeProject = computed(() => {
  return projectsStore.models.find(
    p => p.id === editorStore.activeProjectId
  )
})

function startEdit() {
  editing.value = true
  newName.value = activeProject.value?.name || ''
}

async function save() {
  editing.value = false
  if (!activeProject.value) return

  const error = await renameStore.renameProject(newName.value)

  if (error) {
    console.warn(error)
  }
}
</script>

<style scoped>
.project-name-wrapper {
  display: flex;
  align-items: center;
  gap: 6px;
}

.project-name {
  background: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 6px 10px;
}

.edit-icon,
.save-icon {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 4px;
}

.edit-input {
  font-size: 18px;
  font-weight: bold;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
