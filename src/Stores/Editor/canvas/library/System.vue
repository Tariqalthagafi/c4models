<template>
  <svg
    :width="node.width"
    :height="node.height"
    xmlns="http://www.w3.org/2000/svg"
  >

    <!-- عرض الـ SVG الأصلي -->
<image
  :href="systemIcon"
  x="0"
  y="0"
  :width="node.width"
  :height="node.height"
/>


    <!-- طبقة إضافية من داخل SVG باستخدام raw -->


    <!-- النص -->
    <text
      :x="node.width / 2"
      y="45"
      text-anchor="middle"
      font-size="18"
      font-family="Arial"
      fill="#000"
    >
      {{ node.name }}
    </text>

  </svg>
</template>

<script setup>
import systemRaw from '/c4icons/system.svg?raw'

const systemIcon = "/c4icons/system.svg"

const baseWidth = 200
const baseHeight = 150

defineProps({
  node: Object
})
</script>
