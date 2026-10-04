<template>
  <div class="project-tools">

    <!-- اليسار: اسم المشروع -->
    <div class="center">
      <ProjectName />
    </div>

    <!-- الوسط: الإصدارات -->
    <div class="left">
      <VersionNumber
        :versions="activeProject?.versions"
        :currentVersion="activeProject?.currentVersion"
        @select="switchVersion"
      />

      <AddVersion @create="createVersion" />
    </div>

    <!-- اليمين: أدوات العرض -->
    <div class="right">
  <AddNode />
  <liveshare />
  <ViewModeIcon />
</div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProjectsStore } from '@/core/stores/useProjectsStore'
import { useEditorProjectsStore } from '@/core/stores/useEditorProjectsStore'

import liveshare from './liveshare.vue'
import ViewModeIcon from './ViewModeIcon.vue'
import ProjectName from './ProjectName.vue'
import VersionNumber from './VersionNumber.vue'
import AddVersion from './AddVersion.vue'
import AddNode from './AddNode.vue'

const projectsStore = useProjectsStore()
const editorStore = useEditorProjectsStore()

// المشروع المفعل فعليًا
const activeProject = computed(() => {
  return projectsStore.models.find(
    p => p.id === editorStore.activeProjectId
  )
})

function switchVersion(version) {
  if (!activeProject.value) return
  activeProject.value.currentVersion = version
  projectsStore.updateModel(activeProject.value)
}

function createVersion(newVersion) {
  if (!activeProject.value) return

  const versionObj = {
    id: crypto.randomUUID(),
    major: newVersion.major,
    minor: newVersion.minor,
    diagram: JSON.parse(JSON.stringify(activeProject.value.diagram))
  }

  activeProject.value.versions.push(versionObj)
  activeProject.value.currentVersion = versionObj

  projectsStore.updateModel(activeProject.value)
}
</script>

<style scoped>
.project-tools {
  position: sticky;       /* يبقى في الأعلى */
  top: 0;
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 98%;
  height: 60px;           /* ارتفاع شريط الأدوات */
  padding: 0 20px;

  background: #f5f5f5;    /* الخلفية تمتد كامل العرض */
  border-bottom: 1px solid #ddd;
}

/* الوسط: اسم المشروع */
.center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* اليسار: الإصدارات */
.left {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

/* اليمين: أدوات العرض */
.right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}
</style>
