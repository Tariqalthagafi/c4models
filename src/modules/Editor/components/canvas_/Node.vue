<template>
  <div
    class="node"
    :data-id="node.id"
    :style="{
      left: node.position.x + 'px',
      top: node.position.y + 'px'
    }"
  >

    <!-- شريط الأدوات -->
    <div class="toolbar">
      <button @click="startEditing">🖉</button>
      <button @click="toggleCollapse">⧉</button>
      <button @click="addRelation">⇄</button>
      <button @click="deleteNode">×</button>
    </div>

    <!-- المستطيل -->
    <div class="box" :class="{ collapsed: node.collapsed }">

      <!-- تعديل الاسم -->
      <input
        v-if="editing"
        v-model="node.name"
        @blur="stopEditing"
        @keyup.enter="stopEditing"
        class="edit-input"
        autofocus
      />

      <span
        v-else
        class="title"
        @dblclick="startEditing"
      >
        {{ node.name }}
      </span>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCurrentProjectStore } from '@/core/stores/useCurrentProjectStore'

const props = defineProps<{ node: any }>()
const current = useCurrentProjectStore()

const editing = ref(false)

function startEditing() {
  editing.value = true
}

function stopEditing() {
  editing.value = false
  current.saveProject()
}

function toggleCollapse() {
  props.node.collapsed = !props.node.collapsed
  current.saveProject()
}

function deleteNode() {
  const version = current.currentVersion
  if (!version) return

  version.nodes = version.nodes.filter(n => n.id !== props.node.id)

  version.relations = version.relations.filter(
    r => r.from !== props.node.id && r.to !== props.node.id
  )

  current.saveProject()
}

function addRelation() {
  console.log('Add relation clicked for node:', props.node.id)
}
</script>

<style scoped>
.node {
  position: absolute;
  user-select: none;
}

.toolbar {
  display: flex;
  gap: 6px;
  margin-bottom: 6px;
}

.toolbar button {
  padding: 4px 10px;
  border: none;
  background: #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.box {
  background: #fff;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 12px;
  min-width: 140px;
  min-height: 60px;
  text-align: center;
}

.box.collapsed {
  opacity: 0.6;
}

.title {
  font-size: 18px;
  user-select: none;
}

.edit-input {
  width: 90%;
  padding: 6px;
  font-size: 18px;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 6px;
}
</style>
