<template>
  <MainLayout>
    <div class="workspace-page">



      <!-- المنطقة الرئيسية -->
      <div class="main-area">

        <!-- لو ما فيه مشروع مفتوح -->
        <div v-if="!editor.activeProject" class="empty-screen">
          لا يوجد مشروع مفتوح
        </div>

        <!-- لو فيه مشروع مفتوح -->
        <template v-else>

          <!-- الكانفاس في المنتصف -->
          <div class="canvas-area">
                  <!-- ⭐ أدوات الكانفاس هنا على مستوى workspace -->
      <ProjectTools />
            <Canvas />
          </div>

          <!-- الباليتة في اليمين -->
          <div class="palette-area">
            <ToolsPalette />
            
          </div>

        </template>

      </div>

      <!-- التابات في الأسفل -->
      <div class="tabs-area">
        <ProjectsManager />
      </div>

    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../../layout/MainLayout.vue'
import ToolsPalette from '@/modules/Editor/components/palette/ToolsPalette.vue'
import ProjectsManager from '@/modules/Editor/components/ProjectsTabs/ProjectsManager.vue'
import Canvas from '@/modules/Editor/components/canvas_/Canvas.vue'
import ProjectTools from '@/modules/Editor/components/canvasTools/ProjectTools.vue'
import { useEditorProjectsStore } from '@/core/stores/useEditorProjectsStore'

const editor = useEditorProjectsStore()
</script>

<style scoped>
.workspace-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
}

/* ⭐ التوب بار */
.project-tools {
  flex-shrink: 0;
}

/* المنطقة الرئيسية */
.main-area {
  flex: 1;
  display: flex;
  overflow: hidden;
  background: #fff;
}

/* شاشة فارغة */
.empty-screen {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #777;
  background: #fafafa;
}

/* الكانفاس */
.canvas-area {
  flex: 1;
  overflow: hidden;
  background: #fff;
}

/* الباليتة */
.palette-area {
  width: 260px;
  border-left: 1px solid #ddd;
  background: #fff;
  overflow-y: auto;
}

/* التابات */
.tabs-area {
  border-top: 1px solid #ddd;
  background: #f7f7f7;
  flex-shrink: 0;
}
</style>
