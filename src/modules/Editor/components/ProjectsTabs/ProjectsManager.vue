<template>
  <div class="projects-tabs-container">
    <ProjectTabs
      :projects="editor.openTabsProjects"
      :activeProject="editor.activeProjectId"
      @select="editor.openProject"
      @close="editor.closeProject"
      @new="creator.createNewProject"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ProjectTabs from './components/ProjectTabs.vue'

import { useEditorProjectsStore } from '@/core/stores/useEditorProjectsStore'
import { useProjectCreationStore } from '@/core/stores/useProjectCreationStore'

const editor = useEditorProjectsStore()
const creator = useProjectCreationStore()

onMounted(() => {
  editor.init()
})
</script>

<style scoped>
.projects-tabs-container {
  width: 100%;
}
</style>
