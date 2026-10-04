<template>
  <div class="shapes">

    <div class="shape-grid">
      <div
        v-for="(shape, key) in shapes"
        :key="key"
        class="shape-item"
        draggable="true"
        @dragstart="onDragStart(key, $event)"
        @click="addShape(key)"
      >

        <!-- أيقونة SVG فقط -->
        <div class="preview">
          <img :src="shape.icon" alt="" class="icon" />
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { C4Icons } from './c4icons.js'

const shapes = C4Icons

function onDragStart(key, evt) {
  evt.dataTransfer.setData("shape-type", key)
}

function addShape(type) {
  emit("add", type)
}
</script>

<style scoped>
.shapes {
  background: transparent;
  padding: 0;
}

/* شبكة أيقونات بدل قائمة */
.shape-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-end; /* أو center حسب رغبتك */
}

.shape-item {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
  transition: 0.2s;
}

.shape-item:hover {
  transform: scale(1.1);
}

/* أيقونة SVG */
.preview {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
</style>
