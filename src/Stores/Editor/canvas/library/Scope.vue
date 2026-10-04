<template>
  <svg
    :width="node.width"
    :height="node.height"
    class="external-system-shape"
    xmlns="http://www.w3.org/2000/svg"
  >

    <!-- الإطار الخارجي dashed -->
    <rect
      x="10"
      y="10"
      :width="node.width - 20"
      :height="node.height - 20"
      rx="12"
      ry="12"
      stroke="#000"
      stroke-width="3"
      stroke-dasharray="10 8"
      fill="none"
    />

    <!-- الاسم -->
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

    <!-- التقنية -->
    <text
      v-if="node.tech"
      :x="node.width / 2"
      y="75"
      text-anchor="middle"
      font-size="14"
      font-family="Arial"
      fill="#555"
    >
      {{ node.tech }}
    </text>

    <!-- أيقونة التقنية -->
    <image
      v-if="node.techIcon"
      :href="node.techIcon"
      :x="node.width - 45"
      y="15"
      width="30"
      height="30"
    />

  </svg>
</template>

<script setup>
defineProps({
  node: Object
})
</script>

<style scoped>
.external-system-shape {
  cursor: pointer;
  user-select: none;
}
</style>
